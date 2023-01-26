import React from 'react';
import ContactForm from "./ContactForm";
import { FiPhone, FiMail } from "react-icons/fi";
import SectionTitle from "../../elements/sectionTitle/SectionTitle";

const ContactOne = () => {
    return (
        <>
            <div className="row row--15">
                <div className="col-lg-12">
                    <div className="rn-contact-address mt_dec--30">
                        <div className="row" style={{ display: 'flex', justifyContent: "center" }}>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiPhone />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact Phone Number</h4>
                                        <p><a href="tel:+66 97 941 0486">(+66) 97 941 0486</a></p>
                                        <p><a >Tattape [Com]</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email Address</h4>
                                        <p><a href="mailto:tsc_com@hotmail.com">tsc_com@hotmail.com</a></p>
                                        <p><a href="mailto:tattape08@gmail.com">tattape08@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Location</h4>
                                        <p>5678 Bangla Main Road, cities 580 <br /> GBnagla, example 54786</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="row mt--40 row--15" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-lg-12 mb--40" >
                    <SectionTitle
                        textAlign="text-center"
                        radiusRounded=""
                        subtitle="or"
                        title="send message."
                        description=""
                    />
                </div>
                <div className="col-lg-7" >
                    <ContactForm formStyle="contact-form-1" />
                </div>
                {/* <div className="col-lg-5 mt_md--30 mt_sm--30">
                    <GoogleMapStyle />
                </div> */}
            </div>
        </>
    )
}
export default ContactOne;