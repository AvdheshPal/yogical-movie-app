import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addSelectedMovie } from '../redux/action';
import { useDispatch } from 'react-redux';

const CardContainer = styled(Link).attrs((props) =>({
  style: {
    backgroundImage: `url(${props.url})`,
    backgroundSize: 'cover'
  }
}))`
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(252, 249, 249, 0.2);
  width: 100%;
  height: 400px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;


const Title = styled.h2`
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: clip;
  background-color: rgba(223, 218, 218, 0.5);
`;

const MovieCard = ({ movie , path }) => {

  const dispatch = useDispatch();
    const { poster_path, title } = movie;

    let poster_url = "https://image.tmdb.org/t/p/original"

    return (
        <CardContainer onClick={()=>dispatch(addSelectedMovie(movie))} to={path} url={poster_url + poster_path} >
                <Title>{title}</Title>
        </CardContainer>
    );
};

export default MovieCard;
