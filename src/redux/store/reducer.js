import {ADD_CONTACT} from './createAction'

const reduce={
    data :[]
}

export function reducer(state=reduce,action){
    switch(action.type){
        case ADD_CONTACT:
            console.log('Hire');
            return{
                data: action.payLoad
            }
        default :
            return state
    }
}