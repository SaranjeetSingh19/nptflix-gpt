import React, { useRef } from "react";
import lang from "./utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "./utils/openai";
import { API_OPTIONS } from "./utils/constants";
import { addGptMovieResult } from "./utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const gptInputBox = useRef(null);

  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results
  };

  const handleGptSearch = async () => {
    console.log(gptInputBox.current.value);

    const gptQuery =
      "Act as a movie reccomendation system and suggest me movies on this query:" +
      gptInputBox.current.value +
      ". Keep in mind that only suggest 5 movies and perform comma serperated too between movies , let me give you example that how i want you to suggest. Example: Don, Golmaal, Phir hera pheri, Dhol, Housefull";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      <h1>Gpt search failed</h1>;
    }

    const gptMovies = gptResults.choices?.[0].message?.content.split(", ");

    console.log(gptResults.choices?.[0].message.content);

   const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
   // [promise, promise, promise, promise, promise]

  const tmdbResults = await Promise.all(promiseArray);
  console.log(tmdbResults);

  dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
  };

  return (
    <div className="flex justify-center pt-36">
      <form className="" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={gptInputBox}
          className="w-[40vw] pl-4 py-2 rounded-sm font-semibold border-2 border-gray-400 shadow-2xl outline-none"
          type="text"
          placeholder={lang[langKey].gptSearchHolder}
        />
        <button
          onClick={handleGptSearch}
          className="bg-red-600 px-2 text-white hover:bg-red-700 transition ease-in duration-200 rounded-sm ml-1 py-2.5 font-semibold"
        >
          {lang[langKey].search} 🔍
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
