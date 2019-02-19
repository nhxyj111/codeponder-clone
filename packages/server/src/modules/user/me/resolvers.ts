import { User } from "../../../entity/User";
import { QueryResolvers } from "../../../types";

const resolvers: QueryResolvers.Resolvers = {
  me: async (_, __, { req }) => {
    const { userId } = req.session!;
    // console.log(req.headers);
    if (!userId) {
      return null;
    }
    const user = await User.findOne(userId);
    if (user) {
      return user;
    }
    return null;
  }
};

export default {
  Query: {
    ...resolvers
  }
};
