import gql from 'graphql-tag';

export interface IssuesResponse {
  repository: GQL.IRepository;
}

export const Issues = gql`
query Repository($owner: String!, $name: String!, $first: Int = 20, $after: String, $states: [IssueState!] = OPEN) {
  repository(owner: $owner, name: $name) {
    issues(first: $first, after: $after, states: $states, orderBy: {field: UPDATED_AT, direction: DESC}) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        id
        number
        title
        author {
          login
        }
        assignees(first: 2) {
          totalCount
          nodes {
            login
          }
        }
        createdAt
        updatedAt
      }
    }
  }
}
`;
