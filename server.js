const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const connection = require('./db/connection')


//Inquirer Questions

function promptDatabase() { 

      inquirer.prompt([

        {
          type: 'list',
          name: 'options',
          message: 'What would you like to do?',
          choices: 
          ['View all Employees', 
          'View all Departments', 
          'View all Roles', 
          'View Employees by Manager', 
          'Add a Role', 
          'Add an Employee', 
          'Update Employee Role', 
          'Exit Employee Hub'],
      },
    ])
    .then((response) => {
    switch(response.options) {
      case 'View all Employees':
        viewAllEmployees();
        break;
        case 'View all Departments':
        viewAllDepartments();
        break;
        case 'View all Roles':
        viewAllRoles();
        break;
        case 'View Employees by Manager':
        viewAllEmpManger();
        break;
        case 'Add a Role':
        addRole();
        break;
        case 'Add an Employee':
        addEmployee();
        break;
        case 'Update Employee Role':
        updateEmpRole();
        break;
        case 'Exit Employee Hub':
        connection.end();
        console.log('You have exited the program. Goodbye!');
        break;

       }

    })
}
promptDatabase();

//View All functions

// function to view all Employees
function viewAllEmployees() {
  connection.query(
    'SELECT first_name,last_name, role_id, manager_id FROM employees',
    function(err, results) {
      if (err) console.error(err);
      console.table(results); // results contains rows returned by server
      promptDatabase();
    })
}



//function to view all departments
function viewAllDepartments() {
  connection.query(
    'SELECT name FROM departments',
    function(err, results) {
      if (err) console.error(err);
      console.table(results); // results contains rows returned by server
      promptDatabase();
    })
}
  

//function to view all roles
function viewAllRoles() {
  connection.query(
    'SELECT title, salary, department_id FROM roles',
    function(err, results) {
      if (err) console.error(err);
      console.table(results); // results contains rows returned by server
      promptDatabase();
    })
}

//function to view employees by manager

//Add a Role

//function to Add an Employee

// function to Update Employee Role