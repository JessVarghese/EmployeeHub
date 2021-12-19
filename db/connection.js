require('dotenv').config()

const mysql = require('mysql');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: process.env.password,
    database: 'employee_hub_db',
  });


  module.exports = db;