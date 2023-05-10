import { ADD_MOVIE , ADD_SUGGESTIONS , ADD_SELECTED_MOVIE ,RESET_SELECTED_MOVIE , SET_LOADING , SET_ERROR , SET_SUCCESS } from "./actionType";

export const addMovie =(data)=>{
    return ({
        type: ADD_MOVIE,
        payload : data
    })
}

export const addSuggestions =(data)=>{
    return ({
        type: ADD_SUGGESTIONS,
        payload : data
    })
}

export const addSelectedMovie =(data)=>{
    return ({
        type:ADD_SELECTED_MOVIE,
        payload : data
    })
}

export const resetSelectedMovie =()=>{
    return ({
        type : RESET_SELECTED_MOVIE,
        payload : null
    })
}

export const setLoading = ()=>{
    return ({
        type : SET_LOADING,
    })
}

export const setSuccess = ()=>{
    return ({
        type : SET_SUCCESS,
    })
}

export const setError = ()=>{
    return ({
        type : SET_ERROR,
    })
}

export const fetchMovie = (url)=>(dispatch)=>{
    fetch(url).then((req)=>req.json()).then((data)=>dispatch(addMovie(data)))
    .catch((e)=>{console.log(e);})
}