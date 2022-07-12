const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'name',
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
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school",
        when: (answers) => answers.role === 'Intern'
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: 'input',
        name: 'office',
        message: "What is the manager's office number?",
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'confirm',
        name: 'moreEmployees',
        message: "Do you need to add any more employees?"

    }
]

const app = () => {
    return inquirer
    .prompt(questions)
    .then(answers => {
        if(answers.moreEmployees) {
            app();
        }
        
    })
    .catch(err => {
        console.log(err);
    })
}

app();