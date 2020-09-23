import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import config from '../config/gateway';

const { apiUrl, postgraphileUrl, gatewayPort } = config;

(async () => {
  await new Promise(r => setTimeout(r, 10000)) 
  
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
