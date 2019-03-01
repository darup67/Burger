var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(process.cwd() + './public'));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// var router = require("./controllers/burgers_controller")(app);
var router = require("./controllers/burgers_controller");

// app.use(router);

app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
});