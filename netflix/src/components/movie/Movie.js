import "./Movie.css"; // Import the CSS file for Movie component styling
import ModalMovie from "../modalmovie/ModalMovie";

function Movie(props) {
  const { title, path, overview } = props;
  const src = `https://image.tmdb.org/t/p/w500${path}`;
  return (
    <div className="movie-card"> {/* Apply movie-card class */}
      <img className="movie-image" src={src} alt={title} />
      <div className="movie-details"> {/* Container for title and overview */}
        <h4>{title}</h4>
        <p>{overview}</p>
        <button>Add to favorite <span style={{color:'red'}}>&hearts;</span></button>

      </div>
      <ModalMovie />
    </div>
  );
}

export default Movie;
