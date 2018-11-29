import React, { Component } from 'react';
import HomeSection from './components/home';
import AboutSection from './components/about';
import ServiceSection from './components/services';
import PortfolioSection from './components/works';
import FooterSection from './components/footer';

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
            <ServiceSection />
            <PortfolioSection />
            <FooterSection />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
