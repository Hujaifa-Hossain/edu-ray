import React from 'react';
import { Card } from 'react-bootstrap';
import './OneCourse.css'

const OneCourse = (props) => {
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

export default OneCourse;