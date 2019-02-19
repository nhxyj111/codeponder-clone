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
// Types
// ====================================================

export interface Query {
  listCodeReviews: CodeReview[];

  receivedOffers: Offer[];

  me?: Maybe<User>;
}

export interface CodeReview {
  id: string;

  numDays?: Maybe<number>;

  codeUrl: string;

  techTags: string[];

  notes: string;

  ownerId: string;

  owner: User;
}

export interface User {
  id: string;

  username: string;

  email: string;
}

export interface Offer {
  codeReviewId: string;

  userId: string;

  codeReview: CodeReview;

  sender: User;
}

export interface Mutation {
  createCodeReview: CreateCodeReviewResponse;

  createOffer?: Maybe<CreateOfferResponse>;

  login: LoginResponse;

  logout: boolean;

  register: RegisterResponse;
}

export interface CreateCodeReviewResponse {
  errors?: Maybe<Error[]>;

  codeReview?: Maybe<CodeReview>;
}

export interface Error {
  path: string;

  message: string;
}

export interface CreateOfferResponse {
  ok: boolean;
}

export interface LoginResponse {
  errors?: Maybe<Error[]>;

  user?: Maybe<User>;
}

export interface RegisterResponse {
  errors?: Maybe<Error[]>;
}

// ====================================================
// Arguments
// ====================================================

export interface CreateCodeReviewMutationArgs {
  input: CreateCodeReviewInput;
}
export interface CreateOfferMutationArgs {
  input: CreateOfferInput;
}
export interface LoginMutationArgs {
  input: LoginInput;
}
export interface RegisterMutationArgs {
  input: RegisterInput;
}

import { GraphQLResolveInfo } from "graphql";

import { MyContext } from "./context";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {
    listCodeReviews?: ListCodeReviewsResolver<
      CodeReview[],
      TypeParent,
      Context
    >;

    receivedOffers?: ReceivedOffersResolver<Offer[], TypeParent, Context>;

    me?: MeResolver<Maybe<User>, TypeParent, Context>;
  }

  export type ListCodeReviewsResolver<
    R = CodeReview[],
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type ReceivedOffersResolver<
    R = Offer[],
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MeResolver<
    R = Maybe<User>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace CodeReviewResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = CodeReview> {
    id?: IdResolver<string, TypeParent, Context>;

    numDays?: NumDaysResolver<Maybe<number>, TypeParent, Context>;

    codeUrl?: CodeUrlResolver<string, TypeParent, Context>;

    techTags?: TechTagsResolver<string[], TypeParent, Context>;

    notes?: NotesResolver<string, TypeParent, Context>;

    ownerId?: OwnerIdResolver<string, TypeParent, Context>;

    owner?: OwnerResolver<User, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = CodeReview,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NumDaysResolver<
    R = Maybe<number>,
    Parent = CodeReview,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CodeUrlResolver<
    R = string,
    Parent = CodeReview,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type TechTagsResolver<
    R = string[],
    Parent = CodeReview,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type NotesResolver<
    R = string,
    Parent = CodeReview,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OwnerIdResolver<
    R = string,
    Parent = CodeReview,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type OwnerResolver<
    R = User,
    Parent = CodeReview,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace UserResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>;

    username?: UsernameResolver<string, TypeParent, Context>;

    email?: EmailResolver<string, TypeParent, Context>;
  }

  export type IdResolver<
    R = string,
    Parent = User,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type UsernameResolver<
    R = string,
    Parent = User,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string,
    Parent = User,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace OfferResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Offer> {
    codeReviewId?: CodeReviewIdResolver<string, TypeParent, Context>;

    userId?: UserIdResolver<string, TypeParent, Context>;

    codeReview?: CodeReviewResolver<CodeReview, TypeParent, Context>;

    sender?: SenderResolver<User, TypeParent, Context>;
  }

  export type CodeReviewIdResolver<
    R = string,
    Parent = Offer,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type UserIdResolver<
    R = string,
    Parent = Offer,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CodeReviewResolver<
    R = CodeReview,
    Parent = Offer,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type SenderResolver<
    R = User,
    Parent = Offer,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = {}> {
    createCodeReview?: CreateCodeReviewResolver<
      CreateCodeReviewResponse,
      TypeParent,
      Context
    >;

    createOffer?: CreateOfferResolver<
      Maybe<CreateOfferResponse>,
      TypeParent,
      Context
    >;

    login?: LoginResolver<LoginResponse, TypeParent, Context>;

    logout?: LogoutResolver<boolean, TypeParent, Context>;

    register?: RegisterResolver<RegisterResponse, TypeParent, Context>;
  }

  export type CreateCodeReviewResolver<
    R = CreateCodeReviewResponse,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CreateCodeReviewArgs>;
  export interface CreateCodeReviewArgs {
    input: CreateCodeReviewInput;
  }

  export type CreateOfferResolver<
    R = Maybe<CreateOfferResponse>,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, CreateOfferArgs>;
  export interface CreateOfferArgs {
    input: CreateOfferInput;
  }

  export type LoginResolver<
    R = LoginResponse,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, LoginArgs>;
  export interface LoginArgs {
    input: LoginInput;
  }

  export type LogoutResolver<
    R = boolean,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type RegisterResolver<
    R = RegisterResponse,
    Parent = {},
    Context = MyContext
  > = Resolver<R, Parent, Context, RegisterArgs>;
  export interface RegisterArgs {
    input: RegisterInput;
  }
}

export namespace CreateCodeReviewResponseResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = CreateCodeReviewResponse
  > {
    errors?: ErrorsResolver<Maybe<Error[]>, TypeParent, Context>;

    codeReview?: CodeReviewResolver<Maybe<CodeReview>, TypeParent, Context>;
  }

  export type ErrorsResolver<
    R = Maybe<Error[]>,
    Parent = CreateCodeReviewResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type CodeReviewResolver<
    R = Maybe<CodeReview>,
    Parent = CreateCodeReviewResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace ErrorResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = Error> {
    path?: PathResolver<string, TypeParent, Context>;

    message?: MessageResolver<string, TypeParent, Context>;
  }

  export type PathResolver<
    R = string,
    Parent = Error,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type MessageResolver<
    R = string,
    Parent = Error,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace CreateOfferResponseResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = CreateOfferResponse
  > {
    ok?: OkResolver<boolean, TypeParent, Context>;
  }

  export type OkResolver<
    R = boolean,
    Parent = CreateOfferResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace LoginResponseResolvers {
  export interface Resolvers<Context = MyContext, TypeParent = LoginResponse> {
    errors?: ErrorsResolver<Maybe<Error[]>, TypeParent, Context>;

    user?: UserResolver<Maybe<User>, TypeParent, Context>;
  }

  export type ErrorsResolver<
    R = Maybe<Error[]>,
    Parent = LoginResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = Maybe<User>,
    Parent = LoginResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

export namespace RegisterResponseResolvers {
  export interface Resolvers<
    Context = MyContext,
    TypeParent = RegisterResponse
  > {
    errors?: ErrorsResolver<Maybe<Error[]>, TypeParent, Context>;
  }

  export type ErrorsResolver<
    R = Maybe<Error[]>,
    Parent = RegisterResponse,
    Context = MyContext
  > = Resolver<R, Parent, Context>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  MyContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  MyContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  MyContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface IResolvers<Context = MyContext> {
  Query?: QueryResolvers.Resolvers<Context>;
  CodeReview?: CodeReviewResolvers.Resolvers<Context>;
  User?: UserResolvers.Resolvers<Context>;
  Offer?: OfferResolvers.Resolvers<Context>;
  Mutation?: MutationResolvers.Resolvers<Context>;
  CreateCodeReviewResponse?: CreateCodeReviewResponseResolvers.Resolvers<
    Context
  >;
  Error?: ErrorResolvers.Resolvers<Context>;
  CreateOfferResponse?: CreateOfferResponseResolvers.Resolvers<Context>;
  LoginResponse?: LoginResponseResolvers.Resolvers<Context>;
  RegisterResponse?: RegisterResponseResolvers.Resolvers<Context>;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
