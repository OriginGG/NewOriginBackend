const dev = {
  "host": "postgres://origin_postgraphql:allegro1234@origin-small-dev.cjdraitfnk0j.us-east-1.rds.amazonaws.com:5432/originGG?ssl=1",
  "schema_name": "origin",
  options: {
    subscriptions: true,
    watchPg: true,
    dynamicJson: true,
    setofFunctionsContainNulls: false,
    ignoreRBAC: false,
    ignoreIndexes: false,
    showErrorStack: "json",
    extendedErrors: ["hint", "detail", "errcode"],
    graphiql: true,
    enhanceGraphiql: true,
    allowExplain(req) {
      return true;
    },
    enableQueryBatching: true,
    legacyRelations: "omit",
    jwtVerifyOptions: {
        ignoreExpiration: true
    },
    "default_role": "origin_anonymous",
    "jwt_secret": "bbo9QasdfASSD4jsIk31fQ1g44232kpolQ44AKA11LXO4WZ-s3SEcvo3gHwfxCEM_IBSisDWzlwcmDKjVfH0",
    "jwt_token": "origin.jwt_token",
    "port": 80,
    "body_size_limit": "5MB"
  }
}

const prod = {
  "schema_name": "origin",
  "host": "postgres://origin_postgraphql:allegro1234@origin-production-small.cjdraitfnk0j.us-east-1.rds.amazonaws.com:5432/originGGNew?ssl=1",
  options: {
    subscriptions: true,
    retryOnInitFail: true,
    dynamicJson: true,
    setofFunctionsContainNulls: false,
    ignoreRBAC: false,
    ignoreIndexes: false,
    extendedErrors: ["errcode"],
    graphiql: false,
    enableQueryBatching: true,
    disableQueryLog: true, // our default logging has performance issues, but do make sure you have a logging system in place!
    legacyRelations: "omit",
    jwtVerifyOptions: {
        ignoreExpiration: true
    },
    "default_role": "origin_anonymous",
    "jwt_secret": "bbo9Q4jsIkfQ1gkpolQAKLXO4WZ-s3SEcvo3gHwfxCEM_IBSisDWzlwcmDKjVfH0",
    "jwt_token": "origin.jwt_token",
    "port": 80,
    "body_size_limit" : "5MB"
  }
}

const common = {
  postgraphilePort: process.env.POSTGRAPHILE_PORT
}

export default Object.assign({}, common, process.env.NODE_ENV === 'production' ? prod : dev) 