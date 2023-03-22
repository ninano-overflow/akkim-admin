import { gql, useMutation } from "@apollo/client";
import { ApolloError } from "apollo-server";
import {
  SetBoardMainMutation,
  SetBoardMainMutationVariables,
} from "../gql/graphql";

const SET_BOARD_MAIN_MUTATION = gql`
  mutation setBoardMain($input: SetBoardMainInput!) {
    setBoardMain(input: $input) {
      ok
      err
    }
  }
`;

export const useSetBoardMain = (
  onCompleted?: (data: SetBoardMainMutation) => void,
  onError?: (error: ApolloError) => void
) => {
  return useMutation<SetBoardMainMutation, SetBoardMainMutationVariables>(
    SET_BOARD_MAIN_MUTATION,
    {
      onCompleted,
    }
  );
};
