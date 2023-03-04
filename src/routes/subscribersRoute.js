const express = require('express');
const router = express.Router();
const Subscribers = require("../models/subscribers");

//subscriber route to get all subscribers in json format
router.route("/subscribers").get(async (req, res, next) => {
    try {
        const subscribers = await Subscribers.find({});
        res.status(200).json(subscribers);
    }
    catch (error) {
        res.status(500)
        next(error);
    }

});

//subscriber/name route to get subscribers names and channel
router.route("/subscribers/names").get(async (req, res, next) => {
    try {
        const subscribers = await Subscribers.find({}).select(
            "name subscribedChannel"
        );
        res.status(200).json(subscribers);
    }
    catch (error) {
        res.status(500);
        next(error);
    }
});


//subscribers/:id route to get subscriber by entering id
router.route("/subscribers/:id").get(async (req, res ) => {
    const id = req.params.id;
    await Subscribers.findById(id, (err, data) => {
        if (err) {
            //error messege
            return res.status(400).json({ messege: "Sorry....! You enter wrong ID, No such subscriber found in this ID." })
        } else {
            //response data
            res.status(200).json(data);
        }
    });

});

//export the router module 
module.exports = router;