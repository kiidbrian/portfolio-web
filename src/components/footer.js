import React from 'react';

const FooterSection = (props) => {
    return(
        <React.Fragment>
            <section class="contact padding-top-90 padding-bottom-90" id="contact">
                <div class="container">
                    <div class="sec_title">
                        <p>Contact</p>
                        <h2>Hire me</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <div class="contact_form">
                                <form name="contact" method="post" netlify>
                                    <input placeholder="Name" name="name" type="text" class="form-control"/>
                                    <input placeholder="Email" name="email" type="email" class="form-control"/>
                                    <textarea placeholder="Message" name="message" class="form-control"></textarea>
                                    <div class="submit btn">send</div>
                                    <div class="msg_success"><p>Your message has been sent. Thank you!</p></div>
                                    <div class="msg_error"><p>Sorry your message can not be sent.</p></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>

            <footer>
                <div class="footer-info">
                    <div class="container text-center">
                        <div class="row text-center info">

                            <div class="col-sm-4 item">
                                <div class="content">
                                    <span class="pe-7s-call pe-3x pe-va icon"></span>
                                    <div>
                                        <p>+233 208 953 410</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4 item">
                                <div class="content">
                                    <span class="pe-7s-mail pe-3x pe-va icon"></span>
                                    <div>
                                        <p><a href="mailto:brnpaintsil@gmail.com">brnpaintsil@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4 item">
                                <div class="content">
                                    <span class="pe-7s-map-marker pe-3x pe-va icon"></span>
                                    <div>
                                        <p>Accra, Ghana</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> 
                </div>
                <div class="footer-bottom">
                    <div class="container text-center">
                        <p>&copy; {new Date().getFullYear()} TheKuulkiid | All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
};

export default FooterSection;
