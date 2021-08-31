
var orderModal = require("./OrdersModal");

module.exports.createStudent = (req, res) => {
  const newStudent = new orderModal({
    orderId: req.body.id,
    createdAt: new Date(),
    name: req.body.name,
    rollno: req.body.rollno,
    semes: req.body.semes,
    cgpa: req.body.cgpa,
    myClass: req.body.myClass,    
  });

  newStudent.save((err, success) => {
    console.log("success", success);
    console.log("err", err);
    if (err) {
      res.send("err happen");
    }
    res.send("order added successfully");
  });
};

module.exports.getStudents = (req, res) => {
  orderModal.find({}, (err, data) => {
    console.log("success", data);
    console.log("err", err);
    if (err) {
      res.send("err happen");
    }
    res.json(data);
  });
};

module.exports.updateStudents = (req, res) => {

  const updateObj = {
    createdAt: new Date(),
    name: req.body.name,
    rollno: req.body.rollno,
    semes: req.body.semes,
    cgpa: req.body.cgpa,
    myClass: req.body.myClass,   

  }
  // const {_id} = req.query;
  const  _id = req.params._id ;
  orderModal.findByIdAndUpdate(
    _id  ,
    updateObj ,
    {new : true} ,
    console.log("Document id: " , _id),
    console.log("Document Data: " , updateObj),
    (err, data) => {
      console.log("Data is Updated...success:", data);
      console.log("err", err);
      if (err) {
        res.send("err happen");
      }
      res.json(data);
    }
  );
};


module.exports.deleteStudent = (req , res) => {

  const { _id } = req.query;
  orderModal.findByIdAndRemove(_id , (err , data) => {
    console.log('Document ID will be here: ' , _id);    
    console.log("Document is Deleted!! Successfully");
    console.log("Error" , err);
    if (err) {
            res.send("Error Happen")
    }
    res.json(data);
});
}




