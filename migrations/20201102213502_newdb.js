const sqlread = require('../util/sqlread');

exports.up = async function(knex) {
    return new Promise(async (resolve) => {
        for (let i = 1; i < 44; i++) {
            await sqlread(`${i}_origin_schema.sql`, knex);
        }
        resolve(true);
    })
};

exports.down = async function(knex) {
    return new Promise((resolve) => {
        resolve(true);
    });
};
