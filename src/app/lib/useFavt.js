import { useState, useEffect } from "react";

export function useFavorites() {
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

  };     return { favorites, handleFavorite };
}
