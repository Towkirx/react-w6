import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate = useNavigate();

  return (
    <nav className="flex items-center p-3 justify-between text-white z-10">
      <h1
        className="text-4xl font-bold p-6"
        style={{ fontFamily: 'montserrat, sans-serif' }} 
      >
        Watch Movies
      </h1>
      <div>
      </div>
    </nav>
  );
}

export default Navbar;
