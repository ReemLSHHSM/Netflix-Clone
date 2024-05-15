import  { useState } from "react";
import "./Movie.css"; 
import ModalMovie from "../modalmovie/ModalMovie";


function Movie(props) {
  const { title, path, overview } = props;
  //console.log(title)
  const src = `https://image.tmdb.org/t/p/w500${path}`;

  const [isClicked, setIsClicked] = useState(false);

  const showall = () => {
    setIsClicked(!isClicked); 
  };
  
  return (
    <div className="movie-card"> 
      <img className="movie-image" src={src} alt={title} />
      <div className="movie-details"> 
        <button onClick={showall}>Add to favorite <span style={{color:'red'}}>&hearts;</span></button>
      </div>
      <ModalMovie isClicked={isClicked} title={title} overview={overview} />

    </div>
  );
}


export default Movie;

