import { chain } from "graphql-chain";
import { CodeReview } from "../../../entity/CodeReview";
import { standardStack } from "../../../graphql-middlewares/standardStack";
import { MutationResolvers } from "../../../types";

const resolvers: MutationResolvers.Resolvers = {
  createCodeReview: chain(standardStack)(async (_, { input }, { req }) => {
    const { codeUrl, notes, numDays, techTags } = input;
    const codeReview = await CodeReview.create({
      codeUrl,
      notes,
      numDays: numDays || undefined,
      techTags,
      ownerId: req.session!.userId
    }).save();
    return {
      errors: [],
      codeReview
    };
  })
};

export default {
  Mutation: {
    ...resolvers
  }
};
