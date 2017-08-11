import { Component, EventEmitter } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {GithubApiProvider, IssueState} from '../../providers/github-api/github-api';

interface loadIssuesOptions {
  owner?: string;
  name?: string;
  first?: number;
  aster?: string;
  states?: IssueState;
}

@Component({
  selector: 'page-issues',
  templateUrl: 'issues.html',
})
export class IssuesPage {

  issues$ = new EventEmitter<GQL.IIssueConnection>();

  // virtual scroll のため、配列に持たせる
  issues: GQL.IIssue[] = [];
  issues2: GQL.IIssue[];

  hasNextPage = true;

  get states(): IssueState {
    return this._states;
  }

  set states(st: IssueState) {
    this._states = st;
    this.reloadIssues();
  }

  get searchInput(): string {
    return this._searchInput;
  }

  set searchInput(input: string) {
    this._searchInput = input;
    this.searchLocal(input);
  }

  private _searchInput = '';
  private _states: IssueState = 'OPEN';
  private pageInfo: GQL.IPageInfo;

  constructor(
    private navParams: NavParams,
    private githubApi: GithubApiProvider,
  ) {}

  ionViewDidLoad() {
    this.issues$
      .debug('this.issues$')
      .subscribe(issues => {
        this.pageInfo = issues.pageInfo;
        this.hasNextPage = this.pageInfo.hasNextPage;
        if (issues.nodes && issues.nodes.length > 0) {
          this.issues = this.issues.concat(issues.nodes);
        }
      });

    this.reloadIssues();
  }

  openIssuesPage(): void {
    console.log('openIssuesPage');
  }

  getNumber(i: number, item: GQL.IIssue): number {
    return item.number;
  }

  doInfinite(infiniteScroll: any): void {
    let options;
    if (this.issues.length > 0) {
      const after = this.pageInfo && this.pageInfo.endCursor;
      options = {after};
    }
    this.loadIssues(options)
    .then(() => {
      infiniteScroll.complete();
    });

  }

  private searchLocal(input) {
    console.log('searchLocal:', input);
    input = (input || '').trim();
    if (!input) {
      this.issues = this.issues2;
      this.issues2 = null;
      return;
    }
    const issues = this.issues2 || this.issues;
    const idPattern = /^#(\d+)/;
    const inputPattern = new RegExp(input, 'i');
    const searchResults = issues.filter(issue => {
      const idMatch = idPattern.exec(input);
      if (idMatch) {
        const number = Number(idMatch[1]);
        return issue.number === number;
      } else {
        return issue.title.match(inputPattern) ||
          issue.author.login.match(inputPattern);
      }
    });
    if (!this.issues2) {
      this.issues2 = this.issues;
    }
    this.issues = searchResults;
  }

  private reloadIssues(): void {
    this.clearIssues();
    this.loadIssues();
  }


  private clearIssues(): void {
    this.issues = [];
  }

  private loadIssues(options?: loadIssuesOptions): Promise<GQL.IIssueConnection> {
    console.log('loadIssues. options:', options);
    const owner = this.navParams.get('owner');
    const name = this.navParams.get('name');
    const first = 100;
    const states = this.states;
    const variables = Object.assign({owner, name, first, states}, options);
    return this.githubApi.getIssues(variables)
      .map(res => res.data.repository.issues)
      .debug('loadIssues: issues')
      .do(issues => {
        console.log('emit', issues);
        this.issues$.emit(issues);
      })
      .take(1)
      .toPromise();
  }
}
