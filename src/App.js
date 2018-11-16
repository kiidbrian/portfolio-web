import React, { Component } from 'react';
import HomeSection from './components/home';
import AboutSection from './components/about';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="preloader"><div className="loader startLoad"></div></div>
        
        <div className="page-loader startLoad animi-loader" style={{animationName: 'none'}}>
          <div className="loader startLoad"></div>
        </div>

        <div className="main_img new_top img-shadow">
          <div>
              <img src="/assets/images/me.jpg" alt="" />
          </div>
        </div>

        <div className="top">
          <a href="index_1.html#home" className="smooth_scroll"><i className="fa fa-angle-up fa-2x"></i></a>
        </div>

        <main className="load-main">
          <div className="main-content">
            <HomeSection />
            <AboutSection />

            <div className="fun_facts padding-top-90 padding-bottom-90">
              <div className="container">
                  <div className="row">

                      <div className="col-sm-3 item">
                          <div className="content">
                              <i className="pe-7s-clock"></i>
                              <p className="info">
                                  <span className="counter">800</span>
                                  <span>Working Hours</span>
                              </p>
                          </div>
                      </div>

                      <div className="col-sm-3 item">
                          <div className="content">
                              <i className="pe-7s-like2"></i>
                              <p className="info">
                                  <span className="counter">300</span>
                                  <span>project done</span>
                              </p>
                          </div>
                      </div>

                      <div className="col-sm-3 item">
                          <div className="content">
                              <i className="pe-7s-smile"></i>
                              <p className="info">
                                  <span className="counter">100</span>
                                  <span>happy clients</span>
                              </p>
                          </div>
                      </div>

                      <div className="col-sm-3 item">
                          <div className="content">
                              <i className="pe-7s-medal"></i>
                              <p className="info">
                                  <span className="counter">120</span>
                                  <span>awards win</span>
                              </p>
                          </div>
                      </div>

                  </div>
              </div>
            </div>

          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
