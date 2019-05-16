const knex = require("./knexWork");

//all handlers
function getEmployees(req,res){
    knex
    .select()
    .table('employees')
    .then((data)=>{
        res.send(data);
    })
}

function addEmployee(req,res){
    // console.log(req.query);
    var values = {
        name: req.query.name,
        age: req.query.age,
        salary: req.query.salary
    };
    knex('employees')
    .insert(values)
    .then(
        ()=>{
            console.log("1 row inserted!")
        }
    )
}

function deleteEmployee(req,res){
    var id = req.query.id;
    knex('employees')
    .where({ id: id })
    .del()
    .then(
        ()=>{
            console.log("1 row deleted!")
        }
    )
}

function updateEmployees(req,res){
    var updateValues = {
        name: req.query.name,
        age: req.query.age,
        salary: req.query.salary
    },
    id = req.query.id;

    knex('employees')
    .where({ id: id })
    .update(updateValues)
    .then(
        ()=>{
            console.log("1 row updated!")
        }
    )
}

module.exports = {
    getEmployees : getEmployees,
    addEmployee : addEmployee,
    deleteEmployee : deleteEmployee,
    updateEmployees : updateEmployees
};