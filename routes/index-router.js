const express = require('express');
const router = express.Router();

const MenuController = require("../controllers/menu-controller");
const FoodController = require("../controllers/food-controller");

router.get('/', async (req, res, next) => {
    try {
        res.locals.menus = await MenuController.getMenus();
        res.locals.allFood = await FoodController.getAllFood(req.query);
        res.render('index');   
    } catch (error) {
        next(error);
    }
});


module.exports = router;