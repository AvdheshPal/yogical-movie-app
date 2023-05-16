import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchSuggestions, addSelectedMovie } from '../redux/action'
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const SuggestionItem = styled(Link)`
display: flex;
align-items: center;
gap: 12px;
padding: 12px;
border-radius: 4px;
background-color: #121315;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
transition: box-shadow 0.3s ease-in-out;
text-decoration: none;

&:hover {
  text-decoration: underline;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  background-color : #2f3133;
}

@media (max-width: 768px) {
  width: 100%;
}
`;

const SuggestionImage = styled.img`
width: 45px;
height: 50px;
object-fit: cover;
`;

const SuggestionTitle = styled.span`
font-size: 16px;
font-weight: 500;
`;

const Button = styled(Link)`
padding: 7px;
background-color: #121315;
border-radius: 5px;
border: 1px solid;
margin: auto 10px;
cursor: pointer;
text-decoration: none;
&:hover{
  background-color: #2f3133;
}
`

export const SearchBox = () => {
  const dispatch = useDispatch();

  const { suggestions } = useSelector(state => state);

  const [text, setText] = useState('')

  const handleInput = (e) => {
    let { name, value } = e.target;
    value = value.replace(/\s+/g, '+')
    setText(value);
  }

  useEffect(() => {

    const debouncedInputHandler = setTimeout(() => {
      dispatch(fetchSuggestions(`https://api.themoviedb.org/3/search/movie?api_key=92e277f3d43843a85558cb25e1aa78d2&query=${text}`))
    }, 1000);

    return () => {
      clearTimeout(debouncedInputHandler);
    }

  }, [text])


  return <>
    <div id="navbar" >
      <div id="search" >
        <h5>Logo</h5>
        <div>
        <input type="text" name="text" placeholder="Search..." onChange={handleInput} autoComplete="off" /> 
        <div id="suggestion" >
        {suggestions.map((obj) => <SuggestionItem onClick={() => dispatch(addSelectedMovie(obj))} to={'/details'} >
          <SuggestionImage
            src={`https://image.tmdb.org/t/p/w200/${obj.poster_path}`}
            alt={obj.original_title}
          />
          <SuggestionTitle>{obj.original_title}</SuggestionTitle>
          </SuggestionItem>)}
        </div>
        </div>
        <Button to={'/search'} >Filter</Button>
        <Button to={'/favorite'} >Favorite</Button>
      </div>
    </div>
  </>;
};
