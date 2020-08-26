import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import config from '../config/index';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'api', url: process.env.API_PORT },
    { name: 'postgraphile', url: process.env.POSTGRAPHILE_PORT },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen(process.env.GATEWAY_PORT).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});