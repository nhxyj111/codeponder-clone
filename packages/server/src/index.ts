import { ApolloServer } from "apollo-server-express";
import * as connectRedis from "connect-redis";
import * as cors from "cors";
import * as express from "express";
import * as session from "express-session";
import { applyMiddleware } from "graphql-middleware";
import "reflect-metadata";
import { createSchema } from "./createSchema";
import { createTypeormConn } from "./createTypeormConn";
import { middleware } from "./middleware";
import { redis } from "./redis";

// TODO:
const SESSION_SECRET = "ThisIsSessionSecret";
const RedisStore = connectRedis(session);

const startServer = async () => {
  await createTypeormConn();

  const app = express();

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000"
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any
        // prefix: redisSessionPrefix
      }),
      name: "qid",
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    } as any)
  );

  const server = new ApolloServer({
    schema: applyMiddleware(createSchema(), middleware),
    context: ({ req }: any) => ({
      req
    })
  });

  server.applyMiddleware({
    app,
    cors: false
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
