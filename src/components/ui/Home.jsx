import React from 'react'
import { Button } from './button'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Main container with background image */}
      <div className="relative min-h-screen flex flex-row overflow-hidden">
        
        {/* Left Section (Buttons) */}
        <div className="w-1/2 flex flex-col justify-center items-start px-12 py-16">
          <h1 className="text-9xl font-extrabold text-[#10375C] mb-8">Go<span className='text-[#7AB2D3]'>daam</span></h1>
          
          {/* Button Container */}
          <div className="flex flex-col space-y-8 mt-10">
            <Link to='/signup'>
              <Button className="bg-yellow-500 text-blue-800 text-lg hover:bg-yellow-400 px-8 py-4 rounded-full shadow-lg transform transition duration-300 hover:scale-105 h-14 w-36">
                Sign Up
              </Button>
            </Link>
            <Link to='/login'>
              <Button className="bg-blue-500 text-white text-lg hover:bg-blue-400 px-8 py-4 rounded-full shadow-lg transform transition duration-300 hover:scale-105 h-14 w-36">
                Login
              </Button>
            </Link>
            <p className="text-black text-[30px] text-center">The simplest way to <span className='font-bold text-[40px] text-blue-400'>organize and <br></br></span><span className='text-yellow-500 text-[40px] font-bold'>manage</span> your tasks. Get started today!</p>
          </div>
          
          
        </div>
        
        {/* Right Section (Image) */}
        <div className="w-2/3 bg-cover bg-center" 
             style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/inventory_203633-729.jpg')" }}>
          {/* The image covers the entire right section */}
        </div>
        
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent py-6"></div>

      {/* Overlay section for extra info */}
      
    </>
  )
}

export default Home
