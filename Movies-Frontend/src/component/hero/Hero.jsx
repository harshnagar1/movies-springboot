import { Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Hero = ({ movies, call }) => {
  console.log("movies is calling from home page");
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  call("-----tushar");

  return (
    <div className="movie-carousel-container">
      <Carousel
        autoPlay={true}
        interval={3000}
        indicators={true}
        navButtonsAlwaysVisible={true}
        animation="slide"
      >
        {movies &&
          movies.map((movie, index) => {
            console.log("harsh from movies map");
            return (
              <Paper key={index}>
                <div className="movie-card-container">
                  <div
                    className="movie-card"
                    style={{
                      backgroundImage: `url(${
                        movie.backdrops && movie.backdrops[0]
                      })`,
                    }}
                  >
                    <div className="movie-detail">
                      <div className="movie-poster">
                        <img src={movie.poster} alt="" />
                      </div>
                      <div className="movie-title">
                        <h4>
                          <b>{movie.title}</b>
                        </h4>
                      </div>
                      <div className="movie-buttons-container">
                        <Link
                          to={`/Trailer/${movie.trailerLink.substring(
                            movie.trailerLink.length - 11
                          )}`}
                        >
                          <div className="play-button-icon-container">
                            <FontAwesomeIcon
                              className="play-button-icon"
                              icon={faCirclePlay}
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="movie-review-button-container">
                        <Button
                          variant="info"
                          onClick={() => reviews(movie.imdbId)}
                        >
                          REVIEWS
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Hero;
