import axios from "axios"
import { GET_CONTACTS } from "./actionType"


export const getcontacts=()=>dispatch=>{
    axios.get("/contact-list").then(res=>
        dispatch({
            type:GET_CONTACTS,
            payload:res.data
        })
        )
}

export const addcontact=(newcontact)=>dispatch=>{
    axios.post("/contact-list",newcontact).then(res=>
        dispatch(getcontacts())
        )
}


export const deletecontact=(id)=>dispatch=>{
   axios.delete(`/contact-list/${id}`).then(res=>
    dispatch(getcontacts())
    )
       
}

export const editcontact=(id,newcontact)=>dispatch=>{
    axios.put(`/contact-list/${id}`,newcontact).then(res=>
        dispatch(getcontacts())
    )
}