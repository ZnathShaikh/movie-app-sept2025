"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";
import { GetPopularMovies, SearchMovies } from "./lib/api";

const Home = ()=> {
  const[query, setQuery] = useState("");
  const[movies, setMovies] = useState([]);
  const[loading, setLoading] = useState(false);
  const[error, setError]= useState(null);

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
    setQuery(results);
   }
   catch(err){
    setError("failed to search for requested movie, try a different movie instead.")
   }
   finally{
    setLoading(false)
   }
  }



  return(
    <main className="p-6">
      <h1 className="text-4xl caret-blue-700 " >MovieFlix </h1>
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
      <div>
        <p> No movies yet. Try searching.</p>
      </div>
    </main>
  )
}

export default Home