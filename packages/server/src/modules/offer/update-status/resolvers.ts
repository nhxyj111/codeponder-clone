import { Offer } from "../../../entity/Offer";
import { MutationResolvers } from "../../../types";

const resolvers: MutationResolvers.Resolvers = {
  updateOfferStatus: async (_, { input: { userId, codeReviewId, status } }) => {
    const offer = await Offer.findOne({
      where: {
        codeReviewId,
        userId
      }
    });

    if (!offer) {
      return {
        offer: null
      };
    }
    offer.status = status;
    await offer.save();
    return { offer: offer as any };
  }
};

export default {
  Mutation: {
    ...resolvers
  }
};
