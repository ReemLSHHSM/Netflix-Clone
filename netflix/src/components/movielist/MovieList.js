import Movie from '../movie/Movie.js'

function MovieList(props) {
    const trends = props.trendingData;
   
    return (
        <>
       
            <div className="card">
            {trends.map(movie => (
                <Movie key={movie.id} title={movie.title} path={movie.poster_path} overview={movie.overview} />
                
            ))}</div>
        </>
    );
}


                   


export default MovieList;