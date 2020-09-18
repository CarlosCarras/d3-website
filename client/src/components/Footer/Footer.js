import React from 'react';
import FBLogo from './../../assets/logo-facebook.svg';
import IGLogo from './../../assets/logo-instagram.svg';
import './Footer.css'

class Footer extends React.Component {

    render() {
        return(
          <div className="footer">
              <div className="socialmedia-list">
                  <span className="footer-credits">
                      University of Florida.<br/>
                      308 MAE-A Building, P.O. Box 116250 <br/>
                      Gainesville, FL 32611-6250
                  </span>
              </div>
          </div>
        )
    }
}

export default Footer
