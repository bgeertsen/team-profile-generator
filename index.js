const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerCard = require('./src/manager-card');
const engineerCard = require('./src/engineer-card');
const internCard = require('./src/intern-card')
const pageTemp = require('./src/page-builder')
const fs = require('fs')

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


const app = function(){   inquirer
        .prompt(questions)
        .then(answers => {
            answersArr.push(answers);
            // if more employees need to be added restart the question prompts
            if (answers.moreEmployees) {
                console.log("Ignore the 'null' and continue to type employee's name!")
                app();
            }
            else{
                console.log("Html generated! Find it in /dist!")
            }
            return answersArr
        })
        .then(answersArr => {
            let cardArr = [];
            for (let i = 0; i < answersArr.length; i++) {
                if (answersArr[i].role === "Manager") {
                    // create a manager object
                    const { name, id, email, role, office } = answersArr[i]
                    const manager = new Manager(name, id, email, role, office)

                    //creates an html manager card
                    let card = managerCard(manager.name, manager.id, manager.email, manager.officeNumber)
                    // adds the card to an array
                    cardArr.push(card)
                }
                if (answersArr[i].role === "Engineer") {
                    // create an engineer object
                    const { name, id, email, role, github } = answersArr[i];
                    const engineer = new Engineer(name, id, email, role, github)

                    //creates an html engineer card                 
                    let card = engineerCard(engineer.name, engineer.id, engineer.email, engineer.github)
                    cardArr.push(card)                  
                }
                if (answersArr[i].role === "Intern") {
                    // create an intern object
                    const { name, id, email, role, school } = answersArr[i];
                    const intern = new Intern(name, id, email, role, school);

                    // creates an html intern card
                    let card = internCard(intern.name, intern.id, intern.email, intern.school)
                    cardArr.push(card)
                    
                }
            }
            // returns and array of html cards to be inserted into the page template
            return cardArr;
        })
        .then(array => {
            //inserts the array of cards into the page template
            return pageTemp(array);
        })
        .then(content => {
            // writes the finished product in the /dist folder
            fs.writeFile('./dist/index.html', content, err => {
                console.error(err)
            })
            
        })
        .catch(err => {
            console.log(err)
        })

}
app()

