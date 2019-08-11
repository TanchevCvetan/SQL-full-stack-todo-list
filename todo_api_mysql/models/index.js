const  mysqlModel  = require("mysql-model");
const MyAppModel = mysqlModel.createConnection({
    host     : 'localhost',
    user     : 'tanchevc',
    database : 'todo_app'
});
 
const Todo = MyAppModel.extend({
    tableName: "todos",
});
 
const todo = new Todo();
module.exports = todo;