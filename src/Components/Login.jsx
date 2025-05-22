import React from 'react'
import Header from './Header'
import { useState } from 'react';
import bgimage from '../assets/Images/netflixBG.jpg'

function Login() {
  const [isSignInForm , setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  
  return (
    <div >
      <Header/>
    <div className='absolute'>
      <img src={bgimage} alt='bg' 
      className='w-full h-full object-cover' />
    </div>

    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-50'>
      <h2 className='font-bold text-3xl py-4'>
      {isSignInForm ? "Sign In" : "Sign Up" }</h2>
       { !isSignInForm && <input type='text' 
      placeholder='enter name' 
      className='p-4 my-4 w-full bg-gray-700 '
      /> }
      
      <input type='text' 
      placeholder='enter email' 
      className='p-4 my-4 w-full bg-gray-700'
      />
      
      <input type='password' 
      placeholder='enter password' 
      className='p-4 my-4 w-full bg-gray-700 '
      />

     <button 
      className='p-4 my-4 bg-red-700 rounded-lg w-full'
      >{isSignInForm ? "Login" : "Sign Up"}</button>
      
      <p className='p-4 cursor-pointer' 
      onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign up now" 
        : "Already a User ? Login" } </p>
    
    </form>
    
    </div>
  );
};

export default Login