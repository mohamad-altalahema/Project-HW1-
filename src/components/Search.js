import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Await, Link } from 'react-router-dom';
import { Input } from 'postcss';
import { GlobalDataProvider } from '../context/GlobalContext';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState(' ');
    const [results, setResults] = useState([]);
    const {setglobalData} = useContext(GlobalContext);
    const inputref = useRef(null);
    const handleSearch = async () =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await response.json();
        setResults(data);

    };
    useEffect(() =>{
        inputref.current.focus();
    },[])
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold md-4'>search -- posts</h1>
      <input
      ref={inputref}
      type='text'
      value={searchTerm}
      onChange={(e) =>setSearchTerm(e.target.value)}
      placeholder='Enter search term...'
      className='border border-gray-300 p-2 rounded w-full'
      />
      <button 
      onClick={handleSearch}
      className='mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
      >
        search

      </button>
      <ul className='mt-4'>
      {results.slice(0,15).map((item) => (
        <li key={item.id} className='my-2'
        >
            <Link to={`/details/${item.id}`}
            onClick={() => setglobalData(item)}
            className='text-blue-600 hover:underline'>
                {item.title}
                </Link>

        </li>
      ))}

      </ul>
    </div>
  )
}

export default Search
