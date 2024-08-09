import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import api from "./services/AxiosConfig";
import Layout from "./component/Layout";
import { Route, Routes } from "react-router-dom";
import Body from "./component/bodyPage/Body"; // Keep this one
import Home from "./component/home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./component/header/Header";
import Trailer from "./component/trailer/Trailer";
import ReviewForm from "./component/reviewsForm/ReviewForm";
import Reviews from "./component/review/Reviews"; // Ensure Reviews
import { ColorRing } from "react-loader-spinner";
// component is imported
// import Register from "./component/signup/Signup";
// import Signup from "./component/signup/Signup";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("api/v1/movies");
      console.log("response", response);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/imdb/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      console.log("getMovieData called");
      console.log("single movies response data review123", response.data);
      setReviews(response.data.reviewIds || []); // Assuming the reviews are part of the movie data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log("app comp is called", movies);
  if (movies.length <= 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ColorRing
          visible={true}
          height="150"
          width="150"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#abbd81", "#849b87"]}
        />
      </div>
    );
  }
  return (
    <div className="APP">
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <Home movies={movies} />
                <Body movies={movies} />
              </>
            }
          />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          {/* <Route path="/Register" element={<Signup />} /> */}

          <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Route>
      </Routes>
      {/*  */}
    </div>
  );
};

export default App;
