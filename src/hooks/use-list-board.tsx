import { gql, useLazyQuery } from "@apollo/client";
import { ApolloError } from "apollo-server";
import { ListBoardQuery, ListBoardQueryVariables } from "../gql/graphql";

const LIST_BOARD_QUERY = gql`
  query listBoard($input: ListBoardInput!) {
    listBoard(input: $input) {
      ok
      err
      totalResults
      totalPages
      boards {
        id
        language
      }
    }
  }
`;

export const useListBoard = (
  onCompleted?: (data: ListBoardQuery) => void,
  onError?: (error: ApolloError) => void
) => {
  return useLazyQuery<ListBoardQuery, ListBoardQueryVariables>(
    LIST_BOARD_QUERY,
    {
      onCompleted,
      fetchPolicy: "network-only",
    }
  );
};
