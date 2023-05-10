import {ADD_MOVIE} from './actionType'

const init = {movies : [{name:'avenger'}]}

export const movieReducer = (state = init, {type,payload}) =>{
    switch(type){
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies,payload]
            }
        default:
            return state;
    }
}