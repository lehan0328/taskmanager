const Task = require('../models/Task.js')
const getAllTasks = async(req,res) =>{
    try{
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    }catch(err){
        res.status(500).json({msg:err})
    }
}
const createTask  = async(req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }
}
const getTask  = async(req,res)=>{
    try{
        const taskID = req.params.id
        const task = await Task.findOne({_id:taskID})

    if(!task){
        return res.status(404).json({msg:`No task with id: ${taskID}`})
    }res.status(200).json({task});
    }catch(err){
        res.status(500).json({msg:err})
    }
}
const updateTask  = (req,res)=>{
    res.send("update task")
}
const deleteTask = (req,res)=>{
    res.send("delete task")
}
module.exports = {
getAllTasks,
createTask,
getTask,
updateTask,
deleteTask
}