const mongoose = require("mongoose");

const ListSchema = mongoose.Schema({
  img: {$type: String  , required:true}  ,
   title: {$type: String  , required:true} ,
    date: {$type: String  , required:true} ,
}     ,{ typeKey: '$type' }
);


const List = mongoose.model("memoryList", ListSchema);

module.exports = List;

