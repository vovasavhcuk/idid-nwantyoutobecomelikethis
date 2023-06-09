const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vovasavchuk2014:Hydroo2019@cluster0.6dkiqbt.mongodb.net/test")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("Filed to connect");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection = new mongoose.model("Collection1", LogInSchema)

module.exports=collection