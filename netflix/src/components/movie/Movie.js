import React, { useState } from "react";
import "./Movie.css";
import ModalMovie from "../modalmovie/ModalMovie";
import FavList from "../favlist/FavList";

function Movie(props) {
  const { title, path, movie, favorites } = props;

  const src = `https://image.tmdb.org/t/p/w500${path}`;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="movie-card">
      <img className="movie-image" src={src} alt={title} />
      <div className="movie-details">
        <button onClick={handleShow}>
          Add to favorite <span style={{ color: "red" }}>&hearts;</span>
        </button>
      </div>
      <ModalMovie
        show={show}
        handleClose={handleClose}
        src={src}
        movie={movie}
      />
      <FavList favorites={favorites} />
    </div>
  );
}

export default Movie;
















 // const [trendingArr,setTrensingArr]=useState([]);
 /*  const getTrendingMovies=async ()=>{
          const serverUrl='https://render-host-ih2q.onrender.com/trending';
          const response=await fetch(serverUrl);
          const jsonData=await response.json();
         //console.log(jsonData);
          setTrensingArr(jsonData);
  }

  useEffect(()=>{
     getTrendingMovies();
  },[]);*/

  