"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import { GetPopularMovies, SearchMovies } from "./lib/api";

const Home = ()=> {
  const[query, setQuery] = useState("");
  const[movies, setMovies] = useState([]);
  const[loading, setLoading] = useState(false);
  const[error, setError]= useState(null);
  const [favorites, setFavorites]= useState([]);

  useEffect(()=>{
    const saved= localStorage.getItem("favorites");
    if(saved){
      setFavorites(JSON.parse(saved));
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites]);

  const handleFavorite= (movie)=> {
    setFavorites((prev)=>{
      if (prev.some((fav)=> fav.id === movie.id)){
        return prev.filter((fav)=> fav.id !== movie.id);
      } else{
        return[...prev, movie];
      }
    } );
  };

  useEffect(()=>{
    const fetchPopular = async()=>{
      try{
        setLoading(true);
        const popular = await GetPopularMovies();
        setMovies(popular);
      }
      catch(err){
        setError("Failed to fetch movies, try again.")
      }
      finally{
        setLoading(false);
      }
    }
    fetchPopular()
  },[]);

  const handleSearch= async (e)=>{
    e.preventDefault();
   console.log("searched and submitted");

   try{
    setLoading(true);
    const results= await SearchMovies(query);
    setMovies(results);
   }
   catch(err){
    setError("failed to search for requested movie, try a different movie instead.")
   }
   finally{
    setLoading(false)
   }
  }
  
  

  return(
    <main className="p-6 flex-row">
      <h1 className="text-4xl caret-blue-700" >MovieFlix </h1>
      <form
      onSubmit={handleSearch}>
        <input 
        type="text"
        value={query}
        onChange={(e)=> setQuery(e.target.value)} 
        placeholder="Search movies here" ></input>
        <button
        type="submit"
        > Search </button>
      </form>
      {loading && <p>Loading movies...</p> }
      {error && <p className="text-red-600">{error}</p> }
      {
        !loading && !error && movies.length === 0 && (
        <p> No movies yet, try searching instead.</p>)
      }
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {movies.map((movie)=>(
          <MovieCard key={movie.id} movie={movie} ></MovieCard>
        ))}
      </div>
    </main>
  )
}

export default Home