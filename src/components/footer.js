import React from 'react';

class FooterSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    render(){
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
                                        <input
                                            onChange={(e) => this.handleInputChange(e)}
                                            value={this.state.name} 
                                            placeholder="Name" 
                                            name="name" 
                                            type="text" 
                                            className="form-control"/>
                                        <input
                                            onChange={(e) => this.handleInputChange(e)}
                                            value={this.state.email}  
                                            placeholder="Email" 
                                            name="email" 
                                            type="email" 
                                            className="form-control"/>
                                        <textarea
                                            onChange={(e) => this.handleInputChange(e)}
                                            value={this.state.message}  
                                            placeholder="Message" 
                                            name="message" 
                                            className="form-control"></textarea>
                                        <div className="btn" onClick={() => this.submitForm()}>send</div>
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
    }

    handleInputChange = (e) => {
        let data = {
            [e.target.name]: e.target.value
        }
        this.setState({...data});
    }

    submitForm = () => {
        console.log("i was just clicked!");
        this.sendEmail();
    }

    sendEmail= () => {
        let url = "https://api.sendgrid.com/v3/mail/send";
        let data = {
            "personalizations": [{"to": [{"email": `${this.state.email}`}]}],
            "from": {"email": "hire@thekiidbrian.com"},
            "subject": "Message from portfolio website",
            "content": [{
                "type": "text/plain", 
                "value": `${this.state.name} sent you a message. \n\n\n\n ${this.state.message}`
            }]
        }
        let fetchHeaders  = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': 'true'
        }
        let fetchData = {
            method: 'POST',
            body: data,
            headers: new Headers(fetchHeaders)
        }
        fetch(url,fetchData)
            .then((resp)=>resp.json())
            .then(function(data) {
                console.log(data);
            })
        .catch(function(error){
            console.log(error);
        });
    }
    
};

export default FooterSection;
