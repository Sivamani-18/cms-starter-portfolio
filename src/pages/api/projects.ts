import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../lib/apolloClient';
import { GET_PROJECTS } from '../../lib/queries';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API route /api/projects called');
  try {
    const { data: projectsData } = await client.query({ query: GET_PROJECTS });
    console.log('Projects data fetched:', projectsData);

    res.status(200).json({
      projects: projectsData.projects,
    });
  } catch (error) {
    console.error('Error fetching projects data', error);
    res.status(500).json({ error: 'Failed to fetch projects data' });
  }
}
