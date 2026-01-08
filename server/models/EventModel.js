const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    name:{
        type:String , 
        required:true
    },
    date:{
        type:Date ,
        required:true
    },
    location :{
        type:String ,
        required:true
    },
    description :{
        type:String ,
        required:false
    },
    avvailableSeats :{
        type:Number ,
        required:true,
        default:100
    }
})

module.exports = mongoose.model("Event" , EventSchema);