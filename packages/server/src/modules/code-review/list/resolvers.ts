import { CodeReview } from "../../../entity/CodeReview";
import { QueryResolvers } from "../../../types";

// export default {
//   Query: {
//     listCodeReviews: () => {}
//   }
// };

const resolvers: QueryResolvers.Resolvers = {
  listCodeReviews: () => {
    return CodeReview.find();
  }
};

export default {
  Query: {
    ...resolvers
  }
};
