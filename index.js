const express = require('express');
const expressHbs = require('express-handlebars');
const app = express();

const IndexRouter = require("./routes/index-router");
const BookingRouter = require("./routes/booking-router");


app.engine('hbs', expressHbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: { allowProtoPropertiesByDefault: true },
    helpers: {
        fixPrice: (val, options) => {
            return parseFloat(val).toFixed(2);
        }
    }
}));

app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

/**
 * Router
 */
 app.use('/', IndexRouter);
 app.use('/booking', BookingRouter);

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});