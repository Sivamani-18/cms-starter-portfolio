import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../lib/apolloClient';
import { GET_PROFILE } from '../../lib/queries';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API route /api/profile called');
  try {
    const { data: profileData } = await client.query({ query: GET_PROFILE });
    console.log('Profile data fetched:', profileData);

    res.status(200).json({
      profile: profileData.profiles[0],
    });
  } catch (error) {
    console.error('Error fetching profile data', error);
    res.status(500).json({ error: 'Failed to fetch profile data' });
  }
}
