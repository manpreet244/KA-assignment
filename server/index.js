const express = require("express");
const dotenv = require("dotenv")
const dbConnect = require("./config/dbConnect")
const eventrouter = require("./router/EventsRouter.jsx")

dotenv.config();
const app = express();

app.use(express.json());
//allow cors

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//routing middleware call
app.use('/api/v1/events' , eventrouter)


app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
    dbConnect();
})