import logo from './logo.svg';
import './App.css';
import React, {lazy ,Suspense} from 'react';
import {Routes , Route} from 'react-router-dom'
import { Movie } from './pages/Movie';
import { Search } from './pages/Search';
import { Details } from './pages/Details';
import {Favorite} from './pages/Favorite'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Movie/>} ></Route>
        <Route path="/search" element={<Search/>} ></Route>
        <Route path="/details" element={<Details/>} ></Route>
        <Route path="/favorite" element={<Favorite/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
