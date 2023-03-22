import { gql, useLazyQuery } from "@apollo/client";
import { ApolloError } from "apollo-server";
import { ListProjectQuery, ListProjectQueryVariables } from "../gql/graphql";

const LIST_PROJECT_QUERY = gql`
  query listProject($input: ListProjectInput!) {
    listProject(input: $input) {
      ok
      err
      totalResults
      totalPages
      projects {
        id
        title
        createdAt
        manager
        place
      }
    }
  }
`;

export const useListProject = (
  onCompleted?: (data: ListProjectQuery) => void,
  onError?: (error: ApolloError) => void
) => {
  return useLazyQuery<ListProjectQuery, ListProjectQueryVariables>(
    LIST_PROJECT_QUERY,
    {
      onCompleted,
      fetchPolicy: "network-only",
    }
  );
};
