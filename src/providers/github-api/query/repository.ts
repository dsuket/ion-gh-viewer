import gql from 'graphql-tag';

export interface RepositoryResponse {
  repository: GQL.IRepository;
}

export const Repository = gql`
query Repository($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    nameWithOwner
    description
    pushedAt
    updatedAt
    issues(first: 5, states: OPEN, orderBy: {field: UPDATED_AT, direction: DESC}) {
      nodes {
        title
        author {
          login
        }
        assignees(first: 3) {
          nodes {
            login
          }
        }
        createdAt
        updatedAt
        lastEditedAt
      }
    }

  }
}
`;
