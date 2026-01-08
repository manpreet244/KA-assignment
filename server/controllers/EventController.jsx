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
//book ticket or event api
const bookEvent = async (req , res) =>{
    const { eventId } = req.params;
    try {
      const event = await EventSchema.findById(eventId);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      //logic to reduce available seats
      if (event.availableSeats > 0) {
        event.availableSeats -= 1;
        await event.save();
        return res.status(200).json({ message: "Ticket booked successfully" });
      } else {
        return res.status(400).json({ message: "No seats available" });
      }
    } catch (err) {
      res.status(500).json({ message: "Server Error" });
    }

}

module.exports = {getEvents, createEvent, bookEvent};