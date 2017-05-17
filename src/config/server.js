/**Here we will do the configuration relative to the expression, initialization of the server and 
 * we will allocate a port to publish the webserver*/
const port = 3003

//Just the one who will make the parser of the request body when it arrives
const bodyParser = require('body-parser')

//The expression that is the web server that runs on top of the node
const express = require('express')

//Initiating express
const server = express()
const allowCors = require('./cors')

//Applying the middleware
//Urlencoded request made by bodyparser, with module extends which supports more data type than urlencoded
server.use(bodyParser.urlencoded({ extended: true }))

//We applied the bodyparser for json conversion
server.use(bodyParser.json())

server.use(allowCors)

// we will register the registered port above and if everything is correct it will appear the 
// message that everything is running correctly on the port
server.listen(port, function() {
    console.log(`BACKEND is runnig on port ${port}.`)
})

module.exports = server