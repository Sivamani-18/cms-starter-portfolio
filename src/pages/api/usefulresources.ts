import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../lib/apolloClient';
import { GetUsefulResources } from '../../lib/queries';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API route /api/usefulresources called');
  try {
    const { data: resourcesData } = await client.query({
      query: GetUsefulResources,
    });
    console.log('Resources data fetched:', resourcesData);

    res.status(200).json({
      resources: resourcesData.usefulResources[0],
    });
  } catch (error) {
    console.error('Error fetching Resources data', error);
    res.status(500).json({ error: 'Failed to fetch resources data' });
  }
}
