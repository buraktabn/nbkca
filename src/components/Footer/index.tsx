import Image from "../ui-components/Image";
import Input from "../ui-components/Input";


const Footer = () => {


    return (
        <footer className="footer-top">
            <div className="container">
                <div className="grid-3-columns">
                   
                    <div>
                        <div>
                            <Image src="" />
                        </div>
                       <ul>
                            <li><a>About</a></li>
                            <li><a>Projects</a></li>
                            <li><a>What We Do</a></li>
                            <li><a>Services</a></li>
                            <li><a>Jobs</a></li>
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
                        <Input name="" placeholder="Enter your email"  />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;