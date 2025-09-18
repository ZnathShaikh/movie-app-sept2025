"use client";

import { useState } from "react";

const Home = ()=> {
  const[query, setQuery] = useState("");

  const handleSearch= (e)=>{
   console.log("searched and submitted")
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