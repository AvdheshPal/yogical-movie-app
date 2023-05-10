import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {addMovie} from '../../redux/action'

export const MoviePage = () => {

  const dispatch = useDispatch();

  const {movies} = useSelector(state => state)

  return (<>

    <h1>Movie Page</h1>
    <div>{JSON.stringify(movies)}</div>
    <button onClick={()=>dispatch(addMovie({name:'kaliya'}))} >add</button>
    </>)
}
