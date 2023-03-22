import { gql, useLazyQuery } from "@apollo/client";
import { ApolloError } from "apollo-server";
import { GetProjectQuery, GetProjectQueryVariables } from "../gql/graphql";

const GET_PROJECT_QUERY = gql`
  query getProject($input: GetProjectInput!) {
    getProject(input: $input) {
      ok
      err
      project {
        id
        title
        createdAt
        manager
        place
        uuid
        uploadedMainImg {
          id
          uuid
          url
        }
      }
    }
  }
`;

export const useGetProject = (
  onCompleted?: (data: GetProjectQuery) => void,
  onError?: (error: ApolloError) => void
) => {
  return useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(
    GET_PROJECT_QUERY,
    {
      onCompleted,
      fetchPolicy: "network-only",
    }
  );
};
