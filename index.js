const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerCard = require('./src/manager-card');
const engineerCard = require('./src/engineer-card');
const internCard = require('./src/intern-card')

const answersArr = [];
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
            answersArr.push(answers);
            if (answers.moreEmployees) {
                app();
            }
            return answersArr
        })
        .then(answersArr => {
            for (let i = 0; i < answersArr.length; i++) {
                if (answersArr[i].role === "Manager") {
                    // send to Manager.js
                    const { name, id, email, role, office } = answersArr[i]
                    const manager = new Manager(name, id, email, role, office)

                    console.log(`New manager object: ${JSON.stringify(manager)}`)
                    let card = managerCard(manager.name, manager.id, manager.email, manager.officeNumber)
                    console.log(card);
                }
                if (answersArr[i].role === "Engineer") {
                    //send to Engineer.js
                    const { name, id, email, role, github } = answersArr[i];
                    const engineer = new Engineer(name, id, email, role, github)

                    console.log(`New engineer object: ${JSON.stringify(engineer)}`)
                    let card = engineerCard(engineer.name, engineer.id, engineer.email, engineer.github)
                    console.log(card);
                }
                if (answersArr[i].role === "Intern") {
                    //send to Intern.js
                    const { name, id, email, role, school } = answersArr[i];
                    const intern = new Intern(name, id, email, role, school);

                    console.log(`New intern object: ${JSON.stringify(intern)}`)
                    let card = internCard(intern.name, intern,id, intern.email, intern.school)
                    console.log(card);
                }
            }
        })
        .catch(err => {
            console.log(err)
        })

}
app();
