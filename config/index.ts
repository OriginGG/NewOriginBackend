import * as fs from 'fs'
import * as path from 'path'

const NODE_ENV = process.env.NODE_ENV;

let configBuffer = null;

console.log('Environment =', NODE_ENV);
// Init config_buffer according to the NODE_ENV
switch (NODE_ENV) {
    case 'production':
        configBuffer = fs.readFileSync(path.resolve(__dirname, 'production.json'), 'utf-8');
        break;
    case 'development':
        configBuffer = fs.readFileSync(path.resolve(__dirname, 'development.json'), 'utf-8');
        break;
    default:
        configBuffer = fs.readFileSync(path.resolve(__dirname, 'local.json'), 'utf-8');
}

let config = JSON.parse(configBuffer);

export default config;