
require('dotenv').config()

const express = require('express')
const cors=require('cors')

const router=require('./router/taskRoute')


require('./config/db')


const server=express()

server.use(express.json())
server.use(cors())
server.use(router)



server.get('/',(req,res)=>{
    res.json({"message":"WELCOME TO EXPRESS SERVER"})
})

//3 Server Listen
const PORT=process.env.PORT||3000
server.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
})
