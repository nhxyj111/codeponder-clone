import { Offer } from "../../../entity/Offer";
import { MutationResolvers } from "../../../types";

const resolvers: MutationResolvers.Resolvers = {
  createOffer: async (_, { input: { userId, codeReviewId } }) => {
    await Offer.create({ userId, codeReviewId }).save();
    return {
      ok: true
    };
  }
};

export default {
  Mutation: {
    ...resolvers
  }
};
