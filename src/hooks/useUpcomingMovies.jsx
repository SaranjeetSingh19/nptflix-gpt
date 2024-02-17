import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {API_OPTIONS} from "../components/utils/constants"
import { addUpcomingMovies } from "../components/utils/moviesSlice"; 

const useUpcomingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const upcomingMovies = useSelector(
    (store) => store.movies.upcomingMovies
  );

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // dispatch(addNowPlayingMovies(json.results));
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;