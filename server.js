var express = require("express");
var methride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(process.cwd() + './public'));


app.use(methride("_method"));


var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var router = require("./controllers/burgers_controller")(app);
app.use('/', router);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});