var connection = require("./connection.js");


var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM burgers";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(tableName, data, cb) {
        console.log('orm.js');
        var queryString = "INSERT INTO burgers " + burgers;
        connection.query(queryString, data, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function() {
        var queryString = "UPDATE burgers SET ? WHERE ?";
        console.log(queryString);
        connection.query(queryString, [colName, ], function(err, result) {
            console.log(result);
        });
    },
}

module.exports = orm;