import React from 'react'
import lang from './utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className='flex justify-center pt-36'>
        <form className=''>
            <input className='w-[40vw] pl-4 py-2 rounded-sm font-semibold border-2 border-gray-400 shadow-2xl outline-none' 
            type='text' placeholder={lang[langKey].gptSearchHolder} />
            <button className='bg-red-600 px-2 text-white hover:bg-red-700 transition ease-in duration-200 rounded-sm ml-1 py-2.5 font-semibold'>
              {lang[langKey].search} 🔍</button>
        </form>
    </div>
  )
}

export default GptSearchBar