const employee = require('./Employee.js')

class Engineer extends employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role)
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;