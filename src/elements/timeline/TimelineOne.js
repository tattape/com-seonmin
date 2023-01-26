import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TimelineData = [
    {
        id: "1",
        date: "4 Apr, 2022 - Now",
        title: "Engineer at Western Digital Storage Technologies Thailand.",
        description: "Front-End and Back-End",
        image: "wd_logo.png",
        workingStep: [
            {
                stepTitle: "Title",
                stepDescription: "Test Engineer",
            },
            {
                stepTitle: "Programming",
                stepDescription: "React.js, Node.js, Socket.io, etc.",
            },
        ]
    },
    {
        id: "1",
        date: "15 Nov, 2021 - 4 Mar, 2022",
        title: "Internship at Western Digital Storage Technologies Thailand.",
        description: "Application Development using by PWA Technology (Front-End) and integrate with APIs.",
        image: "wd_logo.png",
        workingStep: [
            {
                stepTitle: "Programming",
                stepDescription: "React.js, Node.js, Socket.io",
            },
            {
                stepTitle: "Task",
                stepDescription: "Virtual Production, Video call and chat system.",
            },
        ]
    },
    {
        id: "2",
        date: "2017-2018",
        title: "Setup online shop on Shopify (freelance).",
        description: "Configure the store settings according to the items that are responsible.",
        image: "artsadd_logo.jpg",
        workingStep: [
            {
                stepTitle: "Platform",
                stepDescription: "Shopify",
            },
            {
                stepTitle: "",
                stepDescription: "",
            },
        ]
    },
    {
        id: "3",
        date: "2017-2018",
        title: " Upload product to online store (freelance).",
        description: "Create the product and upload graphic picture to the product.",
        image: "shopify_logo.png",
        workingStep: [
            {
                stepTitle: "Platform",
                stepDescription: "Artsadd",
            },
            {
                stepTitle: "",
                stepDescription: "",
            },
        ]
    },
    {
        id: "4",
        date: "2016-2017",
        title: "Admin and Coach at KK Music Academy.",
        description: "Admin facebook page and vocal coach assistant. Video editing, Photographer",
        image: "kk_logo.jpg",
        workingStep: [
            {
                stepTitle: "Development",
                stepDescription: "Web develop using by Wix.com.",
            },
            {
                stepTitle: "Activity",
                stepDescription: "Study course saler, team management and organize a singing workshop with KK Academy team.",
            },
        ]
    },
]

const TimelineOne = () => {
    const handleClick = (e) => {
        e.preventDefault()
        const target = "#contact-part"
        const location = document.querySelector(target).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 100,
        })
    }
    return (
        <div className="rn-timeline-wrapper timeline-style-one position-relative">
            <div className="timeline-line"></div>
            {/* Start Single Timeline  */}

            {TimelineData.map((data, index) => (
                <div className="single-timeline mt--50" key={index}>
                    <div className="timeline-dot">
                        <div className="time-line-circle"></div>
                    </div>
                    <div className="single-content">
                        <div className="inner">
                            <div className="row row--30 align-items-center">
                                <div className="order-2 order-lg-1 col-lg-6 mt_md--40 mt_sm--40">
                                    <div className="content">
                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                            <span className="date-of-timeline">{data.date}</span>
                                        </ScrollAnimation>

                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                            <h2 className="title">{data.title}</h2>
                                        </ScrollAnimation>

                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            animateOnce={true}>
                                            <p className="description">{data.description}</p>
                                        </ScrollAnimation>

                                        <div className="row row--30">
                                            {data.workingStep.map((data, index) => (
                                                <div className="col-lg-6 col-md-6 col-12" key={index}>
                                                    <div className="working-list">
                                                        <ScrollAnimation
                                                            animateIn="fadeInUp"
                                                            animateOut="fadeInOut"
                                                            animateOnce={true}>
                                                            <h5 className="working-title">{data.stepTitle}</h5>
                                                        </ScrollAnimation>

                                                        <ScrollAnimation
                                                            animateIn="fadeInUp"
                                                            animateOut="fadeInOut"
                                                            animateOnce={true}>
                                                            <p>{data.stepDescription}</p>
                                                        </ScrollAnimation>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="read-morebtn">
                                            <ScrollAnimation
                                                animateIn="fadeInUp"
                                                animateOut="fadeInOut"
                                                animateOnce={true}>
                                                <a className="btn-default btn-large round" href='#contact-part' onClick={handleClick}><span>Contact Me</span></a>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                </div>
                                <div className="order-1 order-lg-2 col-lg-6">
                                    <div className="thumbnail">
                                        <img className="w-100" src={`./images/timeline/${data.image}`} alt="Corporate React Template" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* End Single Timeline  */}
        </div>
    )
}

export default TimelineOne;
