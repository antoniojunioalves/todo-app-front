import axios from 'axios'

import { urlApi } from '../index'

export const change = (description) => ({
    type: 'DESCRIPTION_CHANGE',
    payload: description
})

export const clear = () =>({
    type: 'CLEAR'
})

const searchRequest = () => ({ type: 'GET_SEARCH_REQUEST' })
const searchSucess = (todos) => ({ type: 'GET_SEARCH_SUCESS', payload: todos })
const searchError = () => ({ type: 'GET_SEARCH_ERROR' })

export const search = (description) => (dispatch) => {
    dispatch(searchRequest())
    
    const search = description ? `&description__regex=/${description}/` : ''

    fetch(`${urlApi}?sort=-createdAt${search}`, {
        headers: {
          "Content-Type": 'application/json'
        },
        method: 'GET'
    })
    .then(response => {
        if(!response.ok)
            throw new Error()

        return response.json()
    })
    .then(response => {dispatch(searchSucess(response))})
    .catch(() => dispatch(searchError()))
}

const addTaskRequest = () => ({ type: 'ADD_TASK_REQUEST' })
const addTaskSucess = () => ({ type: 'ADD_TASK_SUCESS' })
const addTaskError = () => ({ type: 'ADD_TASK_ERROR' })

export const addTask = (description) => (dispatch) => {
    dispatch(addTaskRequest())

    fetch(urlApi, {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({ description })
    })
    .then(response => {
        console.log('ERRO ANTONIO ' + response)
        if (!response.ok)
            throw new Error()

        return response.json()
    })
    .then(response => {dispatch(search())})
    .catch((response) => console.log(response))
    // .catch(() => dispatch(addTaskError()))
}
