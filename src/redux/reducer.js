import { ADD_MOVIE , ADD_SUGGESTIONS , ADD_SELECTED_MOVIE ,RESET_SELECTED_MOVIE , SET_LOADING , SET_ERROR , SET_SUCCESS } from "./actionType";

const init = {movies : [{name:'avenger'}] , suggestions :[] ,selectedMovie :null , loading : false , error :null }

export const movieReducer = (state = init, {type,payload}) =>{
    switch(type){
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies,payload]
            }
        case ADD_SUGGESTIONS:
            return {
                ...state,
                suggesters: [payload]
            }
        case ADD_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie : payload
            }
        case RESET_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie : payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true,
                error : false
            }
        case SET_SUCCESS:
            return {
                ...state,
                loading: false,
                error : false
            }
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error : true
            }
        default:
            return state;
    }
}