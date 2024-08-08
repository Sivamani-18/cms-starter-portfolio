import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../lib/apolloClient';
import { GET_PROFILE, GET_PROJECTS } from '../../lib/queries';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API route /api/profile called');
  try {
    const { data: profileData } = await client.query({ query: GET_PROFILE });
    console.log('Profile data fetched:', profileData);

    const { data: projectsData } = await client.query({ query: GET_PROJECTS });
    console.log('Projects data fetched:', projectsData);

    res
      .status(200)
      .json({ profile: profileData.profile, projects: projectsData.Project });
  } catch (error) {
    console.error('Error fetching data', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
