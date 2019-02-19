import { CodeReview } from "../../../entity/CodeReview";
import { User } from "../../../entity/User";
import { OfferResolvers } from "../../../types";

const resolvers: OfferResolvers.Resolvers = {
  sender: ({ userId }) => {
    return User.findOne(userId) as any;
  },
  codeReview: ({ codeReviewId }) => {
    return CodeReview.findOne(codeReviewId) as any;
  }
};

export default {
  Offer: {
    ...resolvers
  }
};
