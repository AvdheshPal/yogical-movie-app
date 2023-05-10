import { ADD_MOVIE } from "./actionType";

export const addMovie =(data)=>{
    return ({
        type: ADD_MOVIE,
        payload : data
    })
}

export const getData = (url)=>(dispatch)=>{
    fetch(url).then((req)=>req.json()).then((data)=>dispatch(addMovie(data)))
    .catch((e)=>{console.log(e);})
}