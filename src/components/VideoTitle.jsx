import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute bg-gradient-to-r text-white from-slate-950 opacity w-screen h-screen'>

      <div className='pt-56 pl-10'>
      <h1 className='text-4xl ml-4 font-semibold mb-6' >{title}</h1>
      <h1 className='text-base ml-4 w-96 mb-8 leading-5'>{overview}</h1>
      </div>

      <div className='ml-10 mt-6'>
        <button className='bg-white px-6 py-1 rounded-sm text-lg font-bold text-center mr-6 ml-4 text-black hover:bg-slate-300'> ▶ Play </button>
        <button className='bg-white px-6 py-1 rounded-sm text-lg bg-opacity-35 text-white hover:bg-opacity-25 font-bold text-center mr-6'><span className='text-xl mr-2'>ⓘ  </span>   More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
