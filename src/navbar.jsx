import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar () {
 return (
    <> 
    <Link to="/about">About us</Link>     
    <Link to="/contact">Contact us</Link>
    </>
  )
}
