const argv = require('yargs').options({
                address:{
                    alias: 'a',
                    desc: 'City Address to obtain the clima info',
                    demmand: true
                }
            }).argv;


module.exports = argv;


