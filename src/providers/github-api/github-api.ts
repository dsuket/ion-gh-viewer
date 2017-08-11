import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AuthProvider} from '../auth/auth';
import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { DocumentNode } from 'graphql';
import {provideClient, GithubGqlClient} from '../../misc/appolo/github-gql-client';
import {ViewerProfileResponse, viewerProfileQuery} from './query/viewer-profile';
import {HomeRepositoriesResponse, homeRepositoriesQuery} from './query/home-repositories';
import {RepositoryResponse, repositoryQuery} from './query/repository';
import {issuesQuery, IssuesResponse} from './query/issues';
import {IssueResponse, issueQuery} from './query/issue';
import {Observable} from 'rxjs/Observable';

export interface RepositoryVariables {
  owner: string;
  name: string;
}

export type IssueState = 'OPEN' | 'CLOSED';

export interface IssuesVariables {
  owner: string;
  name: string;
  first?: number;
  aster?: string;
  states?: IssueState;
}

export interface IssueVariables {
  owner: string;
  name: string;
  issueNo: number;
}

/*
*/
@Injectable()
export class GithubApiProvider {

  private client$ = new BehaviorSubject<GithubGqlClient>(null);

  constructor(
    private apollo: Apollo,
    private auth: AuthProvider,
  ) {
    const client = provideClient();
    this.auth.user$
      .debug('GithubApiProvider#auth.user$')
      .subscribe(user => {
        const token = user ? user.token : null;
        if (token) {
          client.token = token;
          this.client$.next(client);
        } else {
          this.client$.next(null);
        }
      });
  }

  getMe(): Observable<ApolloQueryResult<ViewerProfileResponse>> {
    return this.client$
      .filter(client => client !== null)
      .take(1)
      .switchMap(() => this.query<ViewerProfileResponse>(viewerProfileQuery));
  }

  /**
   * get repository data for HomePage
   */
  getHomeRepos(): Observable<ApolloQueryResult<HomeRepositoriesResponse>> {
    const variables = {
      orgNum: 5,
      orgReposNum: 3,
      reposNum: 3
    };
    return this.client$
      .filter(client => client !== null)
      .take(1)
      .switchMap(() => this.query<HomeRepositoriesResponse>(homeRepositoriesQuery, variables));
  }

  getRepo(variables: RepositoryVariables): Observable<ApolloQueryResult<RepositoryResponse>> {
    return this.client$
      .filter(client => client !== null)
      .take(1)
      .switchMap(() => {
        return this.apollo.query<RepositoryResponse>({
          query: repositoryQuery,
          variables
        });
      });
  }

  getIssues(variables: IssuesVariables): Observable<ApolloQueryResult<IssuesResponse>> {
    return this.client$
      .filter(client => client !== null)
      .take(1)
      .switchMap(() => this.query<IssuesResponse>(issuesQuery, variables));
  }

  getIssue(variables: IssueVariables): Observable<ApolloQueryResult<IssueResponse>> {
    return this.client$
      .filter(client => client !== null)
      .take(1)
      .switchMap(() => this.query<IssueResponse>(issueQuery, variables));
  }

  private query<T>(query: DocumentNode, variables?: any): Observable<ApolloQueryResult<T>> {
    return this.apollo.query<T>({
      query,
      variables
    })
    .catch(err => {
      debugger;
      if (err.networkError) {
          console.log('err.networkError', err.networkError);
        if (err.networkError.response.status === 401) {
          console.log('logout');
          this.auth.logout();
          return;
        }
      }
      return Observable.throw(err);
    });
  }
}
