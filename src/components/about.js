import React from 'react';

const AboutSection = (props) => {
    return(
        <section className="about padding-top-90 padding-bottom-90" id="about">
          <div className="container">
              <div className="row">
                  <div className="col-md-12 text-center item1">
                      <h3>about me</h3>
                      <p>I love the web and want to push it forward. Don’t ask me why</p>
                      <div className="more-about-me">
                          <div className="follow">
                              <span>Follow Me</span>
                              <a href="https://www.facebook.com/devbrian" target="_blank">Facebook</a>
                              <a href="https://www.twitter.com/kiid_brian" target="_blank">Twitter</a>
                              <a href="https://www.instagram.com/stagedforgreatness/?hl=en" target="_blank">Instagram</a>
                          </div>
                          <div className="hire">
                              <span>Hire Me</span>
                              <a href="https://www.upwork.com/o/profiles/users/_~0194e6133cef8818cf/" target="_blank">UpWork</a>
                              <a href="https://www.github.com/kiidbrian" target="_blank">Github</a>
                          </div>
                          <div className="contact-me">
                              <span>Mail Me</span>
                              <a href="mailto:brnpaintsil@gmail.com">brnpaintsil@gmail.com</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
};

export default AboutSection;
