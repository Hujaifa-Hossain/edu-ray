import React from 'react';
import './Course.css'
import { Card } from 'react-bootstrap';

const Course = (props) => {
  const { name, img, price } = props.service;
  return (
    <Card className="card">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price  ${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Course;