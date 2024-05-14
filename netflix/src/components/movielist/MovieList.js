import Movie from '../movie/Movie.js'

function MovieList(props) {
    const trends = props.trendingData;
    // console.log(props);
    return (
        <>
            <div className="card">
                {trends.map(movie => (
                    <Movie key={movie.id} path={movie.poster_path} title={movie.title} overview={movie.overview} />
                ))}
            </div>
        </>
    );
}

export default MovieList;
