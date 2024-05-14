import { useEffect, useState } from "react";
import MovieList from "../movielist/MovieList";
import './Home.css'

function Home(){
    const [trendingArr,setTrensingArr]=useState([]);
     const getTrendingMovies=async ()=>{
            const serverUrl='https://render-host-ih2q.onrender.com/trending';
            const response=await fetch(serverUrl);
            const jsonData=await response.json();
           console.log(jsonData);
            setTrensingArr(jsonData);
    }

    useEffect(()=>{
       getTrendingMovies();
    },[]);
    return(
        
        <>
        
        <h1>Now Trending</h1>
        <MovieList trendingData={trendingArr}/>
        </>
    )
}

export default Home;