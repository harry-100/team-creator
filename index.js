const inquirer = require('inquirer');
const employeeArr = [];
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const managerInfo = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the Manager.'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the id '
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email id?'
    },
    {
        type: 'input',
        name: 'phoneNumber',
        message: 'What is your office phone number?'
    }

])
.then(managerInfo => {
    console.log('phone=', managerInfo.phoneNumber);
    const {name, id, email, phoneNumber} = managerInfo;
    const manager = new Manager(name, id, email, phoneNumber);
    console.log('manager', manager);
    employeeArr.push(manager);
    console.log('employeeArr', employeeArr);

})
};

const engineerInfo = () => {
    // if(!employeeInfo.engineers){
    //     employeeInfo.engineers = [];
    // }
    return inquirer.prompt([
        {
        type: 'list',
        name:'role',
        message: 'Please choose the role of the employee',
        choices: ['engineer', 'intern']
        },
        {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the employee.'
        },
        {
        type: 'input',
        name: 'id',
        message: 'Please enter the id '
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is your email id?'
        },
        {
        type: 'input',
        name: 'github',
        message: 'What is your office github username?'
        },
        {
        type: 'confirm',
        name: 'confirmAddEngineer',
        message: 'Do you want to add more engineers?',
        default: false
        }

])
.then(engineerData => {
    const {name, id, email, github} = engineerData;
    engineer = new Engineer(name, id, email, github);
    employeeArr.push(engineer);
    console.log('employee Arr=', employeeArr);
    // employeeInfo.engineers.push(engineerData);
    if(engineerData.confirmAddEngineer){
        return engineerInfo();
    }
    console.log('employeeArr-eng', employeeArr);
    return employeeArr;
})
};




managerInfo()
.then(engineerInfo)
// .then(internInfo)
.then
(employeeInfo => {
console.log('final-data', employeeInfo);
 })








/* ------------------------------------------------------------------ */


const internInfo = employeeInfo => {
    if(!employeeInfo.interns){
        employeeInfo.interns = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email ID?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Which school did you graduate from?'
        },
        {
            type: 'confirm',
            name: 'confirmAddIntern',
            message: 'Do you want to add more intern?',
            default: false
        }
    ])
    .then(internData => {
        employeeInfo.interns.push(internData);
        if(internData.confirmAddIntern){
            return internInfo(employeeInfo);
        }
        return employeeInfo;
    })
}



