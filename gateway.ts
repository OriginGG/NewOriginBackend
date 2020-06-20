import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import config from './config/index';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'api', url: config.api.url },
    { name: 'postgraphile', url: config.postgraphile.url },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen(config.gateway.port).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});