
const Qoute = () => {


    return (
       
        <div className="container">
            <div className="grid-2-columns">
                <div >
                    <img src="https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b83692301d78e489b70b69_photo-4.jpg" loading="lazy" sizes="(max-width: 991px) 90vw, 40vw" srcSet="https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b83692301d78e489b70b69_photo-4-p-500.jpg 500w, https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b83692301d78e489b70b69_photo-4-p-800.jpg 800w, https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b83692301d78e489b70b69_photo-4-p-1080.jpg 1080w, https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b83692301d78e489b70b69_photo-4.jpg 1572w" alt="" className="image" />
                </div>
                <div >
                    
                    <div className="primary-wrapper">
                        <div className="w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" aria-label="Email Form">
                                <div data-w-id="68463937-f107-52c0-80a1-ca639e88dc60" className="contact-flex">
                                    <label htmlFor="name" className="field-label-2">Full Name*</label>
                                    <input type="text" className="contact-field w-input" maxLength={256} name="name" data-name="Name" placeholder="" id="name" />
                                </div>
                                <div data-w-id="68463937-f107-52c0-80a1-ca639e88dc64"  className="contact-flex">
                                    <label htmlFor="Email" className="field-label-2">Email Address*</label>
                                    <input type="email" className="contact-field w-input" maxLength={256} name="Email" data-name="Email" placeholder="" id="Email" />
                                </div>
                                <div data-w-id="68463937-f107-52c0-80a1-ca639e88dc68" className="contact-flex">
                                    <label htmlFor="Company" className="field-label-2">Phone number*</label>
                                    <input type="email" className="contact-field w-input" maxLength={256} name="Company" data-name="Company" placeholder="" id="Company" />
                                </div>
                                <div data-w-id="68463937-f107-52c0-80a1-ca639e88dc6c"  className="contact-flex vertical">
                                    <label htmlFor="Text-Area" className="field-label-2">How can we help you?* <br />
                                    </label>
                                    <textarea name="Text-Area" maxLength={5000} id="Text-Area" data-name="Text Area" placeholder=""  className="contact-field area w-input"></textarea>
                                </div>
                                <div data-w-id="68463937-f107-52c0-80a1-ca639e88dc71" className="button-flex">
                                    <input type="submit" value="Send Message" data-wait="Please wait..." className="button full w-button"/>
                                </div>
                            </form>
                            <div className="success-message w-form-done" tabIndex={-1} role="region" aria-label="Email Form success">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="error-message w-form-fail" tabIndex={-1} role="region" aria-label="Email Form failure">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                    <div className="margin-40px">
                        <div className="h-line"></div>
                        <div>
                            <h3 className="primary-title">NEED A QUOTE</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qoute;