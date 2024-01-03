// lib/db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'empiredb',
  password: ''
});

connection.connect();
module.exports = connection;