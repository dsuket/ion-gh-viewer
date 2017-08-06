import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AuthProvider} from '../auth/auth';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';
import {provideClient, GithubGqlClient} from '../../misc/appolo/github-gql-client';
import {ViewerProfileResponse, viewerProfileQuery} from './query/viewer-profile';
import {HomeRepositoriesResponse, homeRepositoriesQuery} from './query/home-repositories';
import {RepositoryResponse, repositoryQuery} from './query/repository';
import {issuesQuery, IssuesResponse} from './query/issues';
import {IssueResponse, issueQuery} from './query/issue';

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

  getMe(): ApolloQueryObservable<ViewerProfileResponse> {
    return this.apollo.watchQuery<ViewerProfileResponse>({
      query: viewerProfileQuery
    });
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
    return this.client$
      .filter(client => client !== null)
      .map(() => {
        return this.apollo.watchQuery<HomeRepositoriesResponse>({
          query: homeRepositoriesQuery,
          variables
        });
      }).mergeAll();
  }

  getRepo(variables: RepositoryVariables): ApolloQueryObservable<RepositoryResponse> {
    return this.client$
      .filter(client => client !== null)
      .map(() => {
        return this.apollo.watchQuery<RepositoryResponse>({
          query: repositoryQuery,
          variables
        });
      }).mergeAll();
  }

  getIssues(variables: IssuesVariables): ApolloQueryObservable<IssuesResponse> {
    return this.client$
      .filter(client => client !== null)
      .map(() => {
        return this.apollo.watchQuery<IssuesResponse>({
          query: issuesQuery,
          variables
        });
      }).mergeAll();
  }

  getIssue(variables: IssueVariables): ApolloQueryObservable<IssueResponse> {
    return this.client$
      .filter(client => client !== null)
      .map(() => {
        return this.apollo.watchQuery<IssueResponse>({
          query: issueQuery,
          variables
        });
      }).mergeAll();
  }
}
