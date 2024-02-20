import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_COVER } from './utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className='fixed -z-20'>
      <img
          className="bg-cover"
          src={BG_COVER}
          alt="not found"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch;
