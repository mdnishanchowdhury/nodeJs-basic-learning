require("dotenv").config();

const config = {
   app:{
     name: process.env.NEXT_APP || 'DefaultApp',
    version: process.env.APP_VERSION || '0.0.0.1',
    portName: process.env.PORT || '5001',
    people: process.env.NODE_ENV
   }
}
console.log(config.app)

module.exports = config;