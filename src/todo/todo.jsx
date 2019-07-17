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
    }

    render () {
        return (
            <div>
                <PageHeader name='Cadastro de tarefas'></PageHeader>
                <TodoForm />
                <TodoList />
            </div>
        )
    }
} 