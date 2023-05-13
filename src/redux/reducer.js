import { ADD_MOVIE , ADD_SUGGESTIONS , RESET_SUGGESTIONS , ADD_SELECTED_MOVIE ,RESET_SELECTED_MOVIE , SET_LOADING , SET_ERROR , SET_SUCCESS , ADD_SEARCH_MOVIE , RESET_SEARCH_MOVIE , SET_TOTAL_PAGES} from "./actionType";

const init = {movies : [] , suggestions :[] , searchMovies : [] ,selectedMovie :null , loading : false , error :null , total_pages : null}

export const movieReducer = (state = init, {type,payload}) =>{
    switch(type){
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies,...payload]
            }
        case ADD_SUGGESTIONS:
            return {
                ...state,
                suggestions: [...payload]
            }
        case RESET_SUGGESTIONS:
            return{
                ...state,
                suggestions: []
            }
        case ADD_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie : payload
            }
        case RESET_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie : []
            }
        case ADD_SEARCH_MOVIE:
            return {
                ...state,
                searchMovies : [...payload]
            }
        case RESET_SEARCH_MOVIE:
            return {
                ...state,
                searchMovies : []
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true,
                error : null
            }
        case SET_SUCCESS:
            return {
                ...state,
                loading: false,
                error : null
            }
        case SET_ERROR:
            return {
                ...state,
                loading: false,
                error : payload
            }
        case SET_TOTAL_PAGES:
            return {
                ...state,
                total_pages : payload
            }
        default:
            return state;
    }
}