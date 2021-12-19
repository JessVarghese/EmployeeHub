const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const connection = require('./db/connection')




// Start server after DB connection
connection.connect(err => {
  // if (err) throw err;
  console.log('Welcome to Employee Hub');
  promptDatabase();
});



//Inquirer Questions

promptDatabase = () => {

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
        return;
        default:
        break;

        }

    })

}

//View All functions

// function to view all Employees
viewAllEmployees = () => {
  connection.query(
    'SELECT * FROM `employees`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
      promptDatabase();}

  )
  
}


//function to view all departments


//function to view all roles


//function to view employees by manager

//Add a Role

//function to Add an Employee

// function to Update Employee Role