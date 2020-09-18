import React from 'react';
import './FAQ.css';

class FAQ extends React.Component {
    getTitle() {
        if (window.screen.width <= 680) {
            return "FAQ"
        }
        else {
            return "Frequently Asked Questions"
        }
    }
    render() {
        return(
            <div className="faq-container parallax">
                <div className="faq-header">{this.getTitle()}</div>
                <div className="accordion">
                    <div className="accordion-item" id="question1">
                        <a className="accordion-link" href="#question1">
                            <span>What other CubeSats is ADAMUS working on?</span>
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                We're working on a [verbose description]. For more information on the Passive Thermal 
                                Coating Observatory Operating in Low Earth Orbit (PATCOOL) project, click 
                                &nbsp;<a href="http://www.riccardobevilacqua.com/">here</a>.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item" id="question2">
                        <a className="accordion-link" href="#question2">
                            <span>Question.</span>
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                Answer.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item" id="question3">
                        <a className="accordion-link" href="#question3">
                            <span>Question.</span>
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                Answer.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item" id="question4">
                        <a className="accordion-link" href="#question4">
                            <span>Question.</span>
                            <i className="icon ion-md-add"/>
                            <i className="icon ion-md-remove"/>
                        </a>
                        <div className="answer">
                            <p>
                                Answer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQ
