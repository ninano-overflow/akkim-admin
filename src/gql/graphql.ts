/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Board = {
  __typename?: 'Board';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  isMain: Scalars['Boolean'];
  language: Scalars['String'];
  project: Project;
  type: BoardType;
  uploadedButtonImg?: Maybe<Upload>;
  uploadedPlayMedia?: Maybe<Upload>;
  uploadedSignBgImg?: Maybe<Upload>;
};

export enum BoardType {
  Audio = 'Audio',
  Video = 'Video'
}

export type CrBoardInput = {
  language: Scalars['String'];
  projectId: Scalars['Float'];
  type?: BoardType;
};

export type CrBoardOutput = {
  __typename?: 'CrBoardOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CrProjectInput = {
  manager: Scalars['String'];
  place: Scalars['String'];
  title: Scalars['String'];
};

export type CrProjectOutput = {
  __typename?: 'CrProjectOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DelBoardInput = {
  boardId: Scalars['Float'];
};

export type DelBoardOutput = {
  __typename?: 'DelBoardOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DelProjectInput = {
  projectId: Scalars['Float'];
};

export type DelProjectOutput = {
  __typename?: 'DelProjectOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditBoardInput = {
  boardId: Scalars['Float'];
  language: Scalars['String'];
  type?: BoardType;
};

export type EditBoardOutput = {
  __typename?: 'EditBoardOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditProjectInput = {
  manager: Scalars['String'];
  place: Scalars['String'];
  projectId: Scalars['Float'];
  title: Scalars['String'];
};

export type EditProjectOutput = {
  __typename?: 'EditProjectOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetBoardInput = {
  boardId: Scalars['Float'];
};

export type GetBoardOutput = {
  __typename?: 'GetBoardOutput';
  board?: Maybe<Board>;
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetProjectInput = {
  projectId: Scalars['Float'];
};

export type GetProjectOutput = {
  __typename?: 'GetProjectOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  project?: Maybe<Project>;
};

export type GetProjectSignInput = {
  projectUuid: Scalars['Float'];
};

export type GetProjectSignOutput = {
  __typename?: 'GetProjectSignOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  project?: Maybe<Project>;
};

export type GetUserInput = {
  userId: Scalars['Float'];
};

export type GetUserOutput = {
  __typename?: 'GetUserOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type ListBoardInput = {
  projectId: Scalars['Float'];
};

export type ListBoardOutput = {
  __typename?: 'ListBoardOutput';
  boards?: Maybe<Array<Board>>;
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  row?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
  totalResults?: Maybe<Scalars['Float']>;
};

export type ListProjectInput = {
  end?: InputMaybe<Scalars['DateTime']>;
  page?: Scalars['Float'];
  search?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
};

export type ListProjectOutput = {
  __typename?: 'ListProjectOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  projects?: Maybe<Array<Project>>;
  row?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
  totalResults?: Maybe<Scalars['Float']>;
};

export type ListUserInput = {
  end?: InputMaybe<Scalars['DateTime']>;
  page?: Scalars['Float'];
  search?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
};

export type ListUserOutput = {
  __typename?: 'ListUserOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  row?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
  totalResults?: Maybe<Scalars['Float']>;
  users?: Maybe<Array<User>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  crBoard: CrBoardOutput;
  crProject: CrProjectOutput;
  delBoard: DelBoardOutput;
  delProject: DelProjectOutput;
  editBoard: EditBoardOutput;
  editProject: EditProjectOutput;
  setBoardMain: SetBoardMainOutput;
  setBoardUpload: SetBoardUploadOutput;
  setProjectUpload: SetProjectUploadOutput;
  signIn: SignInOutput;
  signUp: SignUpOutput;
};


export type MutationCrBoardArgs = {
  input: CrBoardInput;
};


export type MutationCrProjectArgs = {
  input: CrProjectInput;
};


export type MutationDelBoardArgs = {
  input: DelBoardInput;
};


export type MutationDelProjectArgs = {
  input: DelProjectInput;
};


export type MutationEditBoardArgs = {
  input: EditBoardInput;
};


export type MutationEditProjectArgs = {
  input: EditProjectInput;
};


export type MutationSetBoardMainArgs = {
  input: SetBoardMainInput;
};


export type MutationSetBoardUploadArgs = {
  input: SetBoardUploadInput;
};


export type MutationSetProjectUploadArgs = {
  input: SetProjectUploadInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};

export type Project = {
  __typename?: 'Project';
  author?: Maybe<User>;
  boards?: Maybe<Array<Board>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  manager: Scalars['String'];
  place: Scalars['String'];
  title: Scalars['String'];
  uploadedMainImg?: Maybe<Upload>;
  uuid?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getBoard: GetBoardOutput;
  getProject: GetProjectOutput;
  getProjectSign: GetProjectSignOutput;
  getUser: GetUserOutput;
  listBoard: ListBoardOutput;
  listProject: ListProjectOutput;
  listUser: ListUserOutput;
};


export type QueryGetBoardArgs = {
  input: GetBoardInput;
};


export type QueryGetProjectArgs = {
  input: GetProjectInput;
};


export type QueryGetProjectSignArgs = {
  input: GetProjectSignInput;
};


export type QueryGetUserArgs = {
  input: GetUserInput;
};


export type QueryListBoardArgs = {
  input: ListBoardInput;
};


export type QueryListProjectArgs = {
  input: ListProjectInput;
};


export type QueryListUserArgs = {
  input: ListUserInput;
};

export type SetBoardMainInput = {
  boardId: Scalars['Float'];
};

export type SetBoardMainOutput = {
  __typename?: 'SetBoardMainOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SetBoardUploadInput = {
  boardId: Scalars['Float'];
  uploadType: Scalars['String'];
  uploadUuid: Scalars['String'];
};

export type SetBoardUploadOutput = {
  __typename?: 'SetBoardUploadOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SetProjectUploadInput = {
  projectId: Scalars['Float'];
  uploadUuid: Scalars['String'];
};

export type SetProjectUploadOutput = {
  __typename?: 'SetProjectUploadOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SignInInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SignInOutput = {
  __typename?: 'SignInOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type SignUpInput = {
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SignUpOutput = {
  __typename?: 'SignUpOutput';
  err?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Upload = {
  __typename?: 'Upload';
  boardButtonImg?: Maybe<Board>;
  boardPlayMedia?: Maybe<Board>;
  boardSignBgImg?: Maybe<Board>;
  createdAt?: Maybe<Scalars['DateTime']>;
  filename: Scalars['String'];
  id: Scalars['Float'];
  isUsing: Scalars['Boolean'];
  key: Scalars['String'];
  mimetype: Scalars['String'];
  projectMainImg?: Maybe<Project>;
  uploader?: Maybe<User>;
  url?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  password: Scalars['String'];
  projects?: Maybe<Array<Project>>;
  role: UserRole;
  uploads?: Maybe<Array<Upload>>;
  username: Scalars['String'];
};

export enum UserRole {
  Admin = 'Admin',
  General = 'General'
}

export type CrBoardMutationVariables = Exact<{
  input: CrBoardInput;
}>;


export type CrBoardMutation = { __typename?: 'Mutation', crBoard: { __typename?: 'CrBoardOutput', ok: boolean, err?: string | null } };

export type CrProjectMutationVariables = Exact<{
  input: CrProjectInput;
}>;


export type CrProjectMutation = { __typename?: 'Mutation', crProject: { __typename?: 'CrProjectOutput', ok: boolean, err?: string | null } };

export type DelBoardMutationVariables = Exact<{
  input: DelBoardInput;
}>;


export type DelBoardMutation = { __typename?: 'Mutation', delBoard: { __typename?: 'DelBoardOutput', ok: boolean, err?: string | null } };

export type DelProjectMutationVariables = Exact<{
  input: DelProjectInput;
}>;


export type DelProjectMutation = { __typename?: 'Mutation', delProject: { __typename?: 'DelProjectOutput', ok: boolean, err?: string | null } };

export type EditBoardMutationVariables = Exact<{
  input: EditBoardInput;
}>;


export type EditBoardMutation = { __typename?: 'Mutation', editBoard: { __typename?: 'EditBoardOutput', ok: boolean, err?: string | null } };

export type EditProjectMutationVariables = Exact<{
  input: EditProjectInput;
}>;


export type EditProjectMutation = { __typename?: 'Mutation', editProject: { __typename?: 'EditProjectOutput', ok: boolean, err?: string | null } };

export type GetBoardQueryVariables = Exact<{
  input: GetBoardInput;
}>;


export type GetBoardQuery = { __typename?: 'Query', getBoard: { __typename?: 'GetBoardOutput', ok: boolean, err?: string | null, board?: { __typename?: 'Board', id: number, language: string, type: BoardType, uploadedSignBgImg?: { __typename?: 'Upload', id: number, uuid?: string | null, url?: string | null } | null, uploadedButtonImg?: { __typename?: 'Upload', id: number, uuid?: string | null, url?: string | null } | null, uploadedPlayMedia?: { __typename?: 'Upload', id: number, uuid?: string | null, url?: string | null } | null } | null } };

export type GetProjectQueryVariables = Exact<{
  input: GetProjectInput;
}>;


export type GetProjectQuery = { __typename?: 'Query', getProject: { __typename?: 'GetProjectOutput', ok: boolean, err?: string | null, project?: { __typename?: 'Project', id: number, title: string, createdAt?: any | null, manager: string, place: string, uuid?: string | null, uploadedMainImg?: { __typename?: 'Upload', id: number, uuid?: string | null, url?: string | null } | null } | null } };

export type ListBoardQueryVariables = Exact<{
  input: ListBoardInput;
}>;


export type ListBoardQuery = { __typename?: 'Query', listBoard: { __typename?: 'ListBoardOutput', ok: boolean, err?: string | null, totalResults?: number | null, totalPages?: number | null, boards?: Array<{ __typename?: 'Board', id: number, language: string }> | null } };

export type ListProjectQueryVariables = Exact<{
  input: ListProjectInput;
}>;


export type ListProjectQuery = { __typename?: 'Query', listProject: { __typename?: 'ListProjectOutput', ok: boolean, err?: string | null, totalResults?: number | null, totalPages?: number | null, projects?: Array<{ __typename?: 'Project', id: number, title: string, createdAt?: any | null, manager: string, place: string }> | null } };

export type SetBoardMainMutationVariables = Exact<{
  input: SetBoardMainInput;
}>;


export type SetBoardMainMutation = { __typename?: 'Mutation', setBoardMain: { __typename?: 'SetBoardMainOutput', ok: boolean, err?: string | null } };

export type SetBoardUploadMutationVariables = Exact<{
  input: SetBoardUploadInput;
}>;


export type SetBoardUploadMutation = { __typename?: 'Mutation', setBoardUpload: { __typename?: 'SetBoardUploadOutput', ok: boolean, err?: string | null } };

export type SetProjectUploadMutationVariables = Exact<{
  input: SetProjectUploadInput;
}>;


export type SetProjectUploadMutation = { __typename?: 'Mutation', setProjectUpload: { __typename?: 'SetProjectUploadOutput', ok: boolean, err?: string | null } };

export type SignInMutationVariables = Exact<{
  input: SignInInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'SignInOutput', ok: boolean, token?: string | null, err?: string | null } };


export const CrBoardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"crBoard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CrBoardInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crBoard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}}]}}]}}]} as unknown as DocumentNode<CrBoardMutation, CrBoardMutationVariables>;
export const CrProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"crProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CrProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"crProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}}]}}]}}]} as unknown as DocumentNode<CrProjectMutation, CrProjectMutationVariables>;
export const DelBoardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delBoard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DelBoardInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delBoard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}}]}}]}}]} as unknown as DocumentNode<DelBoardMutation, DelBoardMutationVariables>;
export const DelProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"delProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DelProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}}]}}]}}]} as unknown as DocumentNode<DelProjectMutation, DelProjectMutationVariables>;
export const EditBoardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editBoard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditBoardInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editBoard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}}]}}]}}]} as unknown as DocumentNode<EditBoardMutation, EditBoardMutationVariables>;
export const EditProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}}]}}]}}]} as unknown as DocumentNode<EditProjectMutation, EditProjectMutationVariables>;
export const GetBoardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBoard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetBoardInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBoard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}},{"kind":"Field","name":{"kind":"Name","value":"board"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"uploadedSignBgImg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"uploadedButtonImg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"uploadedPlayMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBoardQuery, GetBoardQueryVariables>;
export const GetProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}},{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"manager"}},{"kind":"Field","name":{"kind":"Name","value":"place"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"uploadedMainImg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectQuery, GetProjectQueryVariables>;
export const ListBoardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listBoard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListBoardInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listBoard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}},{"kind":"Field","name":{"kind":"Name","value":"totalResults"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"boards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"language"}}]}}]}}]}}]} as unknown as DocumentNode<ListBoardQuery, ListBoardQueryVariables>;
export const ListProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}},{"kind":"Field","name":{"kind":"Name","value":"totalResults"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"manager"}},{"kind":"Field","name":{"kind":"Name","value":"place"}}]}}]}}]}}]} as unknown as DocumentNode<ListProjectQuery, ListProjectQueryVariables>;
export const SetBoardMainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setBoardMain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetBoardMainInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setBoardMain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}}]}}]}}]} as unknown as DocumentNode<SetBoardMainMutation, SetBoardMainMutationVariables>;
export const SetBoardUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setBoardUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetBoardUploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setBoardUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}}]}}]}}]} as unknown as DocumentNode<SetBoardUploadMutation, SetBoardUploadMutationVariables>;
export const SetProjectUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setProjectUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetProjectUploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setProjectUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"err"}}]}}]}}]} as unknown as DocumentNode<SetProjectUploadMutation, SetProjectUploadMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"err"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;