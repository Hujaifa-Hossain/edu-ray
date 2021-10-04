import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';
import './FourService.css'

const FourService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./serve.JSON')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <Container className="my-3">
      <h3 className="text-center">Our Courses</h3>
      <div className="service-container my-3">
      {
        services.map(service => <Course key={service.name} service={service}></Course>)
      }
    </div>
    </Container>
  );
};

export default FourService;