package com.moviedemo.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
 
import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {

    private static final Logger logger = LoggerFactory.getLogger(MovieController.class);

    @Autowired
    private MovieService movieService;

   @GetMapping
    public  ResponseEntity<List<Movie>> getAllMovies() {

        try {
            List<Movie> movies = movieService.allMovies();
//            System.out.println(movies+"mongodata");
            logger.info("Fetched movies: {}", movies);
//            return movies;
            return new ResponseEntity<>(movies, HttpStatus.OK);
        } catch (Exception e) {
            // Handle general exceptions
            logger.error("Error fetching all movies", e);

            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable ObjectId id) {
        try {
//            ObjectId objectId = new ObjectId();
            Optional<Movie> movie = movieService.singleMovie(id);
            if (movie.isPresent()) {
                return new ResponseEntity<>(movie, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            // Handle general exceptions
            logger.error("Error fetching all movies", e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/imdb/{imdbId}")
    public ResponseEntity<Optional<Movie>> getSingleMovieByImdbId(@PathVariable String imdbId) {
        try {

            Optional<Movie> movie = movieService.findMoviesByImdbId(imdbId);
            if (movie.isPresent()) {
                return new ResponseEntity<>(movie, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            // Handle general exceptions
            logger.error("Error fetching all movies", e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
