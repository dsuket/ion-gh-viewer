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
  ) {
  }

  ionViewWillEnter(): void {
    this.initRepos();
  }

  private initRepos(): void {
    this.repos$ = this.githubApi.getHomeRepos()
      .debug('getHomeRepos viewer')
      // .delay(100000)
      .map(resp => resp.data.viewer)
      .share();
  }
}
