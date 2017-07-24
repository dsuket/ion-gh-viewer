import gql from 'graphql-tag';

export interface HomeRepositoriesResponse {
  viewer: HomeRepositoriesViewer
}

export interface HomeRepositoriesViewer {
  organizations: GQL.IOrganizationConnection;
  own: GQL.IRepositoryConnection;
  forked: GQL.IRepositoryConnection;
}

export const HomeRepositories = gql`
query HomeRepositories($orgNum: Int, $orgReposNum: Int, $reposNum: Int) {
  viewer {
    organizations(first: $orgNum) {
      nodes {
        name
        url
        repos: repositories(first: $orgReposNum, orderBy: {field: PUSHED_AT, direction: DESC}) {
          nodes {
            ...repo
          }
        }
      }
    }
    own: repositories(first: $reposNum, isFork: false, orderBy: {field: PUSHED_AT, direction: DESC}) {
      totalCount
      nodes {
        ...repo
      }
    }
    forked: repositories(first: $reposNum, isFork: true, orderBy: {field: PUSHED_AT, direction: DESC}) {
      totalCount
      nodes {
        ...repo
      }
    }
  }
}

fragment repo on Repository {
  name
  owner {login},
  nameWithOwner
  url
  watchersCount: watchers {
    totalCount
  }
  stargazersCount: stargazers {
    totalCount
  }
  updatedAt
  pushedAt
  isFork
}
`;
