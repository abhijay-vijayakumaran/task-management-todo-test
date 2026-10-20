const mongoose=require('mongoose')
mongoose.connect(process.env.connectionString).then(()=>{

    console.log("MongoDB connected to the Server")

}).catch((err)=>{

    console.log("MongoDB connection ERROR",err)
})