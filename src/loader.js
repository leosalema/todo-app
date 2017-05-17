/**File responsible for loading the main configuration files*/
const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)