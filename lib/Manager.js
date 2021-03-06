const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, role, office) {
        super(name, id, email, role)
        this.officeNumber = office
    }
}

module.exports = Manager;