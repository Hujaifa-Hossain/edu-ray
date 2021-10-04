import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import OneCourse from '../OneCourse/OneCourse';
import './AllService.css'

const AllService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./AllService.JSON')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <Container>
      <h3 className="text-center my-3">Our All Courses</h3>
      <div className="service-container">
        {
          services.map(service => <OneCourse key={service.name} service={service}></OneCourse>)
        }
      </div>
    </Container>
  );
};

export default AllService;