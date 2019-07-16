import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'
// const URL = process.env = 'prod' ?  
//     'https://antonio-todo-api.herokuapp.com/api/todos':
//     'http://localhost:3003/api/todos'

export const changeDescription = (description) => ({
    type: 'DESCRIPTION_CHANGE',
    payload: description
})

export const buscarDados = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'BUSCAR_DADOS',
        payload: request
    }
}

export const addDescription = (description) => {
    // axios.post(URL, { description })
    //     .then((resp) => {console.log('adicionou')})
    console.log(description)
    axios({
        method: 'POST',
        url: 'http://localhost:3003/api/todos',
        data: {
            description: description           
        }
    });        
    return {
        type: 'ADD_DESCRIPTION',
        payload: 1
    }
}