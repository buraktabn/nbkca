import Button from "../ui-components/Button";
import Input from "../ui-components/Input";
import Textarea from "../ui-components/Textarea";

const Qoute = () => {


    return (
       
        <div className="container">
            <div className="grid-2-columns">
              
                <div >
                    <div className="margin-40px" style={{marginBottom:"40px"}}>
                        <div>
                            <h3 className="primary-title">NEED A QUOTE</h3>
                        </div>
                        <div className="h-line"></div>

                    </div>
                    <div className="primary-wrapper">
                        <div className="w-form" style={{width:"100%"}}>
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" aria-label="Email Form">
                                <div className="contact-flex">
                                    <Input required={true} label="Fill Name*" type="text" className=" w-input" name="name" placeholder=""/>
                                </div>
                                <div data-w-id="68463937-f107-52c0-80a1-ca639e88dc64"  className="contact-flex">
                                    <Input required={true} label="Email Address*" type="email" className="w-input" name="Email" placeholder=""  />
                                </div>
                                <div className="contact-flex">
                                    <Input required={true} label="Phone number*" type="email" className="padding_15px w-input" name="Company" placeholder=""  />
                                </div>
                                <div className="contact-flex vertical">
                                    <Textarea label="How can we help you?*" required={true} name="Text-Area" maxLength={5000} placeholder=""  className="contact-field area w-input" />
                                </div>
                                <div data-w-id="68463937-f107-52c0-80a1-ca639e88dc71" className="button-flex">
                                    <Button label="Send Message" className="button full w-button" style={{width: "100%"}} />
                                </div>
                            </form>
                            {/* <div className="success-message w-form-done" tabIndex={-1} role="region" aria-label="Email Form success">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="error-message w-form-fail" tabIndex={-1} role="region" aria-label="Email Form failure">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div> */}
                        </div>
                    </div>
                
                </div>
                <div >
                    <img src="https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b83692301d78e489b70b69_photo-4.jpg" loading="lazy" sizes="(max-width: 991px) 90vw, 40vw" srcSet="https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b83692301d78e489b70b69_photo-4-p-500.jpg 500w, https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b83692301d78e489b70b69_photo-4-p-800.jpg 800w, https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b83692301d78e489b70b69_photo-4-p-1080.jpg 1080w, https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b83692301d78e489b70b69_photo-4.jpg 1572w" alt="" className="image" />
                </div>
            </div>
        </div>
    )
}

export default Qoute;