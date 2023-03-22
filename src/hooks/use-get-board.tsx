import { gql, useLazyQuery } from "@apollo/client";
import { ApolloError } from "apollo-server";
import { GetBoardQuery, GetBoardQueryVariables } from "../gql/graphql";

const GET_BOARD_QUERY = gql`
  query getBoard($input: GetBoardInput!) {
    getBoard(input: $input) {
      ok
      err
      board {
        id
        language
        type
        uploadedSignBgImg {
          id
          uuid
          url
        }
        uploadedButtonImg {
          id
          uuid
          url
        }
        uploadedPlayMedia {
          id
          uuid
          url
        }
      }
    }
  }
`;

export const useGetBoard = (
  onCompleted?: (data: GetBoardQuery) => void,
  onError?: (error: ApolloError) => void
) => {
  return useLazyQuery<GetBoardQuery, GetBoardQueryVariables>(GET_BOARD_QUERY, {
    onCompleted,
    fetchPolicy: "network-only",
  });
};
