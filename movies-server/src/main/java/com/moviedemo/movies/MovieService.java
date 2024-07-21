package com.moviedemo.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.util.List;
import java.util.Optional;


@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    private static final Logger logger = LoggerFactory.getLogger(MovieController.class);


    public List<Movie> allMovies() {
        try {
            List<Movie> movies = movieRepository.findAll();
            logger.info("Fetched movies: {}", movies);
            return movies;
        } catch (Exception e) {
            logger.error("Error fetching all movies", e);
            throw e; // Re-throw the exception to be handled by the controller
        }
    }
    public Optional<Movie> singleMovie(ObjectId id) {
        return movieRepository.findById(id);
    }

    public Optional<Movie> findMoviesByImdbId(String imdbId ){
        return movieRepository.findMoviesByImdbId(imdbId);
    }

}