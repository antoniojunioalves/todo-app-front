import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh();
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
    }

    handleAdd() {
        //console.log(this.state.description)   
        const description = this.state.description

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:3003/api/todos',
        //     data: {
        //       description: 'Fred'              
        //     }
        //   });

        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true} )
            .then(resp => this.refresh())
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false} )
            .then(resp => this.refresh())
    }

    render () {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleMarkAsDone={this.handleMarkAsDone}/>
            </div>
        )
    }
}