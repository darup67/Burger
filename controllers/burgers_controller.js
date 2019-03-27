var express = require("express");

// var app = express();

var router = express.Router();

var burger = require("../models/burger.js");

// module.exports

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        // var hbsObject = [
        //     data
        // ]
        console.log(data);
        res.render("index", { burgers: data });
    });
});

router.post("/create", function(req, res) {
    console.log('posting...');
    console.log(req.body.burgName);
    burger.insertOne("burgers", [req.body.burgName], function(result) {
        res.json({ id: result.insertId });
        res.redirect("/");
    });
});

router.put("update/:id",
    function(req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);
        burger.updateOne({
            devoured: true
        }, condition, function(data) {
            res.redirect("/");
        });
    });

module.exports = router;