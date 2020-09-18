import React from 'react';
import './Avionics.css';

class Avionics extends React.Component {
    render() {
        return(
          <div className="avionics-page parallax">
              <div className="row" style={{height:"120vh"}}>
                  <div className="flex-column-60 col-avionics-left">
                      <div className="avionics-title"> Avionics </div>
                      <div className="avionics-description">
                        Hello World!
                      </div>
                  </div>
                  <div className="flex-column-40 col-avionics-right">
                      <div className="bom-title"> BOM </div>
                      <div className="avionics-form">
                        Some notable components of the D3's on-board electronics include (ex):
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

export default Avionics;
