// Here we will configure the connexion with the mongo
const mongoose = require('mongoose')

// important we replace the promisses of the node in order to avoid the warning message that 
// happens when we use the promisses of the mongoose
mongoose.Promise = global.Promise

// export the connection to the database
module.exports = mongoose.connect('mongodb://localhost/todo')
