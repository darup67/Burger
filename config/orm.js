var connection = require("./connection.js");


var orm = {
    selectAll: function(burgers, cb) {
        var queryString = "SELECT * FROM burgers";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(burgers, burgName, cols, cb, vals) {
        console.log('orm.js');
        var queryString = "INSERT INTO burgers (burgName) Values (?)" + burgers
        connection.query(queryString, data, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(burgers, Burgname cb) {
        var queryString = "UPDATE ?? SET ?? WHERE ??";
        console.log(queryString);
        connection.query(queryString, [colName, ], function(err, result) {
            console.log(result);
        });
    },
}

module.exports = orm;