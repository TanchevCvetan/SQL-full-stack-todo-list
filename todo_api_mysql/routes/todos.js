const express =require("express");
const router = express.Router();
const db = require("../models");



// SHOW ALL TODOS
router.get('/',(req, res)=>{
   db.find('all', function(err, rows, fields) {
    // Do something...
    if(err){
        console.log(err);
    }
    res.json(rows);
});
});

//INSER A TODO
router.post('/',(req, res)=>{
    let newTodo = req.body.name;
    db.set('name', newTodo);
    db.save((err,result)=>{
        if(err){
            console.log(err);
        }
        res.json(result);
    });
});

//FIND SINGLE TO BY ID
router.get('/:todoId',(req, res)=>{
    const todoId = req.params.todoId;
    const q = "SELECT * FROM todos WHERE id =" + todoId;
   db.query(q,function(err, row) {
    if(err){
        console.log(err);
    }
       res.json(row);
    });
});


//UPDATE ONE BY IT ID
router.put('/:todoId',(req, res)=>{
    const todoId = req.params.todoId;
    const name = JSON.stringify(req.body.name);
    const q = "UPDATE todos SET name ="+ name + " WHERE id ="+todoId;
    db.query(q,function(err,row) {
        if (err){
            console.log(err);
        }
        res.json(row);
    });
});



//DELETE BY ID
router.delete('/:todoId',(req, res)=>{
    const todoId = req.params.todoId;
    const q = "DELETE FROM todos WHERE id =" + todoId;
   db.query(q,function(err, row) {
    if(err){
        console.log(err);
    }
       res.json(row);
    });
});


module.exports = router;