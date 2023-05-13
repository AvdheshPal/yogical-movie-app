import React, { useEffect, useState } from 'react'
import { SearchBox } from '../components/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovie, addSelectedMovie } from '../redux/action'
import Loading from '../components/Loading'
import MovieCard from '../components/MovieCard'
import styled from 'styled-components';
import bgimage from "../images/bgimage.jpg";


const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 50px;
padding: 50px;
background-image: url(${bgimage});
background-repeat: repeat;
@media screen and (max-width: 1200px) {
 grid-template-columns: repeat(3, 1fr);
}

@media screen and (max-width: 900px) {
 grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 600px) {
 grid-template-columns: 1fr;
}
`;


export const Movie = () => {
  const dispatch = useDispatch();

  const { movies, error, loading, total_pages } = useSelector(state => state);

  const [page, setPage] = useState(1);

  const fetchMovieFn = () => {
    dispatch(fetchMovie(`https://api.themoviedb.org/3/trending/movie/day?api_key=92e277f3d43843a85558cb25e1aa78d2&page=${page}`))
    setPage((p) => {
      if (p == total_pages) {
        return p;
      } else {
        return p + 1
      }
    })
  }

  useEffect(() => {
    fetchMovieFn();
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [movies])

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchMovieFn()
    }
  }

  return (<>
    <SearchBox />

      
    <Container >
      {movies.map((obj) => {
        return <MovieCard movie={obj} path={'/details'} />
      })}

      {loading ? <div><Loading /></div> : error ? <div>error in fetchin the data</div> : null}
    </Container>
  </>)
}
