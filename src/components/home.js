import React from 'react';

// create a functional component
const HomeSection = (props) => {
    return(
        <section className="home " id="home">
          <div className="full_height bg_image" style={{backgroundImage: `url('assets/images/me-new.jpg')` }} data-stellar-background-ratio="0.7">
              <div id="particles-js"></div>
              
              <nav className="navbar navbar-default navbar-fixed-top">
                  <div className="container">
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                          </button>

                          <a className="navbar-brand" href="/"><span>TheKuulkiid</span></a>

                      </div>
                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav navbar-right">
                              <li className="active">
                                  <a href="index_1.html#home" className="smooth_scroll">Home</a>
                              </li>
                              <li>
                                  <a href="index_1.html#about" className="smooth_scroll">About</a>
                              </li>
                              <li>
                                  <a href="index_1.html#services" className="smooth_scroll">Services</a>
                              </li>
                              <li>
                                  <a href="index_1.html#portfolio" className="smooth_scroll">Portfolio</a>
                              </li>
                              <li>
                                  <a href="index_1.html#testimonials" className="smooth_scroll">Testimonials</a>
                              </li>
                              <li>
                                  <a href="index_1.html#blog" className="smooth_scroll">Blog</a>
                              </li>
                              <li>
                                  <a href="index_1.html#contact" className="smooth_scroll">Contact</a>
                              </li>
                          </ul>
                      </div>
                  </div>
             </nav>
              <div className="overlay">
                  <div className="wrapper">
                      <div className="content opacity-zero">
                          <h1>Brian Paintsil</h1>
                          <span className="cd-headline clip">I am
                              <span className="cd-words-wrapper">
                                  <b className="is-visible">software engineer</b>
                                  <b>dreamer</b>
                                  <b>freelancer</b>
                              </span>
                          </span>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
};

export default HomeSection;
