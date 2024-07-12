import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import api from "./services/AxiosConfig";
import Layout from "./component/Layout";
import { Route, Routes } from "react-router-dom"; // Keep this one
import Home from "./component/home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./component/header/Header";
import Trailer from "./component/trailer/Trailer";
import ReviewForm from "./component/reviewsForm/ReviewForm";
import Reviews from "./component/review/Reviews"; // Ensure Reviews component is imported

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
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      console.log("getMovieData called");
      setReviews(response.data.reviews || []); // Assuming the reviews are part of the movie data
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log("app comp is called");

  return (
    <div className="APP">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
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
    </div>
  );
};

export default App;

// import { useState, useEffect } from "react";
// import "./App.css";
// import axios from "axios";
// import api from "./services/AxiosConfig";
// import Layout from "./component/Layout";
// import { Route, Routes } from "react-router-dom"; // Keep this one
// import Home from "./component/home/Home";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Header from "./component/header/Header";
// import Trailer from "./component/trailer/Trailer";
// import ReviewForm from "./component/reviewsForm/ReviewForm";

// const App = () => {
//   const [movies, setMovies] = useState();
//   const [movie, setMovie] = useState();
//   const [reviews, setReviews] = useState();

//   const getMovies = async () => {
//     try {
//       const response = await api.get("api/v1/movies");
//       console.log("response", response);
//       setMovies(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getMovieData = async (movieId) => {
//     try {
//       const response = await api.get(`/api/v1/movies/${movieId}`);
//       const singleMovie = response.data;
//       setMovies(singleMovie);
//       console.log("getmovies called");
//       setReviews;
//     } catch (error) {}
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);
//   console.log("app comp is called");

//   return (
//     <div className="APP">
//       <Header />
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/" element={<Home movies={movies} />}></Route>
//           <Route path="/Trailer/:ytTrailerId" element={<Trailer />}></Route>
//           <Route
//             path="/Reviews/:movieId"
//             element={
//               <Reviews
//                 getMoviesData={getMoviesData}
//                 movie={movie}
//                 reviews={reviews}
//                 setReviews={setReviews}
//               />
//             }
//           ></Route>
//         </Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;
