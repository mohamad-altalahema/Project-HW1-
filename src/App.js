
import React from 'react';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
//import './App.css';

import Home from './components/Home';
import Search from './components/Search';
import Details from './components/Details';
import { Globalprovider } from './context/GlobalContext';
import { GlobalContext } from './context/GlobalContext';
//import { GlobalDataProvider } from './context/GlobalContext';


function App() {
  return (
    
    
    
    <Globalprovider>
      <Router>
       
        
          <div className='APP'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/search' element={<Search/>}/>
              <Route path='/details/:id' element={<Details/>}/>
            </Routes>

          </div>
        
      </Router>
    </Globalprovider>
    
   
  );
};

export default App;
