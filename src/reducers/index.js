import { combineReducers } from 'redux'

const initialState = {
    description: "Ler Livro 2",
    list: [{
        _id: 1,
        description: "Atividade 1",
        done: false
    }, {
        _id: 2,
        description: "Atividade 2",
        done: true
    }, {
        _id: 3,
        description: "Atividade 3",
        done: false
    }]
}

// const rootReducer = combineReducers({
//     todo: () => ({
//         description: "Ler Livro 2",
//         list: [{
//             _id: 1,
//             description: "Atividade 1",
//             done: false
//         }, {
//             _id: 2,
//             description: "Atividade 2",
//             done: true
//         }, {
//             _id: 3,
//             description: "Atividade 3",
//             done: false
//         }

//         ]

//     })
// })


const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'DESCRIPTION_CHANGE':
            return{
                ...state, 
                description: action.payload
            }
        case 'BUSCAR_DADOS':
            return{
                ...state,
                list: action.payload.data
            }
        case 'ADD_DESCRIPTION':
            return{
                ...state
            }
        default:
            return state
    }
}

export default rootReducer