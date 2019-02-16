import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import "reflect-metadata";
import { createSchema } from "./createSchema";
import { createTypeormConn } from "./createTypeormConn";

const startServer = async () => {
  await createTypeormConn();

  const server = new ApolloServer({ schema: createSchema() });

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
