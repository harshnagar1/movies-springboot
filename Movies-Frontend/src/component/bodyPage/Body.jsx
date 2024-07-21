import { Grid } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Body = ({ movies, reviewIds, Reviews }) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
    // navigate(`api.post("/api/v1/${Reviews}")`);
  }
  console.log("movies in body ", Reviews);
  return (
    <div>
      {/* <Carousel
        autoPlay={true}
        interval={3000}
        indicators={true}
        navButtonsAlwaysVisible={true}
        animation="slide"
      > */}
      <Row xs={1} md={4} className="g-4 p-4">
        {movies.map((card, indx) => (
          // Array.from({ length: 4}).map((_, idx) =>
          <Col key={indx}>
            <Card
              onClick={() => reviews(card.imdbId)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img variant="top" src={card.poster} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Title>{card.subtitle}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* </Carousel> */}
    </div>
  );
};

export default Body;
