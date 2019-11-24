const config = require("../../etc/database_config.json");
const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : config.connectionLimit,
    host            : config.host,
    user            : config.user,
    password        : config.password,
    database        : config.database
});

module.exports = {
    pool
}