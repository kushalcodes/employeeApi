const knex = require("./../knexWork");

knex
    .schema
    .hasTable('employees')
    .then(function (exists) {
        if (!exists) {
            return knex // **** udpate
                .schema
                .createTable('employees', function (table) {
                    table.increments('id').primary()
                    table.string('name')
                    table.integer('age')
                    table.float('salary')
                })
                .then(console.log("Table employees created."));
        }else{
            console.log("Table employees already created!");
        }
    });