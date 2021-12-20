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
          'Update Database', 
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
        case 'Update Database':
        updateData();
        break;
        case 'Exit Employee Hub':
        connection.end();
        console.log('You have exited the program. Goodbye!');
        break;

       }

    });
}
promptDatabase()

//View All functions

// function to view all Employees
function viewAllEmployees() {
  connection.query(
    'SELECT employees.id, employees.first_name, employees.last_name, employees.role_id, employees.manager_id, roles.title, roles.salary, roles.department_id, departments.name AS department_name FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.id = departments.id;',
    function(err, results) {
      if (err) console.error(err);
      console.table(results); // results contains rows returned by server
      promptDatabase();
    })
}



//function to view all departments
function viewAllDepartments() {
  connection.query(
    'SELECT departments.id, departments.name AS department_name FROM departments;',
    function(err, results) {
      if (err) console.error(err);
      console.table(results); // results contains rows returned by server
      promptDatabase();
    })
}
  

//function to view all roles
function viewAllRoles() {
  connection.query(
    'SELECT roles.id, roles.title, roles.salary, roles.department_id, departments.name AS department_name FROM roles JOIN departments on roles.department_id = departments.id;',
    function(err, results) {
      if (err) console.error(err);
      console.table(results); // results contains rows returned by server
      promptDatabase();
    })
}




//Update Database
function updateData() {
  inquirer
    .prompt({

      name: "addMenu",
      type: "list",
      message: "What would you like to ADD?",
      choices: ["Add Employee", "Add Role", "Add Department"],

    })
    .then((response) => {
      switch(response.addMenu) {
        case 'Add Employee':
          addEmployee();
          break;
          case 'Add Role':
          addRole();
          break;
          case 'Add Department':
          addDepartment();
          break;
        }

      })
  }


// add an employee to the database
function addEmployee() {
 
      inquirer
          .prompt([
              {
                  name: 'first_name',
                  type: 'input', 
                  message: "What is the employee's fist name? ",
              },
              {
                  name: 'last_name',
                  type: 'input', 
                  message: "What is the employee's last name? "
              },
              {
                  name: 'role_id',
                  type: 'input', 
                  message: "What is the employee's role ID? "
              },
              {
                name: 'manager_id',
                type: 'input', 
                message: "What is the employee's manager's ID? "
            },
              
              ])
              .then(function (response) {  
                  connection.query(
                  'INSERT INTO employees SET ?',
                  {
                      first_name: response.first_name,
                      last_name: response.last_name,
                      manager_id: response.manager_id,
                      role_id: response.role_id,
                  },
                  function (err) {
                      if (err) throw err;
                      console.log('Your employee has been added!');
                      promptDatabase();
                  })
              })
      };

// add a department to the database
function addDepartment() {
  inquirer
      .prompt([
          {
              name: 'newDepartment', 
              type: 'input', 
              message: 'Please Enter New Department Name?'
          }
          ]).then(function (response) {
              connection.query(
                  'INSERT INTO departments SET ?',
                  {
                      name: response.newDepartment
                  });
              var query = 'SELECT * FROM departments';
              connection.query(query, function(err, res) {
              if(err)throw err;
              console.log('Your department has been added!');
              console.table('All Departments:', res);
              promptDatabase();
              })
          })
};

 // add a role to the database
function addRole() {
  connection.query('SELECT * FROM roles', function(err, res) {
      if (err) throw err;
  
      inquirer 
      .prompt([
          {
              name: 'title',
              type: 'input', 
              message: "What new role would you like to add?"
          },
          {
              name: 'salary',
              type: 'input',
              message: 'What is the salary of this role? (Enter a number)'
          },
          {
              name: 'Department',
              type: 'input',
              message:'Enter Department ID:'
              },
          
      ]).then(function (response) {
  
          connection.query(
              'INSERT INTO roles SET ?',
              {
                  title: response.title,
                  salary: response.salary,
                  department_id: response.department_id
              },
              function (err, res) {
                  if(err)throw err;
                  console.log('Your new role has been added!');
                  console.table('All Roles:', res);
                  promptDatabase();
              })
      })
  })
};
   