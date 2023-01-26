import React from 'react';
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import FooterTwo from '../common/footer/FooterTwo';
import Copyright from '../common/footer/Copyright';
import AboutFive from '../elements/about/AboutFive';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import Separator from "../elements/separator/Separator";
import ProgressbarTwo from "../elements/progressbar/ProgressbarTwo";
import BrandFour from "../elements/brand/BrandFour";
import TimelineOne from "../elements/timeline/TimelineOne";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Typed from 'react-typed';
import GalleryOne from "../elements/gallery/GalleryOne";


const PersonalPortfolio = () => {
    const PopupData = [
        {
            id: "01",
            image: "./images/certificate/01.jpg",
            popupLink: [
                './images/certificate/01.jpg',
            ],
        },
        {
            id: "02",
            image: "./images/certificate/02.jpg",
            popupLink: [
                './images/certificate/02.jpg',
            ],
        },
        {
            id: "03",
            image: "./images/certificate/03.jpg",
            popupLink: [
                './images/certificate/03.jpg',
            ],
        },
        {
            id: "04",
            image: "./images/certificate/04.jpg",
            popupLink: [
                './images/certificate/04.jpg',
            ],
        },
        {
            id: "05",
            image: "./images/certificate/05.jpg",
            popupLink: [
                './images/certificate/05.jpg',
            ],
        },
        {
            id: "06",
            image: "./images/certificate/06.jpg",
            popupLink: [
                './images/certificate/06.jpg',
            ],
        },
        {
            id: "07",
            image: "./images/certificate/07.jpg",
            popupLink: [
                './images/certificate/07.jpg',
            ],
        },
        {
            id: "08",
            image: "./images/certificate/08.jpg",
            popupLink: [
                './images/certificate/08.jpg',
            ],
        },
        {
            id: "09",
            image: "./images/certificate/09.jpg",
            popupLink: [
                './images/certificate/09.jpg',
            ],
        },

    ]
    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 100,
        })
    }
    return (
        <>
            <SEO title="Tattape" />
            <main className="page-wrapper">

                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-perosonal-portfolio height-850 bg_image" data-black-overlay="1" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/landing.jpg)` }}>
                    <div className="container">
                        <div className="row row--30 align-items-center">
                            <div className="col-12">
                                <div className="inner text-center">

                                    <h1 className="title">Hello! I'm <br />
                                        <Typed className="theme-gradient"
                                            strings={[
                                                "Tattape Sonklin",
                                                "Com",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        /></h1>
                                    <div className="button-group mt--30">
                                        <a className="btn-default round btn-border btn-large" href='#contact-part' onClick={handleClick}>Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <AboutFive />

                {/* Start Brand Area  */}
                <div className="rwt-brand-area pb--90 mt_dec--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <BrandFour brandStyle="brand-style-2 variation-2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area  */}

                {/* Start Portfolio Area  */}
                <div id="portfolio-part" className="rwt-portfolio-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Project"
                                    title="Check My Recent Works!"
                                    description="Provide Design and Develop service for <br /> Web Application, Application, System etc."
                                />
                            </div>
                        </div>
                        <PortfolioOne Column="col-lg-4 col-md-6 col-12 mt--30 portfolio" />
                    </div>
                </div>
                {/* End Portfolio Area  */}

                {/* Start Timeline Area  */}
                <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Education"
                                    title="My Education."
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 mt--50">
                                <TimelineTwo classVar="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rwt-timeline-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Experience"
                                    title="Working Experience."
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <TimelineOne />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Timeline Area  */}

                {/* Start Certificate Area  */}
                <div className="rwt-gallery-area rn-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb--20">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Gallery"
                                    title="Certificate and Training."
                                    description=""
                                />
                            </div>
                        </div>
                        <div className="row mt_dec--30 row--15">
                            {PopupData.map((item) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" key={item.id}>
                                    <GalleryOne galleryItem={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Certificate Area  */}

                <Separator />
                {/* Start Elements Area  */}
                <div id="skills-part" className="rwt-about-area rn-section-gap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <SectionTitle
                                    textAlign="text-left"
                                    radiusRounded=""
                                    subtitle="See my All Skill."
                                    title="My Working Skill"
                                    description="Provide Design and Develop service for <br /> Web Application, Application, System etc."
                                />
                            </div>
                            <div className="col-lg-6">
                                <div className="rbt-progress-style-1">
                                    <ProgressbarTwo />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* End Elements Area  */}
                <Separator />
                <FooterTwo />
                <Copyright />
            </main>
        </>
    )
}
export default PersonalPortfolio;