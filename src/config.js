
var os = require('os');

config = {
    // Implement some sorta token for generating client help/upgrades and other stuff, store in some sorta encrypted file
    TOKEN__: null,
    // For Downloads
    OS_NAME__: os.type(),
    OS_VERSION__: os.release(),
    HOSTNAME__: os.hostname(),
    // Deprecated: Fix this with fs.readfile
    FIRST_LOAD__: () => {

       // Loading From the ./src/json/config.json
       configFile = require('./json/config.json');

       const file = JSON.parse(configFile);

       console.log(file.first_load); 
       return new Promise(function (resolve, reject) {
           if (reject == undefined) return


           return resolve(file.first_load);
       })
       
        /*
       return new Promise(function (resolve, reject) {
           // Checks if rejectPromise 
           if (reject === undefined){
                return
           }
           // Otherwise it would return (FILE)
           return resolve(false);
       })
      */

   }
}
// require('./config')
module.exports = config
