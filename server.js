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
    'SELECT employees.id, employees.first_name, employees.last_name, employees.role_id, employees.manager_id, roles.title, roles.salary, departments.name AS department_name FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.id = departments.id;',
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
    'SELECT roles.id, roles.title, roles.salary, departments.name AS department_name FROM roles JOIN departments on roles.department_id = departments.id;',
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
      switch(response.options) {
        case 'Add Employee':
          addEmployee();
          break;
          case 'Add Role':
          addRole();
          break;
          case 'Add Departments':
          addDepartment();
          break;
        }

      })
  }


// // add an employee to the database
// function addEmployee() {
 
//       inquirer
//           .prompt([
//               {
//                   name: 'first_name',
//                   type: 'input', 
//                   message: "What is the employee's fist name? ",
//               },
//               {
//                   name: 'last_name',
//                   type: 'input', 
//                   message: "What is the employee's last name? "
//               },
//               {
//                   name: 'manager_id',
//                   type: 'input', 
//                   message: "What is the employee's manager's ID? "
//               },
//               {
//                   name: 'role', 
//                   type: 'list',
//                   choices: function() {
//                   var roleArray = [];
//                   for (let i = 0; i < res.length; i++) {
//                       roleArray.push(res[i].title);
//                   }
//                   return roleArray;
//                   },
//                   message: "What is this employee's role? "
//               }
//               ]).then(function (answer) {
//                   let role_id;
//                   for (let a = 0; a < res.length; a++) {
//                       if (res[a].title == answer.role) {
//                           role_id = res[a].id;
//                           console.log(role_id)
//                       }                  
//                   }  
//                   connection.query(
//                   'INSERT INTO employee SET ?',
//                   {
//                       first_name: answer.first_name,
//                       last_name: answer.last_name,
//                       manager_id: answer.manager_id,
//                       role_id: role_id,
//                   },
//                   function (err) {
//                       if (err) throw err;
//                       console.log('Your employee has been added!');
//                       promptDatabase();
//                   })
//               })
//       };

// // add a department to the database
// function addDepartment() {
//   inquirer
//       .prompt([
//           {
//               name: 'newDepartment', 
//               type: 'input', 
//               message: 'Which department would you like to add?'
//           }
//           ]).then(function (answer) {
//               connection.query(
//                   'INSERT INTO department SET ?',
//                   {
//                       name: answer.newDepartment
//                   });
//               var query = 'SELECT * FROM department';
//               connection.query(query, function(err, res) {
//               if(err)throw err;
//               console.log('Your department has been added!');
//               console.table('All Departments:', res);
//               options();
//               })
//           })
// };

// // add a role to the database
// function addRole() {
//   connection.query('SELECT * FROM department', function(err, res) {
//       if (err) throw err;
  
//       inquirer 
//       .prompt([
//           {
//               name: 'new_role',
//               type: 'input', 
//               message: "What new role would you like to add?"
//           },
//           {
//               name: 'salary',
//               type: 'input',
//               message: 'What is the salary of this role? (Enter a number)'
//           },
//           {
//               name: 'Department',
//               type: 'list',
//               choices: function() {
//                   var deptArry = [];
//                   for (let i = 0; i < res.length; i++) {
//                   deptArry.push(res[i].name);
//                   }
//                   return deptArry;
//               },
//           }
//       ]).then(function (answer) {
//           let department_id;
//           for (let a = 0; a < res.length; a++) {
//               if (res[a].name == answer.Department) {
//                   department_id = res[a].id;
//               }
//           }
  
//           connection.query(
//               'INSERT INTO role SET ?',
//               {
//                   title: answer.new_role,
//                   salary: answer.salary,
//                   department_id: department_id
//               },
//               function (err, res) {
//                   if(err)throw err;
//                   console.log('Your new role has been added!');
//                   console.table('All Roles:', res);
//                   options();
//               })
//       })
//   })
// };
   