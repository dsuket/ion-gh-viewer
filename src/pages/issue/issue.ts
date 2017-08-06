import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {GithubApiProvider, IssueVariables} from '../../providers/github-api/github-api';

@Component({
  selector: 'page-issue',
  templateUrl: 'issue.html',
})
export class IssuePage {

  issue$: Observable<GQL.IIssue>;

  constructor(
    private navParams: NavParams,
    private githubApi: GithubApiProvider,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IssuePage.', this.navParams);
    const {owner, name} = this.navParams.data
    const issueNo = Number(this.navParams.get('issueNo'));
    this.loadIssue({owner, name, issueNo});
  }

  loadIssue(issueParams: IssueVariables): void {
    this.issue$ = this.githubApi.getIssue(issueParams)
      .debug('IssuePage#loadIssue:')
      .map(resp => resp.data.repository.issue)
      .share();
  }

}
