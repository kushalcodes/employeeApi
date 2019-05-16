const Express = require("express")
const app = Express()

const handlers = require("./handlers")

//body parser stuffs
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get("/app/employee",handlers.getEmployees)
app.post("/app/employee",handlers.addEmployee)
app.delete("/app/employee",handlers.deleteEmployee)
app.put("/app/employee",handlers.updateEmployees)

//start server
const port = 3000;
app.listen(port,()=>{
    console.log("Server listening on "+port);
})