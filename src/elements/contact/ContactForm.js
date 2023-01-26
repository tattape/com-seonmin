import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Loading = () => {
    return (
        <p className="success-message">Sending...</p>
    )
}

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you back soon.</p>
    )
}

function ContactForm({ props, formStyle }) {
    const [result, showresult] = useState(false);
    const [loading, showloading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        showloading(true)

        emailjs
            .sendForm(
                'service_cgphwrw',
                'template_cxh6olm',
                e.target,
                '9sceFMpXFLPoGMFzV'
            )
            .then((result) => {
                if (result.text) {
                    showresult(true);
                    showloading(false)
                    e.target.reset();
                }
            },
                (error) => {
                    console.log(error.text);
                }
            );


    };

    setTimeout(() => {
        showresult(false);
    }, 5000);

    return (
        <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
            <div className="form-group">
                <input
                    type="text"
                    name="fullname"
                    placeholder="Your Name"
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    required
                />
            </div>


            <div className="form-group">
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                />
            </div>

            <div className="form-group">
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                >
                </textarea>
            </div>

            <div className="form-group">
                <button className="btn-default btn-large">Submit Now</button>
            </div>

            <div className="form-group">
                {loading ? <Loading /> : null}
                {result ? <Result /> : null}
            </div>
        </form>
    )
}
export default ContactForm;
