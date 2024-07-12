import React, { useEffect, useState } from "react";
import Hero from "../hero/Hero";

import api from "../../services/AxiosConfig";

const Home = () => {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("api/v1/movies");
      console.log("response", response);
      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  function callTushar(var1) {
    console.log("tushar");
    console.log(var1);
  }

  useEffect(() => {
    getMovies();
  }, []);
  return <Hero movies={movies} data="tushar" comp="harsh" call={callTushar} />;
};

export default Home;
