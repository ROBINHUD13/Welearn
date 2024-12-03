import React from 'react'
import { Link } from 'react-router-dom'
import {  SignInButton, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  return (
    <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
  <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
    {/* Logo Section */}
    <a href="#"
      className="mr-4 cursor-pointer py-1.5 text-base text-slate-800 font-semibold flex items-center gap-x-2">
      <img src="/asset/avatar.png" className="h-8 w-auto" />
      WeLearn
    </a>
    
    <div className="hidden lg:block">
      <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <Link to="/" className="flex items-center">Home</Link>
        </li>
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        <Link to="/course" className="flex items-center">Courses</Link>
        </li>
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        <Link to="/article" className="flex items-center">Articles</Link>
        </li>
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
        <Link to="/support" className="flex items-center">Support</Link>
        </li>
        {/* Sign Up Button */}
        <li>
          <a href="#signup" 
            className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">
         {isSignedIn ? (
           <UserButton/>
          ) : (
        <SignInButton/>
      )}
          </a>
        </li>
      </ul>
    </div>
    <button
      className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
  </div>
</nav>

  )
}

export default Navbar
