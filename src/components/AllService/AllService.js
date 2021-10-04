import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';
import './AllService.css'

const AllService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./serve.JSON')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <Container>
      <div className="row">
      {
        services.map(service => <Course key={service.name} service={service}></Course>)
      }
    </div>
    </Container>
  );
};

export default AllService;