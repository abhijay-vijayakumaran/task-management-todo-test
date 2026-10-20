
const mongoose=require('mongoose')


const taskSchema=mongoose.Schema({
    userId:Number,
    id:Number,
    title:String,
    completed:Boolean
})


const todo=mongoose.model('todo',taskSchema)
module.exports=todo