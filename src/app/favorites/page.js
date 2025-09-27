"use client";

import { useFavorites } from "../lib/useFavt";
import MovieCard from "@/components/MovieCard";

export default function FavoritesPage(){
    const {favorites, handleFavorite}= useFavorites();
    return(
        <main className="p-6">
      <h1 className="text-4xl">My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={true} // all movies here are favorites
              onFavoriteToggle={handleFavorite}
            />
          ))}
        </div>
      )}
    </main>
    )
}