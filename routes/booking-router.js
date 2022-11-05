const express = require('express');
const router = express.Router();

const BookingController = require("../controllers/booking-controller");

router.post('/', async (req, res, next) => {
    try {
        console.log("req.body", req.body);
        const data = req.body;
        let bookingData = {
            name: data.name,
            email: data.email,
            phone: data.phone
        };
        await BookingController.bookingTable(bookingData);
        res.json({status: true});
    } catch (error) {
        next(error);
    }
});


module.exports = router;