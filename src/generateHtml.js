
// create card to display manager information

const generateManager = function(manager){
    return`
            <div class="col">
                <div class="card border-dark m-3 mx-auto bg-info bg-opacity-25" style="width: 18rem;">
                    <div class="card-body bg-primary mt-3 text-light">
                      <h5 class="card-title">${manager.name}</h5>
                      <h6 class="card-text">Manager</h6>
                    </div>
                    <ul class="list-group list-group-flush mb-3">
                      <li class="list-group-item">ID: ${manager.id}</li>
                      <li class="list-group-item">Email: ${manager.email}</li>
                      <li class="list-group-item">Office No: ${manager.officeNumber}</li>
                    </ul>
                  </div>
            </div>    
    `
}

//  create card to display engineer information
const generateEngineer = function(engineer) {
    return`
            <div class="col">
                <div class="card border-dark m-3 mx-auto bg-info bg-opacity-25" style="width: 18rem;">
                    <div class="card-body bg-primary mt-3 text-light">
                      <h5 class="card-title">${engineer.name}</h5>
                      <h6 class="card-text">Engineer</h6>
                    </div>
                    <ul class="list-group list-group-flush mb-3">
                      <li class="list-group-item">ID: ${engineer.id}</li>
                      <li class="list-group-item">Email: ${engineer.email}</li>
                      <li class="list-group-item">GitHub user: ${engineer.github}</li>
                    </ul>
                  </div>
            </div>      
    `
}

//  create card to display intern information
const generateIntern = function(intern) {
    return`

            <div class="col">
                <div class="card border-dark m-3 mx-auto bg-info bg-opacity-25" style="width: 18rem;">
                    <div class="card-body bg-primary mt-3 text-light">
                      <h5 class="card-title">${intern.name}</h5>
                      <h6 class="card-text">Intern</h6>
                    </div>
                    <ul class="list-group list-group-flush mb-3">
                      <li class="list-group-item">ID: ${intern.id}</li>
                      <li class="list-group-item">Email: ${intern.email}</li>
                      <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                  </div>
            </div>    
    `
}


//generate 

const generateTeamPage = function(displayCards){
    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
</head>
<body>
    <section>
        <div class="container">
            <div class="row bg-danger text-light m-5 p-3">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
            ${displayCards}
            </div>
        </div>
    </section>
</body>
</html>
    
    `;
}
// generate HTML page
generateHtml = (data) => {
    displayTeam = [];

    for (let i=0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();
        if (role === 'Manager') {
            const displayManager = generateManager(employee);
            displayTeam.push(displayManager);
        }
        if (role === 'Engineer') {
            const displayEngineer = generateEngineer(employee);
            displayTeam.push(displayEngineer);
        }
        if (role === 'Intern') {
            const displayIntern = generateIntern(employee);
            displayTeam.push(displayIntern);
        }
    }
    const displayCards = displayTeam.join('');

    const generateTeam = generateTeamPage(displayCards);
    return generateTeam;
}
module.exports = generateHtml;