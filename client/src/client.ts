// https://www.apollographql.com/docs/react/get-started
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:57436/',
  cache: new InMemoryCache(),
});