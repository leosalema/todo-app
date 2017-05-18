/** Here we will build the communication base between the frontend and 
 * the backend, the axios is reponsavel by this part
 */
import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoform'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        
        //Calling the method in the constructor to supply the screen with the descriptions registered
        this.refresh()
    }
    
    // Through the method get the axios will make the search by descending order the description in the url
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }
    
    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }    
    // Through the post method the axios will insert the description in the url
    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()            
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList 
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}