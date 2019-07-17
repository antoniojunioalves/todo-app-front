import React from 'react'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { deleteTodo, markDone } from '../actions'

const TodoList = props => {
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
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.list})

const mapDispatchToProps = dispatch => ({
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    markDone: (todo, marked) => dispatch(markDone(todo, marked))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)