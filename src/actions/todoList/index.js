import axios from 'axios'
import { urlApi } from '../index'

export const deleteTodo = (todo) => {
    axios.delete(`${urlApi}/${todo._id}`)

    return {
        type: 'DELETE_TODO',
        payload: todo
    }
}

export const markDone = (todo, marked) => {
    const newTodo = { ...todo, done: marked }
    axios.put(`${urlApi}/${todo._id}`,  newTodo)
    return{
        type: 'MARK_DONE',
        payload: newTodo
    }
}