import {ADD_CONTACT} from './createAction'

export function AddContact(list){
    return{
        type : ADD_CONTACT,
        payLoad : list
    }
}

export function Add(){
    console.log('Hire');
    return dispatch=>{
        dispatch(AddContact(['AMir']))
    }
}