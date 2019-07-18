import React from 'react'
import { connect } from 'react-redux'

import IconButton from '../template/iconButton'
import { deleteTodo, markDone } from '../actions/todoList'

const TodoList = props => {
    const { loading, error } = props

    const compLoading = () => (
        <tr>
            <td>Loading...</td>
        </tr>
    )

    const compError = () => (
        <tr>
            <td>ERRO!</td>
        </tr>
    )

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton
                        hide={todo.done}
                        style='sucess' 
                        icon='check'
                        onClick={() => props.markDone(todo, true)} />
                    <IconButton 
                        hide={!todo.done}
                        style='warning'
                        icon='undo'
                        onClick={() => props.markDone(todo, false)} />
                    <IconButton 
                        hide={!todo.done}
                        style='danger'
                        icon='trash-o'
                        onClick={() => props.deleteTodo(todo)} />
                </td>
            </tr>
        ))
    }
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {console.log(error)}
                {
                    
                    error ? 
                        compError() : 
                        loading ?
                            compLoading() : renderRows()
                }
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.list,
    loading: state.loading,
    error: state.error    
})

const mapDispatchToProps = dispatch => ({
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    markDone: (todo, marked) => dispatch(markDone(todo, marked))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)