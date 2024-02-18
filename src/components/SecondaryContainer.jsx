import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "./utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);

  return (
    movies.nowPlayingMovies && (
      
      <div className="bg-black mt-40">
        <div className=" mt-0 md:-mt-40 pl-4 md:pl-12 z-20">
          <MovieList title={lang[langKey].nowPlayingTitle} movies={movies.nowPlayingMovies} />
          <MovieList title={lang[langKey].popularTitle} movies={movies.popularMovies} />
          <MovieList title={lang[langKey].upcomingTitle} movies={movies.upcomingMovies} />
          <MovieList title={lang[langKey].topRatedTitle} movies={movies.topRatedMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
