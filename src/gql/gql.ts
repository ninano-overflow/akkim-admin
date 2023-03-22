/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation crBoard($input: CrBoardInput!) {\n    crBoard(input: $input) {\n      ok\n      err\n    }\n  }\n": types.CrBoardDocument,
    "\n  mutation crProject($input: CrProjectInput!) {\n    crProject(input: $input) {\n      ok\n      err\n    }\n  }\n": types.CrProjectDocument,
    "\n  mutation delBoard($input: DelBoardInput!) {\n    delBoard(input: $input) {\n      ok\n      err\n    }\n  }\n": types.DelBoardDocument,
    "\n  mutation delProject($input: DelProjectInput!) {\n    delProject(input: $input) {\n      ok\n      err\n    }\n  }\n": types.DelProjectDocument,
    "\n  mutation editBoard($input: EditBoardInput!) {\n    editBoard(input: $input) {\n      ok\n      err\n    }\n  }\n": types.EditBoardDocument,
    "\n  mutation editProject($input: EditProjectInput!) {\n    editProject(input: $input) {\n      ok\n      err\n    }\n  }\n": types.EditProjectDocument,
    "\n  query getBoard($input: GetBoardInput!) {\n    getBoard(input: $input) {\n      ok\n      err\n      board {\n        id\n        language\n        type\n        uploadedSignBgImg {\n          id\n          uuid\n          url\n        }\n        uploadedButtonImg {\n          id\n          uuid\n          url\n        }\n        uploadedPlayMedia {\n          id\n          uuid\n          url\n        }\n      }\n    }\n  }\n": types.GetBoardDocument,
    "\n  query getProject($input: GetProjectInput!) {\n    getProject(input: $input) {\n      ok\n      err\n      project {\n        id\n        title\n        createdAt\n        manager\n        place\n        uuid\n        uploadedMainImg {\n          id\n          uuid\n          url\n        }\n      }\n    }\n  }\n": types.GetProjectDocument,
    "\n  query listBoard($input: ListBoardInput!) {\n    listBoard(input: $input) {\n      ok\n      err\n      totalResults\n      totalPages\n      boards {\n        id\n        language\n      }\n    }\n  }\n": types.ListBoardDocument,
    "\n  query listProject($input: ListProjectInput!) {\n    listProject(input: $input) {\n      ok\n      err\n      totalResults\n      totalPages\n      projects {\n        id\n        title\n        createdAt\n        manager\n        place\n      }\n    }\n  }\n": types.ListProjectDocument,
    "\n  mutation setBoardMain($input: SetBoardMainInput!) {\n    setBoardMain(input: $input) {\n      ok\n      err\n    }\n  }\n": types.SetBoardMainDocument,
    "\n  mutation setBoardUpload($input: SetBoardUploadInput!) {\n    setBoardUpload(input: $input) {\n      ok\n      err\n    }\n  }\n": types.SetBoardUploadDocument,
    "\n  mutation setProjectUpload($input: SetProjectUploadInput!) {\n    setProjectUpload(input: $input) {\n      ok\n      err\n    }\n  }\n": types.SetProjectUploadDocument,
    "\n  mutation signIn($input: SignInInput!) {\n    signIn(input: $input) {\n      ok\n      token\n      err\n    }\n  }\n": types.SignInDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation crBoard($input: CrBoardInput!) {\n    crBoard(input: $input) {\n      ok\n      err\n    }\n  }\n"): (typeof documents)["\n  mutation crBoard($input: CrBoardInput!) {\n    crBoard(input: $input) {\n      ok\n      err\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation crProject($input: CrProjectInput!) {\n    crProject(input: $input) {\n      ok\n      err\n    }\n  }\n"): (typeof documents)["\n  mutation crProject($input: CrProjectInput!) {\n    crProject(input: $input) {\n      ok\n      err\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation delBoard($input: DelBoardInput!) {\n    delBoard(input: $input) {\n      ok\n      err\n    }\n  }\n"): (typeof documents)["\n  mutation delBoard($input: DelBoardInput!) {\n    delBoard(input: $input) {\n      ok\n      err\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation delProject($input: DelProjectInput!) {\n    delProject(input: $input) {\n      ok\n      err\n    }\n  }\n"): (typeof documents)["\n  mutation delProject($input: DelProjectInput!) {\n    delProject(input: $input) {\n      ok\n      err\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation editBoard($input: EditBoardInput!) {\n    editBoard(input: $input) {\n      ok\n      err\n    }\n  }\n"): (typeof documents)["\n  mutation editBoard($input: EditBoardInput!) {\n    editBoard(input: $input) {\n      ok\n      err\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation editProject($input: EditProjectInput!) {\n    editProject(input: $input) {\n      ok\n      err\n    }\n  }\n"): (typeof documents)["\n  mutation editProject($input: EditProjectInput!) {\n    editProject(input: $input) {\n      ok\n      err\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getBoard($input: GetBoardInput!) {\n    getBoard(input: $input) {\n      ok\n      err\n      board {\n        id\n        language\n        type\n        uploadedSignBgImg {\n          id\n          uuid\n          url\n        }\n        uploadedButtonImg {\n          id\n          uuid\n          url\n        }\n        uploadedPlayMedia {\n          id\n          uuid\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getBoard($input: GetBoardInput!) {\n    getBoard(input: $input) {\n      ok\n      err\n      board {\n        id\n        language\n        type\n        uploadedSignBgImg {\n          id\n          uuid\n          url\n        }\n        uploadedButtonImg {\n          id\n          uuid\n          url\n        }\n        uploadedPlayMedia {\n          id\n          uuid\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProject($input: GetProjectInput!) {\n    getProject(input: $input) {\n      ok\n      err\n      project {\n        id\n        title\n        createdAt\n        manager\n        place\n        uuid\n        uploadedMainImg {\n          id\n          uuid\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProject($input: GetProjectInput!) {\n    getProject(input: $input) {\n      ok\n      err\n      project {\n        id\n        title\n        createdAt\n        manager\n        place\n        uuid\n        uploadedMainImg {\n          id\n          uuid\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query listBoard($input: ListBoardInput!) {\n    listBoard(input: $input) {\n      ok\n      err\n      totalResults\n      totalPages\n      boards {\n        id\n        language\n      }\n    }\n  }\n"): (typeof documents)["\n  query listBoard($input: ListBoardInput!) {\n    listBoard(input: $input) {\n      ok\n      err\n      totalResults\n      totalPages\n      boards {\n        id\n        language\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query listProject($input: ListProjectInput!) {\n    listProject(input: $input) {\n      ok\n      err\n      totalResults\n      totalPages\n      projects {\n        id\n        title\n        createdAt\n        manager\n        place\n      }\n    }\n  }\n"): (typeof documents)["\n  query listProject($input: ListProjectInput!) {\n    listProject(input: $input) {\n      ok\n      err\n      totalResults\n      totalPages\n      projects {\n        id\n        title\n        createdAt\n        manager\n        place\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation setBoardMain($input: SetBoardMainInput!) {\n    setBoardMain(input: $input) {\n      ok\n      err\n    }\n  }\n"): (typeof documents)["\n  mutation setBoardMain($input: SetBoardMainInput!) {\n    setBoardMain(input: $input) {\n      ok\n      err\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation setBoardUpload($input: SetBoardUploadInput!) {\n    setBoardUpload(input: $input) {\n      ok\n      err\n    }\n  }\n"): (typeof documents)["\n  mutation setBoardUpload($input: SetBoardUploadInput!) {\n    setBoardUpload(input: $input) {\n      ok\n      err\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation setProjectUpload($input: SetProjectUploadInput!) {\n    setProjectUpload(input: $input) {\n      ok\n      err\n    }\n  }\n"): (typeof documents)["\n  mutation setProjectUpload($input: SetProjectUploadInput!) {\n    setProjectUpload(input: $input) {\n      ok\n      err\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation signIn($input: SignInInput!) {\n    signIn(input: $input) {\n      ok\n      token\n      err\n    }\n  }\n"): (typeof documents)["\n  mutation signIn($input: SignInInput!) {\n    signIn(input: $input) {\n      ok\n      token\n      err\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;