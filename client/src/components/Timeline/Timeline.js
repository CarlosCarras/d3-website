import React from 'react';
import './Timeline.css';


class Timeline extends React.Component {
    render() {
        return(
            <div id="cd-timeline" className="cd-container">
                
                <div className="cd-timeline-block">
                    <div className="cd-timeline-img"></div> 
                    <div className="cd-timeline-content">
                        <h2>D3 Launch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
                        <span className="cd-date">Feb 18</span>
                    </div> 
                </div> 

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img"></div> 
                    <div className="cd-timeline-content">
                        <h2>Some Other Relevant Date</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
                        <span className="cd-date">Feb 18</span>
                    </div> 
                </div> 

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img"></div> 
                    <div className="cd-timeline-content">
                        <h2>Some Other Relevant Date</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
                        <span className="cd-date">Feb 18</span>
                    </div> 
                </div> 

                <div className="cd-timeline-block">
                    <div className="cd-timeline-img"></div> 
                    <div className="cd-timeline-content">
                        <h2>End of Mission</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
                        <span className="cd-date">Feb 18</span>
                    </div> 
                </div> 

            </div> 
        )
    }
}

export default Timeline;