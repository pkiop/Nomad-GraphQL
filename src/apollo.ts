import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const link = createHttpLink({
  uri: "https://movieql.now.sh/",
  fetchOptions: {
    mode: 'no-cors',
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default client;