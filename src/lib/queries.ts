import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query GetProfile {
    profiles {
      name
      shortName
      textLogo
      role
      bio
      country
      dob
      mobileNo
      contactInfo
      profilePicture {
        url
      }
      slug
      skills
      socialMediaLink {
        fiverr
        facebook
        twitter
        linkedin
        github
        instagram
      }
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

export const GetUsefulResources = gql`
  query {
    usefulResources {
      logo {
        id
        url
      }
      heroCardBg {
        id
        url
      }
    }
  }
`;
