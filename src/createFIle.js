//  import the required node module
const fs = require('fs');

//  function to write html data to the file
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("File created successfully")
        }
    })
}; 

module.exports = writeFile;