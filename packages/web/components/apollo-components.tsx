export type Maybe<T> = T | null;

export interface CreateCodeReviewInput {
  numDays?: Maybe<number>;

  codeUrl: string;

  techTags: string[];

  notes: string;
}

export interface CreateOfferInput {
  userId: string;

  codeReviewId: string;
}

export interface LoginInput {
  usernameOrEmail: string;

  password: string;
}

export interface RegisterInput {
  username: string;

  email: string;

  password: string;
}

// ====================================================
// Documents
// ====================================================

export type CreateCodeReviewMutationVariables = {
  input: CreateCodeReviewInput;
};

export type CreateCodeReviewMutationMutation = {
  __typename?: "Mutation";

  createCodeReview: CreateCodeReviewMutationCreateCodeReview;
};

export type CreateCodeReviewMutationCreateCodeReview = {
  __typename?: "CreateCodeReviewResponse";

  codeReview: Maybe<CreateCodeReviewMutationCodeReview>;

  errors: Maybe<CreateCodeReviewMutationErrors[]>;
};

export type CreateCodeReviewMutationCodeReview = CodeReviewInfoFragment;

export type CreateCodeReviewMutationErrors = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type ListCodeReviewsQueryVariables = {};

export type ListCodeReviewsQueryQuery = {
  __typename?: "Query";

  listCodeReviews: ListCodeReviewsQueryListCodeReviews[];
};

export type ListCodeReviewsQueryListCodeReviews = {
  __typename?: "CodeReview";

  owner: ListCodeReviewsQueryOwner;
} & CodeReviewInfoFragment;

export type ListCodeReviewsQueryOwner = {
  __typename?: "User";

  id: string;

  email: string;

  username: string;
};

export type CreateOfferMutationVariables = {
  input: CreateOfferInput;
};

export type CreateOfferMutationMutation = {
  __typename?: "Mutation";

  createOffer: Maybe<CreateOfferMutationCreateOffer>;
};

export type CreateOfferMutationCreateOffer = {
  __typename?: "CreateOfferResponse";

  ok: boolean;
};

export type LoginMutationVariables = {
  input: LoginInput;
};

export type LoginMutationMutation = {
  __typename?: "Mutation";

  login: LoginMutationLogin;
};

export type LoginMutationLogin = {
  __typename?: "LoginResponse";

  user: Maybe<LoginMutationUser>;

  errors: Maybe<LoginMutationErrors[]>;
};

export type LoginMutationUser = {
  __typename?: "User";

  id: string;

  username: string;

  email: string;
};

export type LoginMutationErrors = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type LogoutMutationVariables = {};

export type LogoutMutationMutation = {
  __typename?: "Mutation";

  logout: boolean;
};

export type RegisterMutationVariables = {
  input: RegisterInput;
};

export type RegisterMutationMutation = {
  __typename?: "Mutation";

  register: RegisterMutationRegister;
};

export type RegisterMutationRegister = {
  __typename?: "RegisterResponse";

  errors: Maybe<RegisterMutationErrors[]>;
};

export type RegisterMutationErrors = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type MeQueryVariables = {};

export type MeQueryQuery = {
  __typename?: "Query";

  me: Maybe<MeQueryMe>;
};

export type MeQueryMe = {
  __typename?: "User";

  id: string;

  email: string;

  username: string;
};

export type CodeReviewInfoFragment = {
  __typename?: "CodeReview";

  id: string;

  numDays: Maybe<number>;

  codeUrl: string;

  techTags: string[];

  notes: string;
};

import * as ReactApollo from "react-apollo";
import * as React from "react";

import gql from "graphql-tag";

// ====================================================
// Fragments
// ====================================================

export const CodeReviewInfoFragmentDoc = gql`
  fragment CodeReviewInfo on CodeReview {
    id
    numDays
    codeUrl
    techTags
    notes
  }
`;

// ====================================================
// Components
// ====================================================

export const CreateCodeReviewMutationDocument = gql`
  mutation CreateCodeReviewMutation($input: CreateCodeReviewInput!) {
    createCodeReview(input: $input) {
      codeReview {
        ...CodeReviewInfo
      }
      errors {
        path
        message
      }
    }
  }

  ${CodeReviewInfoFragmentDoc}
`;
export class CreateCodeReviewMutationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CreateCodeReviewMutationMutation,
      CreateCodeReviewMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CreateCodeReviewMutationMutation,
        CreateCodeReviewMutationVariables
      >
        mutation={CreateCodeReviewMutationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreateCodeReviewMutationProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    CreateCodeReviewMutationMutation,
    CreateCodeReviewMutationVariables
  >
> &
  TChildProps;
export type CreateCodeReviewMutationMutationFn = ReactApollo.MutationFn<
  CreateCodeReviewMutationMutation,
  CreateCodeReviewMutationVariables
>;
export function CreateCodeReviewMutationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateCodeReviewMutationMutation,
        CreateCodeReviewMutationVariables,
        CreateCodeReviewMutationProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreateCodeReviewMutationMutation,
    CreateCodeReviewMutationVariables,
    CreateCodeReviewMutationProps<TChildProps>
  >(CreateCodeReviewMutationDocument, operationOptions);
}
export const ListCodeReviewsQueryDocument = gql`
  query ListCodeReviewsQuery {
    listCodeReviews {
      ...CodeReviewInfo
      owner {
        id
        email
        username
      }
    }
  }

  ${CodeReviewInfoFragmentDoc}
`;
export class ListCodeReviewsQueryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<
      ListCodeReviewsQueryQuery,
      ListCodeReviewsQueryVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Query<
        ListCodeReviewsQueryQuery,
        ListCodeReviewsQueryVariables
      >
        query={ListCodeReviewsQueryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ListCodeReviewsQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<
    ListCodeReviewsQueryQuery,
    ListCodeReviewsQueryVariables
  >
> &
  TChildProps;
export function ListCodeReviewsQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ListCodeReviewsQueryQuery,
        ListCodeReviewsQueryVariables,
        ListCodeReviewsQueryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ListCodeReviewsQueryQuery,
    ListCodeReviewsQueryVariables,
    ListCodeReviewsQueryProps<TChildProps>
  >(ListCodeReviewsQueryDocument, operationOptions);
}
export const CreateOfferMutationDocument = gql`
  mutation CreateOfferMutation($input: CreateOfferInput!) {
    createOffer(input: $input) {
      ok
    }
  }
`;
export class CreateOfferMutationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      CreateOfferMutationMutation,
      CreateOfferMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        CreateOfferMutationMutation,
        CreateOfferMutationVariables
      >
        mutation={CreateOfferMutationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreateOfferMutationProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    CreateOfferMutationMutation,
    CreateOfferMutationVariables
  >
> &
  TChildProps;
export type CreateOfferMutationMutationFn = ReactApollo.MutationFn<
  CreateOfferMutationMutation,
  CreateOfferMutationVariables
>;
export function CreateOfferMutationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateOfferMutationMutation,
        CreateOfferMutationVariables,
        CreateOfferMutationProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreateOfferMutationMutation,
    CreateOfferMutationVariables,
    CreateOfferMutationProps<TChildProps>
  >(CreateOfferMutationDocument, operationOptions);
}
export const LoginMutationDocument = gql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      user {
        id
        username
        email
      }
      errors {
        path
        message
      }
    }
  }
`;
export class LoginMutationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<LoginMutationMutation, LoginMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<LoginMutationMutation, LoginMutationVariables>
        mutation={LoginMutationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LoginMutationProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LoginMutationMutation, LoginMutationVariables>
> &
  TChildProps;
export type LoginMutationMutationFn = ReactApollo.MutationFn<
  LoginMutationMutation,
  LoginMutationVariables
>;
export function LoginMutationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutationMutation,
        LoginMutationVariables,
        LoginMutationProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LoginMutationMutation,
    LoginMutationVariables,
    LoginMutationProps<TChildProps>
  >(LoginMutationDocument, operationOptions);
}
export const LogoutMutationDocument = gql`
  mutation LogoutMutation {
    logout
  }
`;
export class LogoutMutationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<LogoutMutationMutation, LogoutMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<LogoutMutationMutation, LogoutMutationVariables>
        mutation={LogoutMutationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LogoutMutationProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LogoutMutationMutation, LogoutMutationVariables>
> &
  TChildProps;
export type LogoutMutationMutationFn = ReactApollo.MutationFn<
  LogoutMutationMutation,
  LogoutMutationVariables
>;
export function LogoutMutationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LogoutMutationMutation,
        LogoutMutationVariables,
        LogoutMutationProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LogoutMutationMutation,
    LogoutMutationVariables,
    LogoutMutationProps<TChildProps>
  >(LogoutMutationDocument, operationOptions);
}
export const RegisterMutationDocument = gql`
  mutation RegisterMutation($input: RegisterInput!) {
    register(input: $input) {
      errors {
        path
        message
      }
    }
  }
`;
export class RegisterMutationComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      RegisterMutationMutation,
      RegisterMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<RegisterMutationMutation, RegisterMutationVariables>
        mutation={RegisterMutationDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type RegisterMutationProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<RegisterMutationMutation, RegisterMutationVariables>
> &
  TChildProps;
export type RegisterMutationMutationFn = ReactApollo.MutationFn<
  RegisterMutationMutation,
  RegisterMutationVariables
>;
export function RegisterMutationHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RegisterMutationMutation,
        RegisterMutationVariables,
        RegisterMutationProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    RegisterMutationMutation,
    RegisterMutationVariables,
    RegisterMutationProps<TChildProps>
  >(RegisterMutationDocument, operationOptions);
}
export const MeQueryDocument = gql`
  query MeQuery {
    me {
      id
      email
      username
    }
  }
`;
export class MeQueryComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQueryQuery, MeQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<MeQueryQuery, MeQueryVariables>
        query={MeQueryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type MeQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<MeQueryQuery, MeQueryVariables>
> &
  TChildProps;
export function MeQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQueryQuery,
        MeQueryVariables,
        MeQueryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    MeQueryQuery,
    MeQueryVariables,
    MeQueryProps<TChildProps>
  >(MeQueryDocument, operationOptions);
}
