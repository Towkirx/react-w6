import React from 'react';

const Detail = ({ selected, close }) => {
  return (
    <div className='d-flex align-items-center justify-content-center min-vh-100'>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 text-center'>
            <img src={selected.Poster} alt={selected.Title} className='img-fluid' />
          </div>
          <div className='col-12 col-md-6 text-white'>
            <h2>{selected.Title}</h2>
            <p><strong>Year:</strong> {selected.Year}</p>
            <p><strong>Rating:</strong> {selected.imdbRating}</p>
            <p><strong>Released:</strong> {selected.Released}</p>
            <p><strong>Genre:</strong> {selected.Genre}</p>
            <p><strong>Writer:</strong> {selected.Writer}</p>
            <p><strong>Actors:</strong> {selected.Actors}</p>
            <p><strong>Plot:</strong> {selected.Plot}</p>
            <p><strong>Language:</strong> {selected.Language}</p>
            <p><strong>Awards:</strong> {selected.Awards}</p>
            <button onClick={close} className='btn btn-danger'>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
