import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import bgimage from "../images/bgimage.jpg";

export const Title = styled.h1`
  background-color: #2f3133;
  height: 55px;
  padding: 0; margin: 0;
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

export const Details = () => {

  const { selectedMovie } = useSelector(state => state)
  let poster_url = "https://image.tmdb.org/t/p/original" + selectedMovie?.poster_path;

  return (<>
  <Main>
    <Title>The Movie App</Title>

    {selectedMovie != null ?  <Container>
      <PosterContainer>
        <Poster src={poster_url} alt={`${'title'} Poster`} />
      </PosterContainer>
      <TableContainer>
        <Table>
          <tbody>
            <tbody>
              {Object.entries(selectedMovie)?.map(([key, value]) => {
                return <TableRow>
                  <TableHeader>{key}</TableHeader>
                  <TableCell>{value}</TableCell>
                </TableRow>
              })}
            </tbody>
          </tbody>
        </Table>
      </TableContainer>
     
    </Container> : <Error>No Movie Details Available Please go back and Select again</Error>}
    </Main>
  </>)
}


{/* <tbody>
  {Object.entries(selectedMovie)?.map(([key, value]) => {
    return <TableRow>
      <TableHeader>{key}</TableHeader>
      <TableCell>{value}</TableCell>
    </TableRow>
  })}
</tbody> */}