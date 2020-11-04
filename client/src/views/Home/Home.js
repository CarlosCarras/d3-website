import React from 'react';
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
                            <div className="page-name-description"><span>AD</span>vanced <span>A</span>utonomous <span>MU</span>ltiple <span>S</span>pacecraft laboratory</div>
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
                        the face of the satellite. The ”dart” configuration of the D3 booms allows the host satellite to aerodynamically 
                        stabilize such that the satellite z-axis is aligned with the velocity vector. Because the booms are 3.7 m long and 
                        about 4 cm wide, significant aerodynamic torques are created, facilitating aerodynamic stability up to an altitude 
                        of 700 km. The length of the booms and the ability to actuate each boom independently also allows two booms opposite 
                        each other to be partially retracted to create a clear minimum moment of inertia axis along the two deployed booms.
                    </p>
                </div>

                <img src={ADAMUS} alt="ADAMUS Lab Logo"/>
                <img src={NASA} alt="NASA Logo"/>

                <Timeline/>

            </div>
        </div>
    );
};

export default Home;
