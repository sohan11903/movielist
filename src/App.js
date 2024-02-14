import React from 'react';
import {Route ,Routes } from 'react-router-dom';
import { Home } from './home';
import { Singlepage } from './Singlepage';
import { Error } from './Error';

function App (){
  return(
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='movie/:id' element={<Singlepage />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>  
    </>
  )

};
export default App;