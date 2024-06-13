import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const location = useLocation();
  const initialMovies = location.state?.movies || [];
  const [movies, setMovies] = useState(initialMovies);
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();

  function handleSearch() {
    fetchMovies(keyword);
  }

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=7c18c76&s=${keyword}`
    );
    setMovies(data.Search);
    console.log(data);
  }

  useEffect(() => {
    setMovies(location.state?.movies || []);
  }, [location.state]);

  const filterMovies = (event) => {
    const filter = event.target.value;
    let sortedMovies = [...movies];

    if (filter === "OLD_TO_NEW") {
      sortedMovies.sort((a, b) => new Date(a.Year) - new Date(b.Year));
    } else if (filter === "NEW_TO_OLD") {
      sortedMovies.sort((a, b) => new Date(b.Year) - new Date(a.Year));
    }

    setMovies(sortedMovies);
  };

  return (
    <div className="row">
      <Navbar />
      <div className="flex justify-center mt-24 text-white">
        <h1 className="home__header">Browse Movies</h1>
      </div>
      <div className="flex justify-center pt-8">
        <div className="input__wrap relative flex justify-center items-center w-full max-w-[900px]">
          <input
            onChange={(event) => setKeyword(event.target.value)}
            value={keyword}
            onKeyPress={(event) => event.key === "Enter" && handleSearch()}
            className="bg-white w-[100%] p-3"
            placeholder="Search For More Movies ..."
            type="text"
          />
          <div
            onClick={() => handleSearch()}
            className="absolute top-4 bottom-4 right-0 mr-[20%] bg-[#000] flex justify-center items-center"
          >
            {}
          </div>
        </div>
      </div>
      <div className="text-white flex justify-center pt-20">
        <h1 className="home__header"> Results </h1>
      </div>

      <div className="pt-20 text-white">
        <div className="filter__wrapper flex justify-end p-8">
          <select onChange={filterMovies} className="text bg-black border w-30">
            <option className="filter__option" selected>
              Sort
            </option>
            <option className="filter__option" value="NEW_TO_OLD">
              Newer to older
            </option>
            <option className="filter__option" value="OLD_TO_NEW">
              Older to newer
            </option>
          </select>
        </div>
        <div className="movies__container flex flex-wrap justify-center gap-8 p-8">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              onClick={() => navigate(`/${movie.imdbID}`)}
              className="movie__box flex flex-col items-center p-4 cursor-pointer"
            >
              <div className="poster__img--wrapper w-full aspect-w-1 aspect-h-1">
                <img
                  className="rounded object-cover w-full h-full"
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </div>
              <div className="text-center mt-4">
                <h1>{movie.Title}</h1>
                <p>({movie.Year})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
