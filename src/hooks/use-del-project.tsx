import { gql, useMutation } from "@apollo/client";
import { ApolloError } from "apollo-server";
import {
  DelProjectMutation,
  DelProjectMutationVariables,
} from "../gql/graphql";

const DEL_PROJECT_MUTATION = gql`
  mutation delProject($input: DelProjectInput!) {
    delProject(input: $input) {
      ok
      err
    }
  }
`;

export const useDelProject = (
  onCompleted?: (data: DelProjectMutation) => void,
  onError?: (error: ApolloError) => void
) => {
  return useMutation<DelProjectMutation, DelProjectMutationVariables>(
    DEL_PROJECT_MUTATION,
    {
      onCompleted,
    }
  );
};
