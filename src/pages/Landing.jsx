import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  function handleSearch() {
    fetchMovies(keyword);
    setLoading(true);
  }

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=7c18c76&s=${keyword}`
    );
    setMovies(data.Search);
    console.log(data);
    navigate("/home", { state: { movies: data.Search } });
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="row">
      <Navbar />
      <div className="flex mt-10 justify-center">
     
      </div>
      <div className="flex justify-center mt-24 text-white"></div>
      <div className="flex flex-col items-center justify-center pt-0">
        <div className="input__wrap bg-[#000] relative flex justify-center items-center w-full max-w-[900px]">
          <input
            onChange={(event) => setKeyword(event.target.value)}
            value={keyword}
            onKeyPress={(event) => event.key === "Enter" && handleSearch()}
            className="bg-white w-[100%] outline-none p-3"
            placeholder="Search Movie Title ..."
            type="text"
          />
          {loading ? (
            <div className="absolute spinner top-0 bottom-0 right-0 mr-302 bg-[#00000000] flex justify-center items-center">
              <img
                src="https://www.shutterstock.com/shutterstock/videos/1090948475/thumb/1.jpg?ip=x480"
                className="w-10 bg-black "
              />
            </div>
          ) : (
            <div
              onClick={() => handleSearch()}
            >
            </div>
          )}
        </div>
        <figure className="mt-0">
          <img
            className="w-70 h-85"
            src="https://wallpapers.com/images/hd/cinema-background-csjrmkuhfvvumb2q.jpg"
            alt=""
          />
        </figure>
      </div>
    </div>
  );
}

export default Landing;
