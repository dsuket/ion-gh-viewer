import { Component, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
import {GithubApiProvider} from '../../providers/github-api/github-api';

@Component({
  selector: 'page-repo',
  templateUrl: 'repo.html',
})
export class RepoPage {

  public repo$ = new EventEmitter<any>();

  constructor(
    private githubApi: GithubApiProvider,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepoPage');
    const repo = this.navParams.get('repo');
    if (repo) {
      this.repo$.emit(repo);
    }
  }

  ionViewWillEnter(): void {
    console.log('ionViewWillEnter RepoPage');
    const owner = this.navParams.get('owner');
    const name = this.navParams.get('name');
    console.log('call getRepo', {owner, name});
    this.githubApi.getRepo({owner, name})
      .map(res => res.data.repository)
      .subscribe(repo => {
        this.repo$.emit(repo)
      })
  }

}
