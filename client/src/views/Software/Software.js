import React from 'react';
import './Software.css';

class Software extends React.Component {
    render() {
        return(
          <div className="software-page parallax">
              <div className="row" style={{height:"120vh"}}>
                  <div className="flex-column-60 col-software-left">
                      <div className="software-title"> Software </div>
                      <div className="software-description">
                        Hello World!
                      </div>
                  </div>
                  <div className="flex-column-40 col-software-right">
                      <div className="bom-title"> BOM </div>
                      <div className="software-form">
                        Some notable components of the D3's on-board electronics include:
                        <ul className="bom-list">
                            <li>Antenna</li>
                            <li>Battery</li>
                            <li>EPS</li>
                            <li>Solar Panels</li>
                        </ul>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default Software;
