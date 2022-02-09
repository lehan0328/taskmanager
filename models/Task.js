const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
name:{
type:String,
required:[true,"Please Provide a Name"],
trim:true,
maxlength:[20,"Name exceeds maxmum characters"]},
completed:{
type:Boolean,
default:false
}
})
module.exports = mongoose.model("Task", TaskSchema)
