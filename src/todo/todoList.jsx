import React from 'react'
import IconButton from '../template/iconButton'

export default props => {
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
                        onClick={() => props.handleMarkAsDone(todo, true)} />
                    <IconButton 
                        hide={!todo.done}
                        style='warning'
                        icon='undo'
                        onClick={() => props.handleMarkAsDone(todo, false)} />
                    <IconButton 
                        hide={!todo.done}
                        style='danger'
                        icon='trash-o'
                        onClick={() => props.handleRemove(todo)} />
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