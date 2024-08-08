import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const hygraphUrl = process.env.NEXT_PUBLIC_HYGRAPH_URL;
const hygraphApiKey = process.env.NEXT_PUBLIC_HYGRAPH_API_KEY;

if (!hygraphUrl) {
  throw new Error('NEXT_PUBLIC_HYGRAPH_URL is not defined');
}

if (!hygraphApiKey) {
  throw new Error('NEXT_PUBLIC_HYGRAPH_API_KEY is not defined');
}

const httpLink = new HttpLink({
  uri: hygraphUrl,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${hygraphApiKey}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
