const controller = {};
const { Booking } = require("../models");

controller.bookingTable = async (data) => {
    return await Booking.create(data);
};

module.exports = controller;