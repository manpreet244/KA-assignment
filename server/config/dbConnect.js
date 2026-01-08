const mongoose = require("mongoose");

const connectToDB = async ()=>{
   try{
   await mongoose.connect(process.env.MONGO_CONNECTION_URL);   
   console.log("Connected to MongoDB Successfully");   
   }
   catch(err){
      console.log(err);
      process.exit(1);
   }
}

module.exports = connectToDB