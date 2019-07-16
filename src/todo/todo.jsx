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

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh();
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleAdd() {        
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:3003/api/todos',
        //     data: {
        //       description: 'Fred'              
        //     }
        //   });
                
        const description = this.state.description
        
        axios.post(URL, { description })
            .then(resp => this.refresh())
            .catch(function(error){
                console.log('Mensagem de erro para tratar: ' + error)
        })
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo, marked){
        axios.put(`${URL}/${todo._id}`, { ...todo, done: marked} )
            .then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh();
    }

    render () {
        return (
            <div>
                <PageHeader name='Cadastro de tarefas'></PageHeader>
                <TodoForm 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}/>
            </div>
        )
    }
} 