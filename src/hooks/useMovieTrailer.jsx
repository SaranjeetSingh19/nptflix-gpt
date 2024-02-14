import { useEffect, useState } from "react";
import { API_OPTIONS } from "../components/utils/constants";

const useMovieTrailer = () => {
  const [trailerId, setTrailerId] = useState(null);

  const getMovieTrailer = async () => {
    
    //Fetching movie trailer
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/933131/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    
    const trailer = json.results.filter((videos) => videos?.type === "Trailer");
    setTrailerId(trailer?.key);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);

  return trailerId;
};

export default useMovieTrailer;
