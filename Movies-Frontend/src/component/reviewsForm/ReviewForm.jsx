import React, { useRef, useS } from "react";
import { Form, Button } from "react-bootstrap";

const ReviewForm = ({
  labelText,
  textarea,
  defaultValue,
  handleSubmit,
  temp,
  setTemp,
}) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm-controlTextareal">
          <Form.Label>{labelText}</Form.Label>
          <Form.Control
            as={textarea}
            rows={3}
            defaultValue={defaultValue}
            value={temp}
            onChange={(e) => {
              setTemp(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button varient="outline-info" onClick={handleSubmit}>
          Submit Review
        </Button>
      </Form>
    </div>
  );
};

export default ReviewForm;
