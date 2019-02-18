import { User } from "../../../entity/User";
import { CodeReviewResolvers } from "../../../types";

export const resolvers: CodeReviewResolvers.Resolvers = {
  owner: async ({ ownerId }) => {
    const user = await User.findOne(ownerId);
    if (user) {
      return user;
    }
    return {
      id: "d",
      email: "d",
      username: "d"
    };
  }
};

export default {
  CodeReview: {
    ...resolvers
  }
};
