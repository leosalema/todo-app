//Here we will configure the communication commands with the database
const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])

// a linh abaixo foi criada porque o mongo não traz por default as opções 
// de retorno do campo atualizado e não faz as validaçãoes no update
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo