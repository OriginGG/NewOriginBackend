import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import config from '../config/gateway';
import waitOn from 'wait-on'

const { apiUrl, postgraphileUrl, gatewayPort } = config;

(async () => {
  await waitOn({ resources: [ apiUrl, postgraphileUrl ]}).catch(console.error)
  
  const gateway = new ApolloGateway({
    serviceList: [
      { name: 'api', url: apiUrl },
      { name: 'postgraphile', url: postgraphileUrl },
    ]
  });
  
  const server = new ApolloServer({
    gateway,
    subscriptions: false,
  });

  server.listen(gatewayPort).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})()
