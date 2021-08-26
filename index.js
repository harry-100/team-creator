//  Importing required node modules
const inquirer = require('inquirer');

const generateHtml = require('./src/generateHtml');
const writeFile = require('./src/createFIle');
//  Importing classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeArr = [];

// capturing manager information
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
    const {name, id, email, phoneNumber} = managerInfo;
    const manager = new Manager(name, id, email, phoneNumber);
    employeeArr.push(manager);

})
};
//  capturing engineer and intern information
const employeeInfo = () => {
    // if(!employeeInfo.engineers){
    //     employeeInfo.engineers = [];
    // }
    return inquirer.prompt([
        {
        type: 'list',
        name:'role',
        message: 'Please choose the role of the employee',
        choices: ['Engineer', 'Intern']
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
        when: (input) => input.role === 'Engineer',
        },
        {
        type: 'input',
        name: 'school',
        message: 'Which school did you graduate from?',
        when: (input) => input.role === 'Intern'    
        },
        {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Do you want to add more employees?',
        default: false
        }

])
.then(employeeData => {
    if (employeeData.role === 'Engineer'){
        const {name, id, email, github} = employeeData;
        engineer = new Engineer(name, id, email, github);
        employeeArr.push(engineer); 
    }
    else {
        const {name, id, email, school} = employeeData;
        intern = new Intern(name, id, email, school);
        employeeArr.push(intern);
    }

    if(employeeData.confirmAddEmployee){
        return employeeInfo();
    }
    return employeeArr;
})
};

// using captured information to generate html output
managerInfo()
.then(employeeInfo)
.then
(employeeArr => {
console.log('employee Array', employeeArr);
return generateHtml(employeeArr);
 })
 .then(pageHtml => {
     return writeFile(pageHtml);
 })
 .catch(err => {
     console.log(err);
 })

