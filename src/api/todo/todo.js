// Below we will configure the mongo document
// the node-restful creates a shell on top of the mongoose giving a practically ready api rest
const restful = require('node-restful')
const mongoose = restful.mongoose

// Below we create the body of the database informing the fields, their types and if their fields are obligatory
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false},
    createdAt: { type: Date, default: Date.now }
})

// Let's export the schema with the name of the template
module.exports = restful.model('Todo', todoSchema)