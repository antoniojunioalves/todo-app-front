const { NODE_ENV } = process.env

export const urlApi = NODE_ENV !== 'production' ? 
    'http://localhost:3003/api/todos' : 
    'https://antonio-todo-api.herokuapp.com/api/todos'