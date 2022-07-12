const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the employee's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's id number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?"
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
    }
]

inquirer
    .prompt([questions])
    .then((answers) => {
        console.log(answers);
    })
    .catch((err) => {
        console.log(err)
    })