const controller = {};
const { Food, Menu } = require("../models");

controller.getAllFood = async (query) => {
    return await Food.findAll({
        include: [{model: Menu}]
    });
};

module.exports = controller;