import { Component, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {GithubApiProvider} from '../../providers/github-api/github-api';
import {IssuesPage} from '../issues/issues';
import {IssuePage} from '../issue/issue';

interface NavParamValues {
  owner: string;
  name: string;
}

@Component({
  selector: 'page-repo',
  templateUrl: 'repo.html',
})
export class RepoPage {

  public repo$ = new EventEmitter<GQL.IRepository>();

  constructor(
    private githubApi: GithubApiProvider,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    const repo = this.navParams.get('repo');
    if (repo) {
      this.repo$.emit(repo);
    }
  }

  ionViewWillEnter(): void {
    const vars = this.getNabParamValues();
    this.githubApi.getRepo(vars)
      .map(res => res.data.repository)
      .debug('RepoPage#ionViewWillEnter repository')
      .subscribe(repo => {
        this.repo$.emit(repo)
      })
  }

  openIssuesPage(): void {
    this.navCtrl.push(IssuesPage, this.getNabParamValues());
  }

  openIssuePage(issue: GQL.IIssue): void {
    const param = Object.assign({
      issueNo: issue.number
    }, this.getNabParamValues());
    this.navCtrl.push(IssuePage, param);
  }

  private getNabParamValues(): NavParamValues {
    const owner = this.navParams.get('owner');
    const name = this.navParams.get('name');
    return {owner, name};
  }

}
