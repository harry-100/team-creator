
const Employee = require('./Employee');
//  creating Manager class
class Manager extends Employee{
    constructor(name, id, email, officeNumber)
    {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getRole() {
        return 'Manager';
    }

}

// exporting Manager class
module.exports = Manager;