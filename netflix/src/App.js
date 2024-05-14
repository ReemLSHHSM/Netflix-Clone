import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home.js'
//import ModalMovie from '/home/reem/Netflix-Clone/netflix/src/components/modalmovie/ModalMovie.js';
import Navbar from './components/navbar/Navbar.js'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
     {/*} <Route path="/MovieList" element={<MovieList/>}></Route>{*/}
      </Routes>
    </div>
  );
}

export default App;
