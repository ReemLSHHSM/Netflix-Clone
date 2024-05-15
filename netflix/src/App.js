import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home.js'
import FavList from './components/favlist/FavList.js';
import Navbar from './components/navbar/Navbar.js'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
     <Route path="/FavList" element={<FavList/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
