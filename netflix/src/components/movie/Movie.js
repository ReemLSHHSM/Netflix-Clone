import  { useState } from "react";
import "./Movie.css"; 
import ModalMovie from "../modalmovie/ModalMovie";


function Movie(props) {
  const { title, path,movie } = props;
  //console.log(title)
 
  const src = `https://image.tmdb.org/t/p/w500${path}`;
  console.log(src);
  const [isClicked, setIsClicked] = useState({});
  const [show, setShow] = useState(false);

  const showall = () => {
    setIsClicked(!isClicked);
  };

  //console.log(movie)
  const handleClose = () => setShow(false);

  const handleShow = (movie) => {
    setShow(true);
    setIsClicked(movie);
    
  };

  return (
    <div className="movie-card">
      <img className="movie-image" src={src} alt={title} />
      <div className="movie-details">
      
          <button onClick={() => handleShow(movie)}>
            Add to favorite <span style={{ color: "red" }}>&hearts;</span>
          </button>
      
      </div>
  
      <ModalMovie
        show={show}
        handleClose={handleClose}
        isClicked={isClicked}
        src={src}
        movie={movie}
      />
    </div>
  );
}

export default Movie;

