import { gql, useMutation } from "@apollo/client";
import { ApolloError } from "apollo-server";
import {
  SetBoardUploadMutation,
  SetBoardUploadMutationVariables,
} from "../gql/graphql";

const SET_BOARD_UPLOAD_MUTATION = gql`
  mutation setBoardUpload($input: SetBoardUploadInput!) {
    setBoardUpload(input: $input) {
      ok
      err
    }
  }
`;

export const useSetBoardUpload = (
  onCompleted?: (data: SetBoardUploadMutation) => void,
  onError?: (error: ApolloError) => void
) => {
  return useMutation<SetBoardUploadMutation, SetBoardUploadMutationVariables>(
    SET_BOARD_UPLOAD_MUTATION,
    {
      onCompleted,
    }
  );
};
