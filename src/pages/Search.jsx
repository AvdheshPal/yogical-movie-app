import React, { useState } from 'react';
import { Title, Main , Home } from './Details';
import styled from 'styled-components';
import {useDispatch , useSelector} from 'react-redux';
import {addSelectedMovie, addToFavorites, fetchSearch} from '../redux/action'
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 100px;
  background-color: #2f3133;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #121315;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Button = styled(Link)`
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
  width: calc(100% -20px);
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

export const Search = () => {
  const dispatch = useDispatch();
  const {searchMovies} = useSelector(state => state)
  const [year, setYear] = useState('');
  const [genres, setGenres] = useState('');
  const [title, setTitle] = useState('');

  const handleSearch = () => {
    dispatch(fetchSearch(`https://api.themoviedb.org/3/search/movie?api_key=92e277f3d43843a85558cb25e1aa78d2&year=${year}&with_genres=${genres}&query=${title}`))
  };

  return (
    <>
      <Title><Home to={'/'} >Home</Home><h1>Filter The Movies</h1> <Home to={'/favorite'} >Favorite</Home></Title>
      <Main>
        <Container>
          <SearchBox>
            <Input type="text" placeholder="Year" value={year} onChange={e => setYear(e.target.value)} />
            <Input type="text" placeholder="Genere" value={genres} onChange={e => setGenres(e.target.value)} />
            <Input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <Button onClick={handleSearch} style={{marginBottom:'12.5px' , padding:'6.5px'}} >filter</Button>
          </SearchBox>
          <ResultBox>
            {searchMovies?.map(movie => (
              <MovieBox key={movie.id}>
                <MovieImage src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <MovieInfo>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieYear>{movie.release_date}</MovieYear>
                    <MovieGenres>{movie.genre}</MovieGenres>
                  <Button onClick={()=>dispatch(addSelectedMovie(movie))} to={'/details'} >Details</Button>
                  <Button onClick={()=>dispatch(addToFavorites(movie))} >Add to Favorites</Button>
                </MovieInfo>
              </MovieBox>
            ))}
          </ResultBox>
        </Container>
      </Main>
    </>
  );
};
