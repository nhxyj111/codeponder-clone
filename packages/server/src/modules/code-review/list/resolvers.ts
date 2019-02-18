import { CodeReview } from "../../../entity/CodeReview";
import { QueryResolvers } from "../../../types";

// export default {
//   Query: {
//     listCodeReviews: () => {}
//   }
// };

const resolvers: QueryResolvers.Resolvers = {
  listCodeReviews: () => {
    return CodeReview.find() as any;
  }
};

export default {
  Query: {
    ...resolvers
  }
};
