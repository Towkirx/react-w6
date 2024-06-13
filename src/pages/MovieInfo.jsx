import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MovieInfo() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState("");
  let navigate = useNavigate();

  async function fetchMovieInformation() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=7c18c76&s=`
    );
    setMovieDetail(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovieInformation();
  }, [id]);

  return (
    <div className="text-white flex justify-center items-center min-h-screen">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] flex flex-wrap justify-center items-center mt-12 mb-12">
          <div className="flex w-full justify-center items-center flex-wrap">
          </div>
          <div className="flex w-full justify-center items-center flex-wrap">
            <figure className="w-full md:w-[50%] flex flex-col items-center justify-center">
              <img className="movie__box rounded" src={movieDetail.Poster} alt={movieDetail.Title} />
            </figure>
            <div className="w-full md:w-[50%] flex flex-col items-center text-center mt-8 md:mt-0">
              <h1 className="mb-24 text-4xl">{movieDetail.Title}</h1>
              <h2 className="mb-16 text-2xl">Summary</h2>
              <p className="w-[80%]">{movieDetail.Plot}</p>
              <p className="mt-4 text-lg">Rating: {movieDetail.imdbRating}</p>
              <p className="mt-2 text-lg">Genre: {movieDetail.Genre}</p>
              <p className="mt-14 text-sm">Starring: {movieDetail.Actors}</p>
              <p className="pt-8">Rated [{movieDetail.Rated}]</p>
              <div className="pt-8">
                <a href="/home">
                  <button className="btn">Return</button>
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default MovieInfo;
