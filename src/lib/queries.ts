import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query GetProfile {
    profiles {
      name
      bio
      dob
      mobileNo
      contactInfo
      profilePicture {
        url
      }
      slug
    }
  }
`;

export const GET_PROJECTS = gql`
  query {
    projects {
      name
      slug
      description
      tags
      image {
        url
      }
    }
  }
`;
