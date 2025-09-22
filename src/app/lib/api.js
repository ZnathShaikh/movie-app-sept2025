const API_KEY= "24e041e82ad43c04f4c2221fa26bd112"
const BASE_URL = "https://api.themoviedb.org/3"

export const GetPopularMovies= async ()=>{
    const response = await fetch (`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results
}

export const SearchMovies= async(query)=>{
    const response= await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data= await response.json();
    return data.results
}
