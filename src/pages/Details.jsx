import React from 'react'
import { useDispatch , useSelector } from 'react-redux'

export const Details = () => {
  const dispatch = useDispatch();
  const {selectedMovie} = useSelector(state => state)
  return (<>
    <h1>Details</h1>
    <h1>{JSON.stringify(selectedMovie)}</h1>
    </>)
}
