import { gql, useMutation } from "@apollo/client";
import { ApolloError } from "apollo-server";
import {
  SignInInput,
  SignInMutation,
  SignInMutationVariables,
} from "../gql/graphql";

export interface ISignInFormProps extends SignInInput {}

const SIGN_IN_MUTATION = gql`
  mutation signIn($input: SignInInput!) {
    signIn(input: $input) {
      ok
      token
      err
    }
  }
`;

export const useSignIn = (
  onCompleted?: (data: SignInMutation) => void,
  onError?: (error: ApolloError) => void
) => {
  return useMutation<SignInMutation, SignInMutationVariables>(
    SIGN_IN_MUTATION,
    {
      onCompleted,
    }
  );
};
