export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },

  url: env('BASE_URL', 'https://strapi-backend-production-bb55.up.railway.app')
});
