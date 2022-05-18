import React, { FC } from "react";
import { ApolloClient, createHttpLink, ApolloProvider, InMemoryCache, HttpLink, DefaultOptions } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';

interface ApolloProviderProps {
}

export interface Media {
  url: string;
}

const APP_API = process.env.APP_API || 'http://welikan-strapi.hardart.cz';

const httpLink = createHttpLink({
  uri: `${APP_API}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}


export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions
});



export const WithGraphQL: FC<ApolloProviderProps> = ({ children }) => {
  return <ApolloProvider client={client}>{ children }</ApolloProvider>;
};

export const getStrapiURL = (path = "") => {
  return `${
    process.env.APP_API || "http://welikan-strapi.hardart.cz"
  }${path}`;
}

export const getStrapiMedia = (media: Media) => {
  const imageUrl = media?.url?.startsWith("/")
    ? getStrapiURL(media.url)
    : media?.url;
  return imageUrl;
}