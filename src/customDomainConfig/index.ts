import express from 'express'
import { Client } from 'pg'
import makeTraefikConfig from './makeTraefikConfig'

const app = express()

const client = new Client() 

;(async () => {

    // await client.connect()

    app.get('/', async (_, res) => {
        // const { rows: hosts } = await client.query('select host from domain_registration as a inner join organisation_account as b on a.token = b.domain_uuid_token')
        res.json(makeTraefikConfig(['origintestcustomdomain1', 'origintestcustomdomain2']))
    })

    app.listen(process.env.CUSTOM_DOMAIN_CONFIG_PORT || 80, () => console.log(`traefikConfig started`))
})()
