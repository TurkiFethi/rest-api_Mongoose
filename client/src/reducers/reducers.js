import { GET_CONTACTS } from "../action/actionType"


const initialState={
    contact:[]
}


export default function(state=initialState,action){
    switch(action.type){
        case GET_CONTACTS:
            return{
                ...state,
                contact:action.payload
            }
            default:
                return state
    }
}
