const inquirer = require('inquirer');
const managerInfo = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the Manager.'
    },
    {
        type: 'list',
        name: 'options',
        message: 'Please select what you want to do next',
        choices: ['Add engineer', 'Add intern', 'finished input']
    },

]);
};
const engineers = [];
const engineerInfo = () => {
   /*  if(!engineers){
        engineers = [];
    } */
    return inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the Engineer.'
    },
    {
        type: 'confirm',
        name: 'confirmAddEngineer',
        message: 'Do you want to add more engineers?',
        default: false
    }

])
.then(engineerData => {
    engineers.push(engineerData);
    if(engineerData.confirmAddEngineer){
        return engineerInfo()
    }
    return engineers;
})
};

const internInfo = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name'
        },
        {
            type: 'confirm',
            name: 'confirmAddIntern',
            message: 'Do you want to add more intern?',
            default: false
        }
    ])

}

managerInfo()
.then(managerInfo => {
    console.log(managerInfo)
})

.then(engineerInfo)
.then(engineerInfo => {
    console.log(engineerInfo)
})
// .then(internInfo)
// .then
// (employeeInfo => {
//     console.log(employeeInfo);
// })
