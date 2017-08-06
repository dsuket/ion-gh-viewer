import gql from 'graphql-tag';

export interface ViewerProfileResponse {
  data: {
    viewer: {
      login: string;
      avatarUrl: string;
      name: string;
      email: string;
      url: string;
    };
  };
  loading: boolean;
}

export const viewerProfileQuery = gql`
query ViewerProfile {
  viewer {
    login
    avatarUrl
    name
    email
    url
  }
}
`;
