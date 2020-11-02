const fs = require('fs');

export const execute_sql = (fname,knex) => {
    return new Promise((resolve) => {
        console.log(__dirname);
        fs.readFile(`${__dirname}/../../postgreSQL_schemas/new/${fname}`, 'utf8', function read(err, data) {
            if (err) {
                throw err;
            }
            Promise.all([
                knex.raw(data),
            ]).then(() => {
                console.log(`new sql functions ${fname}`);
                resolve(true);
            })
        });
    })
}