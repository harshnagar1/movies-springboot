import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import api from "../../services/AxiosConfig";
import ReviewForm from "../reviewsForm/ReviewForm";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const params = useParams();
  const movieId = params.movieId;
  const [temp, setTemp] = useState("");

  useEffect(() => {
    getMovieData(movieId);
  }, [movieId]);

  const addReview = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: temp,
        imdbId: movieId,
      });

      console.log("calling response from Reviews", response);

      const updatedReviews = [...reviews, { body: response.data.body }];
      setReviews(updatedReviews);
      setTemp("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="img-at-review" src={movie?.poster} alt="" />
          <Row></Row>
          <Row style={{ margin: "5px 0", textAlign: "center" }}>
            {movie?.title}
          </Row>
          <Row style={{ margin: "5px 0", textAlign: "center" }}>
            {movie?.releaseDate}
          </Row>
        </Col>

        <Col>
          <>
            <Row>
              <Col>
                <ReviewForm
                  handleSubmit={addReview}
                  labelText={"Write a Review?"}
                  temp={temp}
                  setTemp={setTemp}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
          </>
          {reviews.map((r, index) => (
            <React.Fragment key={index}>
              <Row>
                <Col>{r.body}</Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </React.Fragment>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
