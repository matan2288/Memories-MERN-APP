const express = require("express");
const request = require("request");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 5001;
const path = require('path')


//CONNECT TO DB
const mongoose = require("mongoose");
const db = mongoose.connection;
const List = require("./models/List");

mongoose.connect(
  "mongodb+srv://matan2288:matan2288@cluster0.at8ez.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

mongoose.set("useFindAndModify", false);

//Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

const { MongoClient, ObjectID } = require("mongodb");


app.get("/", (req, res) => {
  List.find((err, collection) => {
    if (err) {
      console.log(err);
    } else {
      res.json(collection); 
    }
  });
});

app.get("/create-new-memory", (req, res) => {});

app.post("/create-new-memory", (req, res) => {

  const newListing = new List({
    img: req.body.img,
    title: req.body.title,
    date: req.body.date,
  });

  newListing.save((error, document) => {
    if (error) {
      console.log(error);
    }

    res.json(document);
  });
});


app.get("/showlist-fromdb", (req, res) => {
  List.find((err, collection) => {
    if (err) {
      console.log(err);
    } else {
      res.json(collection); //!DO NOT FORGET TO PARSE
    }
  });
});

app.delete("/showlist-fromdb/:id", async (req, res) => {
  try {
    let uid = req.params.id.toString();
    await List.deleteOne({ _id: uid });
    res.end();//END THE RESPONSE WITHOUT PROVIDING BACK DATA
  } catch (err) {
    console.error(err);
  }
});

//Serve static asses if we are in production
if(process.env.NODE_ENV === 'production'){
 //Set static folder
 app.use(express.static('client/build'));
 app.get('*' , (req , res)=>{


  res.sendFile(path.resolve(__dirname , 'client' , 'build' , 'index.html'));

 })

 
}




//LISTEN TO PORT 5001
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
