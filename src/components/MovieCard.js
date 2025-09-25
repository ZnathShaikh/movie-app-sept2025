
export default function MovieCard({movie}){
    return(
        <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
            <div className="p4">
            <div>{movie.title}</div>
            <div className="text-gray-600 text-sm text-align-centre"></div>
            {movie.release_date || "Unknown release date"}
            </div>
            <button 
            className="bg-pink-50 rounded-lg mt-3 flex items-center gap-2 text-pink-500 hover:text-pink-400 transition">
          <span></span>
          <span className="text-base" >Add to Favorites</span>
        </button>
        </div>
    )
}