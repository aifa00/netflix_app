import "./Banner.css";
import axios from "../../axios";
import { useEffect, useState } from "react";

function Banner() {
  const [movie, setMovie] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY;
  const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/trending/all/day?language=en-US&api_key=${API_KEY}`
        );
        const results = response.data.results;
        const randomIndex = Math.floor(Math.random() * results.length);
        setMovie(results[randomIndex]);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${IMAGE_URL + movie.backdrop_path})` }}
      className="banner"
    >
      <div className="contents">
        <h1 className="title">{movie.title || movie.name}</h1>
        <div className="banner_buttons">
          <button className="button">
            {" "}
            <i className="fa-solid fa-play" /> Play
          </button>
          <button className="button">
            {" "}
            <i className="fa-solid fa-plus" /> My List
          </button>
        </div>
        <p className="description">{movie.overview}</p>
      </div>

      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
