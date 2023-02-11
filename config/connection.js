// import mysql2
const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: '3.1.0',
        user: 'root',
    },
);
// export db
module.exports = db;