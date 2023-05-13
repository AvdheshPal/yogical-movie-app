import { ADD_MOVIE , ADD_SUGGESTIONS , RESET_SUGGESTIONS , ADD_SELECTED_MOVIE ,RESET_SELECTED_MOVIE , SET_LOADING , SET_ERROR , SET_SUCCESS , ADD_SEARCH_MOVIE , RESET_SEARCH_MOVIE , SET_TOTAL_PAGES } from "./actionType";

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

export const resetSuggestions =()=>{
    return ({
        type: RESET_SUGGESTIONS
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

export const addSearchMovie = (data) =>{
    return ({
        type : ADD_SEARCH_MOVIE,
        payload : data
    })
}

export const resetSearchMovie = () =>{
    return ({
        type : RESET_SEARCH_MOVIE,
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

export const setError = (error)=>{
    return ({
        type : SET_ERROR,
        payload:error
    })
}

export const setTotalPages =(data)=>{
    return ({
        type:SET_TOTAL_PAGES,
        payload:data
    })
}

export const fetchMovie = (url)=>(dispatch)=>{
    dispatch(setLoading())
    fetch(url).then((req)=>req.json()).then((data)=>{
        dispatch(setSuccess())
        dispatch(addMovie(data.results))
        dispatch(setTotalPages(data.total_pages))
    }
        )
    .catch((e)=>{dispatch(setError(e))})
}


export const fetchSuggestions = (url)=>(dispatch)=>{
    fetch(url).then((req)=>req.json()).then((data)=>{dispatch(addSuggestions(data.results))})
    .catch((e)=>{console.log(e);})
}

export const fetchSearch = (url)=>(dispatch)=>{
    fetch(url).then((req)=>req.json()).then((data)=>{dispatch(addSearchMovie(data.results))})
    .catch((e)=>{console.log(e);})
}