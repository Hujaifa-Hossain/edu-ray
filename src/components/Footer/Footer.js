import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <div className="blue-color p-3">
      <div className="container overflow-hidden">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <h4>Edu Ray</h4>
              <p>Edu Ray is one of the leading online learning platform in digital technology.</p>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h4>Explore</h4>
              <ul className="p-0">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h4>Get News Letter</h4>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <button className="btn-regular1 rounded py-1 px-2">Subscribe</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">All Right reserved Edu Ray</p>
    </div>
  );
};

export default Footer;