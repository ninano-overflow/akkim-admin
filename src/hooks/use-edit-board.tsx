import { gql, useMutation } from "@apollo/client";
import { ApolloError } from "apollo-server";
import {
  EditBoardInput,
  EditBoardMutation,
  EditBoardMutationVariables,
} from "../gql/graphql";

export interface IEditBoardFormProps extends EditBoardInput {}

const EDIT_BOARD_MUTATION = gql`
  mutation editBoard($input: EditBoardInput!) {
    editBoard(input: $input) {
      ok
      err
    }
  }
`;

export const useEditBoard = (
  onCompleted?: (data: EditBoardMutation) => void,
  onError?: (error: ApolloError) => void
) => {
  return useMutation<EditBoardMutation, EditBoardMutationVariables>(
    EDIT_BOARD_MUTATION,
    {
      onCompleted,
    }
  );
};
