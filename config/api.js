export default {
  apiPort: process.ENV.API_PORT,
  playground: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production'
}
