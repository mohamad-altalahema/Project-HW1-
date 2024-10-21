import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='p-40 place-content-center grid grid-cols-2 gap-4'>
        <h1 className='text-4xl font-bold text-blue-900'> welcome to the react App</h1>
        <p className='mt-4 text-lg '> this is simple app with : (react router  ,  usestate  ,  usecontex  ,  useeffect and integrate tailwind css to style.)</p>
        <Link to="/search" className='mt-6 inline-block bg-green-400 text-white px-4 py-2 rounded hover:bg-green-700 '>
         Go to search
        </Link>

      
    </div>
  )
}

export default Home
