import logo from './logo.svg';
import './App.css';
import {MoviePage} from './components/MoviePage/MoviePage';
import {Routes , Route} from 'react-router-dom'
import {SearchPage} from './components/SearchPage/SearchPage';
import {MovieDetailsPage} from './components/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MoviePage/>} ></Route>
        <Route path="/search" element={<SearchPage/>} ></Route>
        <Route path="/details" element={<MovieDetailsPage/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
