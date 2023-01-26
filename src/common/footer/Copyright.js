import React from 'react'

const Copyright = () => {
    return (
        <div className="copyright-area copyright-style-one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                                {/* <li><a href="#">Privacy Policy</a></li> */}
                                <li><a href="https://www.facebook.com/Tattape.com.Sonklin/" target='_blank'>Facebook</a></li>
                                <li><a href="https://www.instagram.com/com_seonmin/" target='_blank'>Instagram</a></li>
                                <li><a href="#contact-part">Contact Me</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                        <div className="copyright-right text-center text-md-right">
                            <p className="copyright-text">© Tattape Sonklin {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;