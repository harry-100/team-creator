const inquirer = require('inquirer');

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
    }

]);
};
managerInfo().then(answers => {
    console.log(answers);
})