import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      <div className="container px-4 my-5">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <img className="img-fluid" src="https://image.freepik.com/free-vector/hand-drawn-contact-information-background-template_23-2148189661.jpg" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h4>Contact Us</h4>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Write your query here !...</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button className="btn-regular rounded py-1 px-2 mx-2">Ask Now!</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;