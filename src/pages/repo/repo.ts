import { Component, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {GithubApiProvider} from '../../providers/github-api/github-api';

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
    const owner = this.navParams.get('owner');
    const name = this.navParams.get('name');
    this.githubApi.getRepo({owner, name})
      .map(res => res.data.repository)
      .debug('repository')
      .subscribe(repo => {
        this.repo$.emit(repo)
      })
  }

  openIssuesPage(): void {
    const owner = this.navParams.get('owner');
    const name = this.navParams.get('name');
    this.navCtrl.push('IssuesPage', {owner, name});
  }

}
