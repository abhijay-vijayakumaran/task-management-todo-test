//import model
const todo =require("../model/taskModel")

//get all todos
exports.getTodo=async(req,res)=>{
    try{
        
        const allTodos=await todo.find()
        res.status(200).json({message:"All todos",allTodos})
    } catch (err) {

        res.status(500).json({message:"Server Error"+err})
    }
}


//get A todos
exports.getATodo=async(req,res)=>{
    const {id}=req.params
    try{
        
        const Todos=await todo.findById(id)
        res.status(200).json({message:"All todos",Todos})
    } catch (err) {

        res.status(500).json({message:"Server Error"+err})
    }
}


//Add A todos
exports.addTodo=async(req,res)=>{

    try{
        //not always create used in projects
        const newTodo=await todo.create(req.body)
        res.status(200).json({message:"All todos",newTodo})
    } catch (err) {

        res.status(500).json({message:"Server Error"+err})
    }
}


//Update A todos
exports.updateTodo=async(req,res)=>{

    const {id}=req.params
    try{
      
        const newTodo=await todo.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({message:"Update todos",newTodo})
    } catch (err) {

        res.status(500).json({message:"Server Error"+err})
    }
}


//Delete A todos
exports.deleteTodo=async(req,res)=>{

    const {id}=req.params
    try{
  
        const newTodo=await todo.findByIdAndDelete(id)
        res.status(200).json({message:"Deleted todos",newTodo})
    } catch (err) {

        res.status(500).json({message:"Server Error"+err})
    }
}
