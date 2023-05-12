import React, { useEffect, useState } from 'react'
import { SearchBox } from '../components/Searchbox/SearchBox'
import {Link, json} from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import {fetchMovie, addSelectedMovie } from '../redux/action'

export const Movie = () => {
  const dispatch = useDispatch();

  const { movies , error , loading , total_pages} = useSelector(state => state);

  const [page,setPage] = useState(1);

  let posterUrl = "https://image.tmdb.org/t/p/original"

  let api_key = '92e277f3d43843a85558cb25e1aa78d2';

  let SearchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=92e277f3d43843a85558cb25e1aa78d2&query=Jack+Reacher'

  let trending_movies = 'https://api.themoviedb.org/3/trending/movie/day?api_key=92e277f3d43843a85558cb25e1aa78d2&page=1'

  const fetchMovieFn = ()=>{
    dispatch(fetchMovie(`https://api.themoviedb.org/3/trending/movie/day?api_key=92e277f3d43843a85558cb25e1aa78d2&page=${page}`))
    setPage((p)=>{
      if(p == total_pages){
        return p;
      }else{
        return p+1
      }
    })
  }

  useEffect(()=>{
    fetchMovieFn();
  },[])

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[movies])

  function handleScroll(){
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchMovieFn()
      }
  }

  return (<>
    <h1>Movie</h1>
    <SearchBox/>
    <button onClick={()=>dispatch(fetchMovie(`https://api.themoviedb.org/3/trending/movie/day?api_key=92e277f3d43843a85558cb25e1aa78d2&page=1`))} >Add more</button>

    <div id='container' >

      {movies.map((obj)=>{
        return <Link key={obj.id} to={'/details'} onClick={()=>dispatch(addSelectedMovie(obj))} >
          <div>{obj.media_type}</div>
          <div>{obj.original_title}</div>
          <img src={posterUrl+obj.poster_path} alt="" width={200} height={200} />
        </Link>
      })}

      {loading ? <div>...loading</div> : error ? <div>error in fetchin the data</div> : null}

    </div>
    </>)
}
