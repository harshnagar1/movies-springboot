import React from "react";
import { Form, Button } from "react-bootstrap";

const ReviewForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm-controlTextareal">
          <Form.Label>{labelText}</Form.Label>
          <Form.Control
            ref="revText"
            as={textarea}
            rows={3}
            defaultValue={defaultValue}
          ></Form.Control>
        </Form.Group>
        <Button varient="outline-info" onClick={handleSubmit}></Button>
      </Form>
    </div>
  );
};

export default ReviewForm;
