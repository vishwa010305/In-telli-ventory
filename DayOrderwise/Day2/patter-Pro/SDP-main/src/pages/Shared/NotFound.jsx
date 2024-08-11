import React from 'react'
import { Link } from 'react-router-dom'
import Meteors from '@/components/magicui/meteors'
import LetterPullup from '@/components/magicui/letter-pullup'

const NotFound = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-blue-500 font-sans text-white">
      {/* Meteors Component */}
      <Meteors number={30} />

      {/* Cuboid */}
      <div className="absolute transform rotate-x-12 rotate-45 perspective-1000">
        <div className="relative w-64 h-64 bg-gradient-to-r from-blue-800 to-blue-600 shadow-inner">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-800 to-blue-700 transform rotate-y-180 translate-z-[-1rem]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 transform rotate-x-90 translate-z-[-1rem]"></div>
        </div>
      </div>

      {/* Oops Section */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-7xl text-white drop-shadow-2xl rotate-x-12">
          <LetterPullup words={"OOPS!"} delay={0.05} />
        </h2>
        <p className="text-3xl mt-4 text-white drop-shadow-2xl rotate-x-12">
          We can't find the page that you're looking for :(
        </p>
      </div>

      {/* Center Line with 4s and Button */}
      <div className="absolute bottom-8 flex flex-col items-center justify-center">
        {/* Hole */}
        <div className="relative w-28 h-20 bg-gradient-to-r from-blue-500 via-blue-800 to-blue-900 rounded-full shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent rounded-full shadow-md"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent rounded-full"></div>
        </div>

        {/* 4s */}
        <div className="absolute text-9xl font-bold text-blue-400 drop-shadow-lg transform rotate-12">4</div>
        <div className="absolute text-9xl font-bold text-blue-400 drop-shadow-lg transform rotate-12 translate-x-32">4</div>

        {/* Button */}
        <div className="absolute mt-12">
          <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 transform translate-y-1 transition-all duration-300">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
