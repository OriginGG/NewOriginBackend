export default {
  apiPort: process.env.API_PORT,
  playground: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production'
}
