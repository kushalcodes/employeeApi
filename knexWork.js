const Knex = require("knex");

const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'employeeapi'
    }
}
const knex = Knex(options);

module.exports = knex;