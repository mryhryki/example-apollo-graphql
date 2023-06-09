// https://www.apollographql.com/docs/react/get-started
import {ApolloClient, InMemoryCache, ApolloProvider, gql, from, HttpLink} from '@apollo/client';
import {onError} from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri: "http://localhost:57436/graphql"
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({message, locations, path}) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    })
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

export const client = new ApolloClient({
  // uri: 'http://localhost:57436/',
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink])
});
