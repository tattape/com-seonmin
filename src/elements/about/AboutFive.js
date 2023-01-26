import React from 'react';
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

const AboutFive = () => {
    return (
        <div className="about-style-5 rn-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row row--0 about-wrapper align-items-center theme-shape">
                            <div className="col-lg-6">
                                <div className="thumbnail">
                                    <img src="./images/about/tattape_picture.png" alt="About Images" />
                                </div>
                            </div>
                            <div className="col-lg-6 mt_md--30 mt_sm--30">
                                <div className="content">
                                    <div className="inner">
                                        <h4 className="title">I'm Developer</h4>
                                        <Typed className="theme-gradient"
                                            strings={[
                                                "Computer Engineer.",
                                                "Design and Development.",
                                                "Full Stack.",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                        <ul className="contact-address">
                                            <li><FiMail /> tsc_com@hotmail.com</li>
                                            <li><FiPhone /> (+66) 97 941 0486</li>
                                            <li><FiMapPin /> Phrae, Thailand</li>
                                        </ul>
                                        <div className="download-button mt--20">
                                            <a className="btn-read-more" href="./images/portfolio/resume-MR.TATTAPE.pdf" target="_blank" download><span>Download My CV</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutFive;