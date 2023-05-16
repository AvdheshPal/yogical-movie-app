import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import bgimage from "../images/bgimage.jpg";
import { Link } from "react-router-dom";
import { addToFavorites } from "../redux/action";
import { Button } from "./Search";

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2f3133;
  height: 45px;
  padding: 10px; margin: 0;
`
export const Main = styled.div`
width: 100%; min-height: 100vh;
background-image: url(${bgimage});
background-repeat: repeat;
`

const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: start;
justify-content: space-between;
margin: 20px;
padding: 20px;
border: 1px solid #ccc;
border-radius: 5px;
background-color: #2f3133;

@media (max-width: 768px) {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
`;

const TableContainer = styled.div`
flex-basis: calc(50% - 20px);
margin-left: 20px;
@media (max-width: 768px) {
  flex-basis: 100%;
  margin-left: 0;
  margin-bottom: 20px;
}
`;

const Table = styled.table`
width: 100%;
border-collapse: collapse;
margin-bottom: 20px;
table-layout: fixed;

`;

const TableRow = styled.tr`
&:nth-child(even) {
  background-color: #121315;
}
`;

const TableHeader = styled.th`
text-align: left;
padding: 10px;
width: 30%;
`;

const TableCell = styled.td`
text-align: left;
padding: 10px;
width: 70%;
word-break: break-word;
`;

const PosterContainer = styled.div`
flex-basis: 50%;
display: flex;
align-items: center;
justify-content: center;
height: calc(100%);
width: 100%;
@media (max-width: 768px) {
  flex-basis: 100%;
}
`;

const Poster = styled.img`
max-width: 100%;
max-height: 100%;
border-radius: 5px;
`;

const Error = styled.div`
height: 95vh;
`

export const Home = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
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

export const Details = () => {

  const dispatch = useDispatch();

  const { selectedMovie } = useSelector(state => state)
  let poster_url = "https://image.tmdb.org/t/p/original" + selectedMovie?.poster_path;

  return (<>
  <Main>
   
      <Title>
      <Home to={'/'} >Home</Home>
        <h1>The Movie App</h1>
        <Home to={'/favorite'} >Favorite</Home>
      </Title>

    {selectedMovie != null ?  <Container>
      <PosterContainer>
        <Poster src={poster_url} alt={`${'title'} Poster`} />
      </PosterContainer>
      <TableContainer>
        <Table>
            <tbody>
              <TableRow>
                  <TableHeader>Title</TableHeader>
                  <TableCell>{selectedMovie.title}</TableCell>
              </TableRow>
              <TableRow>
                  <TableHeader>Release Date</TableHeader>
                  <TableCell>{selectedMovie.release_date}</TableCell>
              </TableRow>
              <TableRow>
                  <TableHeader>Overview</TableHeader>
                  <TableCell>{selectedMovie.overview}</TableCell>
              </TableRow>
              <TableRow>
                  <TableHeader>Average Vote</TableHeader>
                  <TableCell>{selectedMovie.vote_average}</TableCell>
              </TableRow>
              <TableRow>
                  <TableHeader>Vote Count</TableHeader>
                  <TableCell>{selectedMovie.vote_count}</TableCell>
              </TableRow>
              <TableRow>
                  <TableHeader></TableHeader>
                  <TableCell></TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                <div style={{margin:'10px auto'}} >
                  <Button onClick={()=>dispatch(addToFavorites(selectedMovie))} >Add to Favorite</Button>
                </div>
                  </TableCell>
              </TableRow>
            </tbody>
        </Table>
      </TableContainer>
     
    </Container> : <Error>No Movie Details Available Please go back and Select again</Error>}
    </Main>
  </>)
}