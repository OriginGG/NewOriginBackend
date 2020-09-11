const { apiUrl, postgraphileUrl }  = (({
  API_HOST, 
  API_PORT, 
  POSTGRAPHILE_HOST, 
  POSTGRAPHILE_PORT
}) => ({
  apiUrl: `http://${process.env.API_HOST}:${process.env.API_PORT}`,
  postgraphileUrl: `http://${process.env.POSTGRAPHILE_HOST}:${process.env.POSTGRAPHILE_PORT}/graphql`
}))(process.env)

export default {
  gatewayPort: process.env.GATEWAY_PORT,
  apiUrl,
  postgraphileUrl,
  playground: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production',
  cors: true
}
