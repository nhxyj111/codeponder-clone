import { MiddlewareResolver } from "graphql-chain";

export const isAuthencated: MiddlewareResolver = (next, _, __, ctx) => {
  if (!ctx.req || !ctx.req.session || !ctx.req.session.userId) {
    throw new Error("not authenticated");
  }
  return next();
};
