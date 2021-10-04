import React from 'react';
import { Link } from 'react-router-dom';
import FourService from '../FourService/FourService';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
            <div className="p-4">
              <br />
              <br />
              <h3>Master the Skills to Drive your Career.</h3>
              <p>Best online courses from the world’s leading experts.
                Join 17 million learners today.</p>
              <div className="my-4">
                <Link to="/services"><button className="btn-regular1 rounded py-1 px-2">View All Courses</button></Link>
                
                <button className="btn-regular rounded py-1 px-2 mx-2">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col hero">
            <div></div>
          </div>
        </div>
      </div>
      <FourService></FourService>
    </div>
  );
};

export default Home;