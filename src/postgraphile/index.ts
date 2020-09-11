import * as express from 'express'
import { postgraphile } from 'postgraphile'
import config from '../../config/postgraphile';
import FederationPlugin from "@graphile/federation";
import pgSimplifyInflector from '@graphile-contrib/pg-simplify-inflector'

const app = express();

app.use(postgraphile(config.host, config.schema_name, {
    ...config.options,
    appendPlugins: [FederationPlugin, pgSimplifyInflector]
}));

app.listen(config.postraphilePort);