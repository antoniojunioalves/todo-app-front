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
        case 'ADD_TASK':
            return{
                description: [ ...state, description: action.payload]
            }
        case 'DESCRIPTION_CHANGE':
            return{
                description: [ ...state, description: action.payload]
            }
        default:
            return state
    }
}

export default rootReducer