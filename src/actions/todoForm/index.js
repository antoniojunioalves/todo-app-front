import axios from 'axios'
import { urlApi } from '../index.js'

export const change = (description) => ({
    type: 'DESCRIPTION_CHANGE',
    payload: description
})

export const clear = () =>({
    type: 'CLEAR'
})

export const search = (description) => {
    const search = description ? `&description__regex=/${description}/` : ''
    const request = axios.get(`${urlApi}?sort=-createdAt${search}`)
    return {
        type: 'BUSCAR_DADOS',
        payload: request
    }
}

export const addTask = (description) => {
    const request = axios.post(urlApi, { description })
    return {
        type: 'ADD_DESCRIPTION',
        payload: request
    }
}
