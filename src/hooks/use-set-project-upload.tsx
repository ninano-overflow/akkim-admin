import { gql, useMutation } from "@apollo/client";
import { ApolloError } from "apollo-server";
import {
  SetProjectUploadMutation,
  SetProjectUploadMutationVariables,
} from "../gql/graphql";

const SET_PROJECT_UPLOAD_MUTATION = gql`
  mutation setProjectUpload($input: SetProjectUploadInput!) {
    setProjectUpload(input: $input) {
      ok
      err
    }
  }
`;

export const useSetProjectUpload = (
  onCompleted?: (data: SetProjectUploadMutation) => void,
  onError?: (error: ApolloError) => void
) => {
  return useMutation<
    SetProjectUploadMutation,
    SetProjectUploadMutationVariables
  >(SET_PROJECT_UPLOAD_MUTATION, {
    onCompleted,
  });
};
