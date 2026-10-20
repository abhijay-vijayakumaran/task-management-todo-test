//import express and todoController
const express =require('express')
const todoController=require('../controller/taskController')


const router=express.Router()

router.get('/api/getTodos',todoController.getTodo)
router.get('/api/getTodos/:id',todoController.getATodo)
router.post('/api/getTodos',todoController.addTodo)

router.put('/api/getTodos/:id',todoController.updateTodo)

router.delete('/api/getTodos/:id',todoController.deleteTodo)


module.exports=router