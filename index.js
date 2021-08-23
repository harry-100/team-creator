const inquirer = require('inquirer');
const employeeArr = [];
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

const employeeInfo = () => {
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
        message: 'Please enter the name of the employee'
        },
        {
        type: 'input',
        name: 'id',
        message: 'Please enter the id'
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is your email id?'
        },
        {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.',
        when: (input) => input.role === 'engineer',
        },
        {
        type: 'input',
        name: 'school',
        message: 'Which school did you graduate from?',
        when: (input) => input.role === 'intern'    
        },
        {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Do you want to add more employees?',
        default: false
        }

])
.then(employeeData => {
    if (employeeData.role === 'engineer'){
        const {name, id, email, github} = employeeData;
        engineer = new Engineer(name, id, email, github);
        employeeArr.push(engineer); 

    }
    else {
        const {name, id, email, school} = employeeData;
        intern = new Intern(name, id, email, school);
        employeeArr.push(intern);
    }
    // const {name, id, email, github} = engineerData;
    // employee = new Engineer(name, id, email, github);
    // employeeArr.push(employee);
    // console.log('employee Arr=', employeeArr);
    // employeeInfo.engineers.push(engineerData);
    if(employeeData.confirmAddEmployee){
        return employeeInfo();
    }
    // console.log('employeeArr-eng', employeeArr);
    return employeeArr;
})
};




managerInfo()
.then(employeeInfo)
// .then(internInfo)
.then
(employeeData => {
console.log('final-data', employeeData);
console.log('employee Array', employeeArr);
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



