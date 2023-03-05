
const express = require('express');
const cors = require ("cors");
const app = express();

//use path for joining directry
const path=require('path');
  

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//import corse for rendering htmml file
app.use(cors());

//import subscriberRoute from route
const subscriberRoute = require("./routes/subscribersRoute");

//rener index. html to "/"  default route
app.get("/",(req,res)=>{
   // res.send("<h3>Hello, This is a API to get Youtube Subscribers.</h3>")
    res.status(202).sendFile(path.join(__dirname+'/client/index.html'));
});



//use subscriberRoute
app.use("/",subscriberRoute);

//exports app module
module.exports = app;




















module.exports = app;
