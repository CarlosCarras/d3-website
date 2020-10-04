import React from 'react';
import StaffEntry from './../../components/StaffEntry/StaffEntry';
import staff from './staff.json'
import './AboutUs.css';

const Bevilacqua = require('./../../assets/staff_pics/bevilacqua_riccardo.png');
const Buckner = require('./../../assets/staff_pics/buckner_samuel.JPG');

class AboutUs extends React.Component {
    render() {
        return(
          <div className="about-us-page">
              <div className="about-us-title"> ADAMUS Lab </div>
              <div className="about-us-description">
                  <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      The ADvanced Autonomous MUltiple Spacecraft laboratory (ADAMUS) specializes in 
                      hardware-in-the-loop ground experiments validating spacecraft relative motion 
                      guidance, navigation, and control, as well as proximity operations and maneuvers 
                      involving contact (on-orbit assembly, servicing, re-fueling). With its 
                      six-degrees-of-freedom air-bearing-based spacecraft simulator, the laboratory can 
                      reproduce the dynamics of free-flying spacecraft, creating a unique environment 
                      to consolidate algorithms to run on future satellites, as well as actual hardware 
                      subsystems. Contact dynamics models and tools for satellite servicing can also be 
                      tested at the ADAMUS facility. The ADAMUS laboratory bridges the gap between 
                      computer numerical simulations and actual orbital flight.
                  </p>
              </div>

              <div className="about-us-title"> Meet the Team </div>
              <div className="about-us-description">
                  <p>
                      Separated into Faculty, Graduate Students, Undergraduate Students.
                  </p>
              </div>
              <div className="meet-team">
                  <div className="team-section" id="principal-investigator">
                      <h2> Principal Investigators </h2>
                      <StaffEntry entry={staff[0]} imgURI={Bevilacqua}></StaffEntry>
                  </div>
                  <div className="team-section" id="graduates">
                      <h2> Graduate Students </h2>
                      <StaffEntry entry={staff[0]} imgURI={Bevilacqua}></StaffEntry>
                      <StaffEntry entry={staff[0]} imgURI={Bevilacqua}></StaffEntry>
                      <StaffEntry entry={staff[0]} imgURI={Bevilacqua}></StaffEntry>
                  </div>
                  <div className="team-section" id="undergraduates">
                      <h2> Undergraduate Students </h2>
                      <StaffEntry entry={staff[1]} imgURI={Buckner}></StaffEntry>
                  </div>
              </div>
          </div>
        )
    }
}

export default AboutUs;
