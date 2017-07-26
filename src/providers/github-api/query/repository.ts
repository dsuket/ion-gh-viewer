import gql from 'graphql-tag';

export interface RepositoryResponse {
  repository: GQL.IRepository;
}

export const Repository = gql`
query Repository($owner: String!, $name: String!, $first: Int = 5, $states: [IssueState!] = OPEN) {
  repository(owner: $owner, name: $name) {
    nameWithOwner
    description
    pushedAt
    issues(first: $first, states: $states, orderBy: {field: UPDATED_AT, direction: DESC}) {
      totalCount
      nodes {
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
