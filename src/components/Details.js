import React from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'

const Details = () => {
    const { globalData}= useContext(GlobalContext);
    const {id} = useParams();

    if (!globalData) return <p className='text-2xl font-semibold'>no details avaiable</p>
  return (
    <div className='p-6'>
        <h1 className='text-3xl font-bold mb-2 text-green-600'>Details -- Post</h1>
        <h2 className='text-2xl font-semibold'>{globalData.title}</h2>
        <p className='mt-2'>{globalData.body}</p>     
    </div>
  )
}

export default Details
