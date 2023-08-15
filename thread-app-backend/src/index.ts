import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 5000;
  app.use(express.json());
  // create graphql server

  const gqlServer = new ApolloServer({
    typeDefs: `
  type Query{
    hello: String
    say(name: String): String
  }
  `,
    resolvers: {
      Query: {
        hello: () => 'hello world',
        say: (_, { name }: { name: string }) => `hello world ${name}`,
      },
    },
  });
  await gqlServer.start();

  app.use('/graphql', expressMiddleware(gqlServer));
  app.use('/', (req, res) => {
    res.json({ message: 'server is up and running' });
  });
  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
}
init();
