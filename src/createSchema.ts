import { mergeGraphQLSchemas, mergeResolvers } from "@graphql-modules/epoxy";
import { loadResolversFiles, loadSchemaFiles } from "@graphql-modules/sonar";
import { makeExecutableSchema } from "graphql-tools";

export const createSchema = () => {
  // console.log(loadSchemaFiles(__dirname + "/modules/"));
  // console.log("////////////");

  return makeExecutableSchema({
    typeDefs: mergeGraphQLSchemas(
      loadSchemaFiles(__dirname + "/modules/").filter(
        g => typeof g === "string"
      )
    ),
    resolvers: mergeResolvers(loadResolversFiles(__dirname + "/modules/"))
  });
};
