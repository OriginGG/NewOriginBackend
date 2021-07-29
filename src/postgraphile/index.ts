import  express from 'express'
import { postgraphile, PostGraphileOptions } from 'postgraphile'
import config from '../../config/postgraphile';
import { ServerResponse } from 'http';
import resolveUpload from './upload'

const app = express();

const options = {
    ...config.options,
    graphileBuildOptions: {
        uploadFieldDefinitions: [
            {
                match: ({ schema, table, column }) => schema === 'graphile' && table === 'profile' && column === 'image',
                resolve: resolveUpload,
            },
        ],
    }
}

app.use(
    postgraphile(
        config.host, 
        config.schema_name, 
        options as PostGraphileOptions<any, ServerResponse>
    )
);

app.listen(config.postgraphilePort);