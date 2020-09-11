import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import { apiUrl, postgraphileUrl, gatewayPort } from '../../config/gateway';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'api', url: apiUrl },
    { name: 'postgraphile', url: postgraphileUrl },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server.listen(gatewayPort).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});