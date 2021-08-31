
var mongoose = require("mongoose")
var studentSchema = mongoose.Schema({
  studentId: String,
  createdAt: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  rollno: {
    type: String ,
  } ,
  semes: {
    type: String ,
  } ,
  cgpa: {
    type: String ,
  } ,
  myClass: {
    type: String ,
  }
})
var studentModels = mongoose.model("students", studentSchema)
module.exports = studentModels