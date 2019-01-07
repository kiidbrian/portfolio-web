//import libraries
import React from 'react';

// create a functional component
const ServiceSection = (props) => {
    return(
        <section className="services padding-top-90 padding-bottom-60" id="services">
          <div className="container">

              <div className="sec_title">
                  <p>services</p>
                  <h2>what i do</h2>
              </div>

              <div className="row">
                  
                  <div className="col-md-4 col-sm-6 item">
                      <div className="content">
                          <div className="icon">
                              <i className="pe-7s-anchor"></i>
                          </div>
                          <h3>Development</h3>
                          <p>Application development with agile software development frameworks like SCRUM.</p>
                      </div>
                  </div>
                  
                  <div className="col-md-4 col-sm-6 item">
                      <div className="content">
                          <div className="icon">
                              <i className="pe-7s-graph1"></i>
                          </div>
                          <h3>Consulting</h3>
                          <p>Giving expert advice to professionals based on years of experience in software development.</p>
                      </div>
                  </div>

                  <div className="col-md-4 col-sm-6 item">
                      <div className="content">
                          <div className="icon">
                              <i className="pe-7s-box2"></i>
                          </div>
                          <h3>Training</h3>
                          <p>Teaching and mentoring new to midlevel developers on how to gain and improve skills respectively.</p>
                      </div>
                  </div>
                  
                  <div className="col-md-4 col-sm-6 item">
                      <div className="content">
                          <div className="icon">
                              <i className="pe-7s-gleam"></i>
                          </div>
                          <h3>Frontend</h3>
                          <p>Painlessly creating interactive component-based User Interfaces using ReactJS.</p>
                      </div>
                  </div>

                  <div className="col-md-4 col-sm-6 item">
                      <div className="content">
                          <div className="icon">
                              <i className="pe-7s-edit"></i>
                          </div>
                          <h3>Backend</h3>
                          <p>Design and implement server-side software components to support product features.</p>
                      </div>
                  </div>
                  
                  <div className="col-md-4 col-sm-6 item">
                      <div className="content">
                          <div className="icon">
                              <i className="pe-7s-tools"></i>
                          </div>
                          <h3>Integrations</h3>
                          <p>Establishing communication between bespoke applications and backend systems.</p>
                      </div>
                  </div>

              </div>
          </div>
      </section>
    )
};

export default ServiceSection;
