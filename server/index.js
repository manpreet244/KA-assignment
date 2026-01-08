const express = require("express");
const dotenv = require("dotenv")
const dbConnect = require("./config/dbConnect")
const eventrouter = require("./router/EventsRouter.jsx")

dotenv.config();
const app = express();

app.use(express.json());

//routing middleware call
app.use('/api/v1/events' , eventrouter)


app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
    dbConnect();
})