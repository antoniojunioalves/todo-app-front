import axios from 'axios'

const { NODE_ENV } = process.env
export const URL = NODE_ENV !== 'production' ? 'http://localhost:3003/api/todos' : 'https://antonio-todo-api.herokuapp.com/api/todos'

// const URL = process.env === 'production' ?  
//     'https://antonio-todo-api.herokuapp.com/api/todos':
//     'http://localhost:3003/api/todos'

//////////////// ACTIONS todoForm
export const change = (description) => ({
    type: 'DESCRIPTION_CHANGE',
    payload: description
})

export const clear = () =>({
    type: 'CLEAR'
})

export const search = (description) => {
    const search = description ? `&description__regex=/${description}/` : ''
    const request = axios.get(`${URL}?sort=-createdAt${search}`)
    return {
        type: 'BUSCAR_DADOS',
        payload: request
    }
}

export const addTask = (description) => {
    const request = axios.post(URL, { description })
    return {
        type: 'ADD_DESCRIPTION',
        payload: request
    }
}

//////////////// ACTIONS todoList
export const deleteTodo = (todo) => {
    axios.delete(`${URL}/${todo._id}`)

    return {
        type: 'DELETE_TODO',
        payload: todo
    }
}

export const markDone = (todo, marked) => {
    const newTodo = { ...todo, done: marked }
    axios.put(`${URL}/${todo._id}`,  newTodo)
    return{
        type: 'MARK_DONE',
        payload: newTodo
    }
}