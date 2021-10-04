import React from 'react';
import './About.css'

const About = () => {
  return (
    <div>
      <div className="container px-4 my-5">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <img className="img-fluid" src="https://image.freepik.com/free-vector/university-student-cap-mortar-board-diploma_3446-334.jpg" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h2>Achieve Your Goals With Edu Ray</h2>
              <p>Whether you want to learn or to share what you know, you’ve come to the right place. we connect people through knowledge.</p>
              <ol>
                <li>Upskill your organization.</li>
                <li>more then 100K online courses.</li>
                <li>Learn the latest skills.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;