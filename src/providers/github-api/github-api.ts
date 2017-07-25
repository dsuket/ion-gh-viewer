import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Observable} from 'rxjs';
import {AuthProvider} from '../auth/auth';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import {provideClient} from '../../misc/appolo/github-gql-client';
import {ViewerProfileResponse, viewerProfile} from './query/viewer-profile';
import {HomeRepositoriesResponse, HomeRepositories} from './query/home-repositories';
import {RepositoryResponse, Repository} from './query/repository';

export interface RepositoryVariabled {
  owner: string;
  name: string;
}

/*
*/
@Injectable()
export class GithubApiProvider {

  private apiUrl = 'https://api.github.com/graphql';
  private token: string;

  constructor(
    private http: Http,
    private apollo: Apollo,
    private auth: AuthProvider,
  ) {
    const client = provideClient();
    this.auth.user$.subscribe(user => {
      if (user) {
        this.token = user.token;
        client.token = user.token;
      } else {
        this.token = null;
        client.token = null;
      }
    })
  }

  setToken(token: string): void {
    this.token = token;
  }

  /**
   * 生httpを使う
   * @param param
   */
  accessApi(param?: any): Observable<any> {
    if (!this.token) {
      return Observable.throw('token is null.');
    }
    const headers = new Headers();
    headers.set('Authorization', `bearer ${this.token}`);
    return this.http.request(this.apiUrl, {
      method: param ? 'post' : 'get',
      headers,
      body: param ? param : undefined,
    });
  }

  getMe(): ApolloQueryObservable<ViewerProfileResponse> {
    return this.apollo.watchQuery<ViewerProfileResponse>({
      query: viewerProfile
    });
    // return this.accessApi({query});
  }

  /**
   * get repository data for HomePage
   */
  getHomeRepos(): ApolloQueryObservable<HomeRepositoriesResponse> {
    const variables = {
      orgNum: 5,
      orgReposNum: 3,
      reposNum: 3
    };
    return this.apollo.watchQuery<HomeRepositoriesResponse>({
      query: HomeRepositories,
      variables
    });
  }

  getRepo(variables: RepositoryVariabled): ApolloQueryObservable<RepositoryResponse> {
    return this.apollo.watchQuery<RepositoryResponse>({
      query: Repository,
      variables
    });
  }

}
