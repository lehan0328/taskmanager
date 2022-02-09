const connectDB = require("./db/connect")
const express = require("express")
const app = express()
const tasks = require("./routes/tasks.js")
require('dotenv').config()
//routes
app.use(express.json())






app.get("/hello",(req,res)=>{
    res.send("Task Manager App")
})
app.use("/api/v1/tasks",tasks)
const port = 3000

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log("server is listening on port 3000...")
        })
    }catch(err){
        console.log(err)
    }
}
start()

