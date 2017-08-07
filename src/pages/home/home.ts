import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Observable} from 'rxjs';
import {GithubApiProvider} from '../../providers/github-api/github-api';
import {HomeRepositoriesViewer} from '../../providers/github-api/query/home-repositories';
import {RepoPage} from '../repo/repo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  repos$: Observable<HomeRepositoriesViewer>;

  constructor(
    private githubApi: GithubApiProvider,
    private navCtrl: NavController
  ) {
  }

  ionViewDidLoad(): void {
    console.log('ionViewWillEnter');
    this.initRepos();
  }

  openRepo(repo: GQL.IRepository): void {
    const params = {
      repo,
      name: repo.name,
      owner: repo.owner.login,
    }
    this.navCtrl.push(RepoPage, params);
  }

  private initRepos(): void {
    this.repos$ = this.githubApi.getHomeRepos()
      .debug('HomePage#initRepos: getHomeRepos')
      .map(resp => resp.data.viewer)
      .share();
  }
}
