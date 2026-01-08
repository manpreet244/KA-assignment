const router = require('express').Router();
const eventsController = require("../controllers/EventController.jsx");
//getevents

router.get('/' , eventsController.getEvents);
router.post('/' , eventsController.createEvent);



module.exports = router;