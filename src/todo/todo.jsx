import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const Todo = props => (
    <div>
        <PageHeader name='Cadastro de tarefas'></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)

export default Todo