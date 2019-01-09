import React from 'react';

const FooterSection = (props) => {
    return(
        <React.Fragment>
            <section className="contact padding-top-90 padding-bottom-90" id="contact">
                <div className="container">
                    <div className="sec_title">
                        <p>Contact</p>
                        <h2>Hire me</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="contact_form">
                                <form id="my-form" name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
                                    <input placeholder="Name" name="name" type="text" className="form-control"/>
                                    <input placeholder="Email" name="email" type="email" className="form-control"/>
                                    <textarea placeholder="Message" name="message" className="form-control"></textarea>
                                    <div className="submit btn">send</div>
                                    <div className="msg_success"><p>Your message has been sent. Thank you!</p></div>
                                    <div className="msg_error"><p>Sorry your message can not be sent.</p></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>

            <footer>
                <div className="footer-info">
                    <div className="container text-center">
                        <div className="row text-center info">

                            <div className="col-sm-4 item">
                                <div className="content">
                                    <span className="pe-7s-call pe-3x pe-va icon"></span>
                                    <div>
                                        <p>+233 208 953 410</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4 item">
                                <div className="content">
                                    <span className="pe-7s-mail pe-3x pe-va icon"></span>
                                    <div>
                                        <p><a href="mailto:brnpaintsil@gmail.com">brnpaintsil@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4 item">
                                <div className="content">
                                    <span className="pe-7s-map-marker pe-3x pe-va icon"></span>
                                    <div>
                                        <p>Accra, Ghana</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> 
                </div>
                <div className="footer-bottom">
                    <div className="container text-center">
                        <p>&copy; {new Date().getFullYear()} TheKuulkiid | All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
};

export default FooterSection;
