import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'
// const URL = process.env = 'prod' ?  
//     'https://antonio-todo-api.herokuapp.com/api/todos':
//     'http://localhost:3003/api/todos'

export const change = (description) => ({
    type: 'DESCRIPTION_CHANGE',
    payload: description
})

export const clear = () =>({
    type: 'CLEAR',
    payload: ''
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
    // axios({
    //     method: 'POST',
    //     url: 'http://localhost:3003/api/todos',
    //     data: {
    //         description: description           
    //     }
    // });   
    console.log(description) 
    const request = axios.post(URL, { description })
    return {
        type: 'ADD_DESCRIPTION',
        payload: request
    }
}