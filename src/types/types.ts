export interface Profile {
  name: string;
  shortName: string;
  textLogo: string;
  role: string;
  country: string;
  bio: string;
  dob: string;
  mobileNo: string;
  contactInfo: string;
  profilePicture: {
    url: string;
  };
  slug: string;
  skills: any;
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  tags: string[];
  image: {
    url: string;
  };
}

export interface Asset {
  id: string;
  url: string;
  __typename: string;
}

export interface UsefulResource {
  logo: Asset;
  heroCardBg: Asset;
  __typename: string;
}
