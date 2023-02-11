const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./config/connection')

// function to retrieve and display all departments
async function viewDepartments() {
  const query = "SELECT * FROM departments";
  const [rows, fields] = await db.promise().query(query);
  console.table(rows, ['id', 'name']);
}

async function addDepartment() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:'
    }
  ]);

  const query = `INSERT INTO departments (name) VALUES ('${answers.name}')`;
  await db.promise().query(query);
  console.log(`Department "${answers.name}" added successfully!`);
}

const questions = [
  {
    type: "list",
    name: "option",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Quit"
    ]
  }
];

function startApp() {
  inquirer
    .prompt(questions)
    .then(answers => {
      switch (answers.option) {
        case "View all departments":
        viewDepartments();
          break;
        case "View all roles":
          // function to view all roles
          break;
        case "View all employees":
          // function to view all employees
          break;
        case "Add a department":
        addDepartment();
          break;
        case "Add a role":
          // function to add a role
          break;
        case "Add an employee":
          // function to add an employee
          break;
        case "Update an employee role":
          // function to update an employee role
          break;
        case "Quit":
          process.exit();
      }
    })
    .catch(err => {
      console.log(err);
    });
}

startApp();