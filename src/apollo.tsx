import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import React from "react";
import { getToken } from "./token";

const token = getToken();

export const isLoggedInVar = makeVar(Boolean(token));
export const authTokenVar = makeVar(token);

export const UPLOAD_URI =
  process.env.NODE_ENV === "development"
    ? "http://13.209.20.239:4977/upload/file"
    : "https://";

export const DOWNLOAD_URI =
  process.env.NODE_ENV === "development"
    ? "http://13.209.20.239:4977/upload/get/"
    : "https://";

const URI =
  process.env.NODE_ENV === "development"
    ? "http://13.209.20.239:4977/graphql"
    : "https://";

const httpLink = createHttpLink({ uri: URI });
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "akkim-jwt": authTokenVar() || "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: URI,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedInVar: {
            read() {
              return isLoggedInVar();
            },
          },
          token: {
            read() {
              return authTokenVar();
            },
          },
        },
      },
    },
  }),
});
