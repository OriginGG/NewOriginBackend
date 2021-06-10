import FederationPlugin from "@graphile/federation";
import pgSimplifyInflector from '@graphile-contrib/pg-simplify-inflector'
import { mergeDeepRight } from 'ramda'

const local = {
  options: {
    watchPg: true,
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
    default_role: "origin_anonymous",
    jwt_secret: "bbo9QasdfASSD4jsIk31fQ1g44232kpolQ44AKA11LXO4WZ-s3SEcvo3gHwfxCEM_IBSisDWzlwcmDKjVfH0",
    jwt_token: "origin.jwt_token",
    body_size_limit: "5MB"
  }
}

const dev = {
  options: {
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
    default_role: "origin_anonymous",
    jwt_secret: "bbo9QasdfASSD4jsIk31fQ1g44232kpolQ44AKA11LXO4WZ-s3SEcvo3gHwfxCEM_IBSisDWzlwcmDKjVfH0",
    jwt_token: "origin.jwt_token",
    body_size_limit: "5MB"
  }
}

const prod = {
  options: {
    retryOnInitFail: true,
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
    default_role: "origin_anonymous",
    jwt_secret: "bbo9Q4jsIkfQ1gkpolQAKLXO4WZ-s3SEcvo3gHwfxCEM_IBSisDWzlwcmDKjVfH0",
    jwt_token: "origin.jwt_token",
    body_size_limit: "5MB"
  }
}

const common = {
  postgraphilePort: process.env.POSTGRAPHILE_PORT,
  schema_name: process.env.PGSCHEMA,
  host: `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}`,
  options: {
    simpleCollections: 'only',
    dynamicJson: true,
    enableCors: true,
    appendPlugins: [pgSimplifyInflector]
  }
}

export default mergeDeepRight(
  common, 
  process.env.NODE_ENV === 'production' 
    ? prod 
    : (process.env.NODE_ENV === 'development' ? dev : local)
) 