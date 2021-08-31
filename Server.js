


var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser")
var dbConnection = require("./config/Db");
// Routes List
var StudentsRoute = require("./components/orders/OrdersRoutes");
var AuthRoutes = require("./components/auth/AuthRoutes");


var app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

dbConnection();

app.get("/", function (req, res) {
  req.clientData;
  // logics main server
  res.send("Server is working");
});

app.use("/student", StudentsRoute);
app.use("/auth", AuthRoutes);

app.listen("5000", (err) => {
  if (err) {
    console.log("something went wrong", error);
  } else {
    console.log("server is working on port, 5000");
  }
});
