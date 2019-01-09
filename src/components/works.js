import React from 'react';

const PortfolioSection = (props) => {
    return(
        <section className="portfolio padding-top-90 padding-bottom-60 primary_bg" id="portfolio">
            <div className="container">
            <div className="sec_title">
                <p>portfolio</p>
                <h2>recent work</h2>
            </div>
            <div className="portf-filter text-center">
                <ul className="list-unstyled ul-filter">
                    <li data-filter="*" className="active_filter">all</li>
                    <li data-filter=".integration">integrations</li>
                    <li data-filter=".coding">development</li>
                    <li data-filter=".training">training</li>
                </ul>
            </div>
            <div className="row grid">

                <div className="col-xs-12 col-sm-6 col-md-4 grid-item coding">
                    <div className="box">
                        <div className="my__img">
                            <img src="assets/images/portfolio/red.png" alt='' />
                        </div>
                        <div className="boxContent">
                            <a href="https://www.readeverydayinc.org" target="_blank" rel="noopener noreferrer">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <span className="post">coding</span>
                                        <h3 className="title">Red Everyday Inc</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 grid-item coding">
                    <div className="box">
                        <div className="my__img">
                            <img src="assets/images/portfolio/drnk.png" alt=''/>
                        </div>
                        <div className="boxContent">
                            <a href="http://www.drinkappgh.com/en/" target="_blank" rel="noopener noreferrer">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <span className="post">coding</span>
                                        <h3 className="title">Drink App</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-4 grid-item grid-sizer coding">
                    <div className="box">
                        <div className="my__img">
                            <img src="assets/images/portfolio/xyz.png" alt='' />
                        </div>
                        <div className="boxContent">
                            <a href="http://www.myxyzonline.com/" target="_blank" rel="noopener noreferrer">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <span className="post">coding</span>
                                        <h3 className="title">TV XYZ Website</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div id="image_popup" className="zoom-anim-dialog mfp-hide">
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="row">
                                <div className="col-sm-8 col-md-offset-2">
                                    <img src="assets/images/portfolio/work-4.jpg" alt="" className="margin-bottom-30" />
                                    <h3>Creative Design</h3>
                                    <ul className="list-unstyled project_info">
                                        <li><span>Client :</span>Envato</li>
                                        <li><span>Date :</span>March 19, 2017</li>
                                        <li><span>Skills :</span>HTML5, JS, CSS3</li>
                                    </ul>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <a href="index_1.html#" className="demo">Visit website</a>

                                    <div id="MySlider" className="carousel slide margin-bottom-30 margin-top-50" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#MySlider" data-slide-to="0" className="active"></li>
                                            <li data-target="#MySlider" data-slide-to="1"></li>
                                            <li data-target="#MySlider" data-slide-to="2"></li>
                                        </ol>

                                        <div className="carousel-inner" role="listbox">
                                            <div className="item active">
                                                <img src="assets/images/portfolio/work-2.jpg" alt="" />
                                            </div>

                                            <div className="item">
                                                <img src="assets/images/portfolio/work-3.jpg" alt="" />
                                            </div>

                                            <div className="item">
                                                <img src="assets/images/portfolio/work-4.jpg" alt="" />
                                            </div>
                                        </div>

                                        <a className="left carousel-control" href="index_1.html#MySlider" role="button" data-slide="prev">
                                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="right carousel-control" href="index_1.html#MySlider" role="button" data-slide="next">
                                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-6 col-md-4 grid-item coding">
                    <div className="box">
                        <div className="my__img">
                            <img src="assets/images/portfolio/hubtel.png" alt='' />
                        </div>
                        <div className="boxContent">
                            <a href="https://hubtel.com/store" target="_blank" rel="noopener noreferrer">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <span className="post">coding</span>
                                        <h3 className="title">Webstore</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            
                <div id="slider_popup" className="zoom-anim-dialog mfp-hide">
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="row">
                                <div className="col-sm-6">

                                    <div id="MySlider2" className="carousel slide margin-bottom-30" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#MySlider2" data-slide-to="0" className="active"></li>
                                            <li data-target="#MySlider2" data-slide-to="1"></li>
                                            <li data-target="#MySlider2" data-slide-to="2"></li>
                                        </ol>

                                        <div className="carousel-inner" role="listbox">
                                            <div className="item active">
                                                <img src="assets/images/portfolio/work-2.jpg" alt="" />
                                            </div>

                                            <div className="item">
                                                <img src="assets/images/portfolio/work-3.jpg" alt="" />
                                            </div>

                                            <div className="item">
                                                <img src="assets/images/portfolio/work-4.jpg" alt="" />
                                            </div>
                                        </div>

                                        <a className="left carousel-control" href="index_1.html#MySlider2" role="button" data-slide="prev">
                                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="right carousel-control" href="index_1.html#MySlider2" role="button" data-slide="next">
                                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                    
                                </div>
                                <div className="col-sm-6">
                                    <h3>Creative Design</h3>
                                    <ul className="list-unstyled project_info">
                                        <li><span>Client :</span>Envato</li>
                                        <li><span>Date :</span>March 19, 2017</li>
                                        <li><span>Skills :</span>HTML5, JS, CSS3</li>
                                    </ul>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <a href="index_1.html#" className="demo">Visit website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-6 col-md-4 grid-item training">
                    <div className="box">
                        <div className="my_img" data-mfp-src="assets/images/portfolio/fidelity.png">
                            <img src="assets/images/portfolio/fidelity.png" alt=''/>
                            <div className="boxContent">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <span className="post">Training</span>
                                        <h3 className="title">Fidelity Bank</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-6 col-md-4 grid-item training">
                    <div className="box">
                        <div className="my__img">
                            <img src="assets/images/portfolio/yaaw.png" alt='' />
                        </div>
                        <div className="boxContent video-popup">
                            <a href="https://www.youtube.com/watch?v=hpeYWdkUtcE">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <span className="post">Training</span>
                                        <h3 className="title">YaaW</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-6 col-md-4 grid-item integration">
                    <div className="box">
                        <div className="my_img" data-mfp-src="assets/images/portfolio/africabets.png">
                            <img src="assets/images/portfolio/africabets.png" alt=''/>
                            <div className="boxContent">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <span className="post">Integrations</span>
                                        <h3 className="title">AfricaBets</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        </section> 
    )
};

export default PortfolioSection;
