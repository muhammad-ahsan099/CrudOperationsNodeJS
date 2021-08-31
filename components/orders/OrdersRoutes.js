
var express = require("express");
var router = express.Router();

let { getStudents, createStudent, updateStudents , deleteStudent} = require("./OrdersController");


router.get("/", (req, res) => {
  res.json("server Student, route working")
  });
  
router.post("/createStudent", (req, res) => {
  createStudent(req, res);
});

router.put("/updateStudent", (req, res) => {
  updateStudents(req, res);
  });

router.get("/getStudents", (req, res) => {
    // db
    getStudents(req, res);
});

router.delete("/delete", (req, res) => {
  // db
  deleteStudent(req, res);
});

module.exports = router;
