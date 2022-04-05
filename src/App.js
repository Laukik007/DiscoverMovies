import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import SimpleBottomNavigation from "./Components/MainNav";
import './App.css'
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from '@material-ui/core';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='app'>
        <Container>
          <Routes>
          <Route path="/" element={<Trending/>} exact />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/series" element={<Series/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
