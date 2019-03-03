var orm = require("../config/orm.js");
var path = require('path');

var db = require("../models");

var burger = {
    selectAll: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, als, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;