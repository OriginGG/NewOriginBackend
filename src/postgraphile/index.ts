import * as express from 'express'
import { postgraphile, PostGraphileOptions } from 'postgraphile'
import config from '../../config/postgraphile';
import { ServerResponse } from 'http';

const app = express();

app.use(
    postgraphile(
        config.host, 
        config.schema_name, 
        config.options as PostGraphileOptions<any, ServerResponse>
    )
);

app.listen(config.postgraphilePort);