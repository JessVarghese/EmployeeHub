require('dotenv').config()

const mysql = require('mysql');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'employee_hub_db',
  });


  module.exports = db;