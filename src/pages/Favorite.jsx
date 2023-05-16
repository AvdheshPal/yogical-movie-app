import React, { useEffect, useState } from 'react';
import { Title, Main , Home } from './Details';
import styled from 'styled-components';
import {useDispatch , useSelector} from 'react-redux';
import {addSelectedMovie, removeFromFavorites, updateFavorites} from '../redux/action'
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


const Button = styled(Link)`
  padding: 8px;
  width: max-content;
  margin: 5px;
  background-color: #121315;
  border:1px solid;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #2F3133;
  }
`;

const ResultBox = styled.div`
  width: 100%;
`;

const MovieBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #2F3133;
  margin: 20px;
  width: calc(100% - 20px);
`;

const MovieImage = styled.img`
  width: 150px;
  height: 200px;
  margin-right: 20px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MovieTitle = styled.h2`
  margin: 0;
`;

const MovieYear = styled.p`
  margin: 0;
`;

const MovieGenres = styled.p`
  margin: 0;
`;

export const Favorite = () => {
  const dispatch = useDispatch();
  const {favoriteMovie} = useSelector(state => state);


  return (
    <>
      <Title>
        <Home to={'/'} >Home</Home>
        <h1>Favorite Movies</h1>
        <div></div>
      </Title>
      <Main>
        <Container>
          <ResultBox>
            {favoriteMovie?.map(movie => (
              <MovieBox key={movie.id}>
                <MovieImage src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <MovieInfo>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieYear>{movie.release_date}</MovieYear>
                    <MovieGenres>{movie.genre}</MovieGenres>
                  <Button onClick={()=>{
                    dispatch(addSelectedMovie(movie))
                    }} to={'/details'} >Details</Button>
                  <Button onClick={()=>{
                    dispatch(removeFromFavorites(movie.id))
                    // dispatch(updateFavorites())
                    }} > Remove </Button>
                </MovieInfo>
              </MovieBox>
            ))}
          </ResultBox>
        </Container>
      </Main>
    </>
  );
};
