import React from 'react';

const AboutSection = (props) => {
    return(
        <section className="about padding-top-90 padding-bottom-90" id="about">
          <div className="container">
              <div className="row">
                  <div className="col-md-6 item1">
                      <h3>about me</h3>
                      <p>I love the web and want to push it forward. Don’t ask me why</p>
                      <div className="more-about-me">
                          <div className="follow">
                              <span>Follow Me</span>
                              <a href="index_1.html#">Facebook</a>
                              <a href="index_1.html#">Twitter</a>
                              <a href="index_1.html#">Instagram</a>
                          </div>
                          <div className="hire">
                              <span>Hire Me</span>
                              <a href="index_1.html#">UpWork</a>
                              <a href="index_1.html#">Fiver</a>
                              <a href="index_1.html#">Freelancer</a>
                          </div>
                          <div className="contact-me">
                              <span>Mail Me</span>
                              <a href="mailto:brnpaintsil@gmail.com">brnpaintsil@gmail.com</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 item2">
                      <h3>my skills</h3>
        
                      <div className="skills">

                          <div className="skill">
                              <span>HTML</span>
                              <span>90%</span>
                              <div className="progress_bg">
                                  <div className="progress_bar"></div>
                              </div>
                          </div>

                          <div className="skill">
                              <span>CSS</span>
                              <span>85%</span>
                              <div className="progress_bg">
                                  <div className="progress_bar"></div>
                              </div>
                          </div>

                          <div className="skill">
                              <span>Javascript</span>
                              <span>84%</span>
                              <div className="progress_bg">
                                  <div className="progress_bar"></div>
                              </div>
                          </div>

                          <div className="skill">
                              <span>Python</span>
                              <span>88%</span>
                              <div className="progress_bg">
                                  <div className="progress_bar"></div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
};

export default AboutSection;
