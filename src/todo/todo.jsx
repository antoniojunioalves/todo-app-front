import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'
const URL = 'http://localhost:3003/api/todos'
// const URL = process.env = 'prod' ?  
//     'https://antonio-todo-api.herokuapp.com/api/todos':
//     'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)

        this.state = { description: '', list: [] }

        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo, marked){
        axios.put(`${URL}/${todo._id}`, { ...todo, done: marked} )
            .then(resp => this.refresh(this.state.description))
    }

    render () {
        return (
            <div>
                <PageHeader name='Cadastro de tarefas'></PageHeader>
                <TodoForm />
                <TodoList 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}/>
            </div>
        )
    }
} 