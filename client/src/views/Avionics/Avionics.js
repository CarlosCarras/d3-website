import React from 'react';
import SlideCards from "./../../components/SlideCards/SlideCards";
import './Avionics.css';

class Avionics extends React.Component {
    render() {
        return(
          <div className="avionics-page parallax">

                      <div className="avionics-title"> Avionics </div>
                      <div className="avionics-description">
                        <SlideCards/>
                      </div>
          </div>
        )
    }
}

export default Avionics;
