import Link from "next/link";
import Image from "../ui-components/Image";
import Input from "../ui-components/Input";
import { SendButton } from "./SendButton";
import { SendIcon } from "./SendIcon";


const Footer = () => {


    return (
        <footer className="footer-top">
            <div className="container">
                <div className="grid-3-columns">
                   
                    <div className="footer-first">
                        <div>
                            <Image src="" />
                        </div>
                       <ul role="list" className="footer-list">
                            <li role="listitem" className="footer-title2"><Link href="/about">About</Link></li>
                            <li className="footer-title2"><Link href="/projects">Projects</Link></li>
                            <li className="footer-title2"><Link href="/wedo">What We Do</Link></li>
                            <li className="footer-title2"><Link href="/services">Services</Link></li>
                            <li className="footer-title2"><Link href="/jobs">Jobs</Link></li>
                       </ul>
                    </div>
                    <div>
                        <h4 className="contact-title">Ontario</h4>
                        <p style={{fontSize: "16px"}}>438 Marine Parade &nbsp; <br />Elwood, Victoria&nbsp; <br />P.O Box 3184 </p>
                        <p className="paragraph-5px">CONTACT</p>
                        <p>hello@nbkgroup.ca</p>
                    </div>
                    <div>
                        <h4 className="contact-title">newsletter</h4>
                        <p style={{fontSize: "16px"}}>Subscribe our newsletter to get more free design course and resource </p>
                        <Input 
                            name="email"
                            placeholder="Enter your email"
                            clearable
                            contentRightStyling={false}
                            contentRight={<SendButton>
                                <SendIcon />
                            </SendButton>} label={""} required={false}/>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;