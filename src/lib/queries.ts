import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query GetProfile {
    profile(where: { id: "clzl31nlq09m207pgsumzbsb4" }) {
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
    project(where: { id: "clzl2cx4p092z0bpigrfmwfai" }) {
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
