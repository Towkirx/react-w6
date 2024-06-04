import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Search from './Search'

function App() {
  return (
    <div className='w-100 main-wrapper d-flex flex-column align-items-center
    justify-content-center'> 
    <header>
      <h2>Watch Movies</h2>
      <Search />
    </header>
    
    </div>
  )
}

export default App