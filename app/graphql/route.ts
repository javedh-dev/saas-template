import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { resolvers } from './resolver';
import { typeDefs } from './schema';

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export async function GET(request: any) {
  return handler(request);
}

export async function POST(request: any) {
  return handler(request);
}