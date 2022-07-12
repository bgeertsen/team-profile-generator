const employee = require('./Employee.js')

class Intern extends employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role)
        this.school = school
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;