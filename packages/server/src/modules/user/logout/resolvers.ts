import { MutationResolvers } from "../../../types";

const resolvers: MutationResolvers.Resolvers = {
  logout: async (_, __, { req, res }) => {
    await new Promise((resolve, reject) =>
      req.session!.destroy(err => {
        if (!err) {
          resolve();
        } else {
          reject(err);
        }
      })
    );
    res.clearCookie("qid");
    return true;
  }
};

export default {
  Mutation: {
    ...resolvers
  }
};
