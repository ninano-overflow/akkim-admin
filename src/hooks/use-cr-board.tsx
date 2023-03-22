import { gql, useMutation } from "@apollo/client";
import { ApolloError } from "apollo-server";
import {
  CrBoardInput,
  CrBoardMutation,
  CrBoardMutationVariables,
} from "../gql/graphql";

export interface ICrBoardFormProps extends CrBoardInput {}

const CR_BOARD_MUTATION = gql`
  mutation crBoard($input: CrBoardInput!) {
    crBoard(input: $input) {
      ok
      err
    }
  }
`;

export const useCrBoard = (
  onCompleted?: (data: CrBoardMutation) => void,
  onError?: (error: ApolloError) => void
) => {
  return useMutation<CrBoardMutation, CrBoardMutationVariables>(
    CR_BOARD_MUTATION,
    {
      onCompleted,
    }
  );
};
