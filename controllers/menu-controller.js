const controller = {};
const { Menu } = require("../models");

controller.getMenus = async () => {
    return await Menu.findAll();
};

module.exports = controller;