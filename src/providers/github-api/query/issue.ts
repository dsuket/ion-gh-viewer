import gql from 'graphql-tag';

export interface IssueResponse {
  repository: GQL.IRepository;
}

export const issueQuery = gql`
query Repository($owner: String!, $name: String!, $issueNo: Int!) {
  repository(owner: $owner, name: $name) {
    issue(number: $issueNo) {
      id
      number
      title
      author {
        login
      }
      assignees(first: 3) {
        totalCount
        nodes {
          login
        }
      }
      body
      bodyHTML
      createdAt
      updatedAt
    }
  }
}
`;
