 const EventSchema = require("../models/EventModel.js");

//controller for getting all the events
 
const getEvents = async (req , res) =>{
     try{
        const data = await EventSchema.find({});
        res.status(200).json(data);
     }
     catch(err){
        res.status(500).json({message : "Server Error"})
     }
}


//create events

const createEvent = async (req , res) =>{
    const {name , date , location , description} = req.body;
    try{
        const newEvent = new EventSchema({
            name , date , location , description
        })
        await newEvent.save();
        res.status(201).json(newEvent);
    }
    catch(err){
        res.status(500).json({message : "Server Error"})
    }
}


module.exports = {getEvents, createEvent};