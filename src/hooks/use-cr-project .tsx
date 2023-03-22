import { gql, useMutation } from "@apollo/client";
import { ApolloError } from "apollo-server";
import {
  CrProjectInput,
  CrProjectMutation,
  CrProjectMutationVariables,
} from "../gql/graphql";

export interface ICrProjectFormProps extends CrProjectInput {}

const DEL_PROJECT_MUTATION = gql`
  mutation crProject($input: CrProjectInput!) {
    crProject(input: $input) {
      ok
      err
    }
  }
`;

export const useCrProject = (
  onCompleted?: (data: CrProjectMutation) => void,
  onError?: (error: ApolloError) => void
) => {
  return useMutation<CrProjectMutation, CrProjectMutationVariables>(
    DEL_PROJECT_MUTATION,
    {
      onCompleted,
    }
  );
};
