const { apiUrl, postgraphileUrl }  = (({
  API_HOST, 
  API_PORT, 
  POSTGRAPHILE_HOST, 
  POSTGRAPHILE_PORT
}) => ({
  apiUrl: `${API_HOST}:${API_PORT}`,
  postgraphileUrl: `${POSTGRAPHILE_HOST}:${POSTGRAPHILE_PORT}`
}))(process.env)

export default {
  gatewayPort: process.env.GATEWAY_PORT,
  apiUrl,
  postgraphileUrl,
  playground: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production',
  cors: true
}
