import { gql, useMutation } from "@apollo/client";
import { ApolloError } from "apollo-server";
import { DelBoardMutation, DelBoardMutationVariables } from "../gql/graphql";

const DEL_BOARD_MUTATION = gql`
  mutation delBoard($input: DelBoardInput!) {
    delBoard(input: $input) {
      ok
      err
    }
  }
`;

export const useDelBoard = (
  onCompleted?: (data: DelBoardMutation) => void,
  onError?: (error: ApolloError) => void
) => {
  return useMutation<DelBoardMutation, DelBoardMutationVariables>(
    DEL_BOARD_MUTATION,
    {
      onCompleted,
    }
  );
};
