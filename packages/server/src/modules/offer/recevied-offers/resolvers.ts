import { getConnection } from "typeorm";
import { QueryResolvers } from "../../../types";

const resolvers: QueryResolvers.Resolvers = {
  receivedOffers: (_, __, { req }) => {
    return getConnection().query(
      `
      select * from code_review cr inner join
      offer o on cr.id = o."codeReviewId"
      where cr."ownerId" = $1
    `,
      [req.session!.userId]
    );
  }
};

export default {
  Query: {
    ...resolvers
  }
};
