import React, { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import Timeline from "./../../components/Timeline/Timeline";
import './starry_sky.css';
import './Home.css';

const D3 = require('./../../assets/d3_half_depolyed_4k.png');
const ADAMUS = require('./../../assets/logo.png');
const NASA = require('./../../assets/nasa_logo.png');

const Home = () => {
    return (
        <div className="App">

            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>

            <div className="section1">
                <div className="row" style={{height:"100vh"}}>
                    <div className="flex-column-65 col-home-left">
                        <div className="homepage-content">
                            <header className="page-name">D3 CubeSat</header>
                            <div className="page-name-description">ADvanced Autonomous MUltiple Spacecraft laboratory</div>
                            <div className="launch-date">Expected Launch: Q3 2021</div>
                        </div>
                    </div>

                    <div className="d3-img">
                        <img src={D3} alt="D3 CubeSat with booms deployed at ~15%."/>
                    </div>
                </div>

                <section className="scroll-arrow">
                    <ScrollLink to="section2" spy={true} smooth={true} offset={-70} duration= {500}></ScrollLink>
                </section>
            </div>
            <div className="section2" id="Mission">
                <header><ScrollLink to="section2" spy={true} smooth={true} offset={-70} duration= {500}> Meet the Mission </ScrollLink></header>
                <div className="section2-description"> 
                    <p>
                        The drag de-orbit device (or D3) consists of four retractable tape-spring booms inclined at 20 degrees relative to 
                        the face of the satellite to which the D3 is attached as shown in Figure 1. A zoomed in view of the D3 device and an 
                        expanded view of one of the D3 deployers are shown in Figure 2 and Figure 3. The complete design of the D3 and the 
                        simulations utilized to inform this design are detailed by Guglielmo et al. [1]. In summary, the ”dart” configuration 
                        of the D3 booms allows the host satellite to aerodynamically stabilize such that the satellite z-axis (Figure 1) is 
                        aligned with the velocity vector. Because the booms are 3.7 m long and about 4 cm wide, significant aerodynamic torques 
                        are created, facilitating aerodynamic stability up to an altitude of 700 km. The length of the booms and the ability 
                        to actuate each boom independently also allows two booms opposite each other to be partially retracted to create a 
                        clear minimum moment of inertia axis along the two deployed booms.
                    </p>
                </div>

                <img src={ADAMUS} alt="ADAMUS Lab Logo" style={{width:"350px"}}/>
                <img src={NASA} alt="NASA Logo" style={{width:"350px"}}/>

                <Timeline/>

            </div>
        </div>
    );
};

export default Home;
