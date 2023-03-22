import { gql, useMutation } from "@apollo/client";
import { ApolloError } from "apollo-server";
import {
  EditProjectInput,
  EditProjectMutation,
  EditProjectMutationVariables,
} from "../gql/graphql";

export interface IEditProjectFormProps extends EditProjectInput {}

const DEL_PROJECT_MUTATION = gql`
  mutation editProject($input: EditProjectInput!) {
    editProject(input: $input) {
      ok
      err
    }
  }
`;

export const useEditProject = (
  onCompleted?: (data: EditProjectMutation) => void,
  onError?: (error: ApolloError) => void
) => {
  return useMutation<EditProjectMutation, EditProjectMutationVariables>(
    DEL_PROJECT_MUTATION,
    {
      onCompleted,
    }
  );
};
