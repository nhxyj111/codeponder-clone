import { Request } from "express";
import { IMiddlewareFunction, IMiddlewareTypeMap } from "graphql-middleware";

const isAuthenticated = (req: Request) => {
  if (!req || !req.session || !req.session.userId) {
    throw new Error("not authenticated");
  }
};

const standardMiddleware: IMiddlewareFunction = async (
  resolve,
  parent,
  args,
  context,
  info
) => {
  isAuthenticated(context.req);
  return resolve(parent, args, context, info);
};

export const middleware: IMiddlewareTypeMap = {
  Mutation: {
    createCodeReview: standardMiddleware,
    createOffer: standardMiddleware
  },
  Query: {
    receivedOffers: standardMiddleware,
    myOffers: standardMiddleware
  }
};
