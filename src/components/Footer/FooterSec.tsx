import Image from "../ui-components/Image";

export default function FooterSec(){

    return (
        <div className="footer wf-section">
            <div className="medium-container">
                <div className="footer-grid">
                    <div className="last-item-footer">
                        <p className="copyright">© Powered by <a href="https://nbkgroup.ca" target="_blank" className="link" rel="noreferrer">NBKGROUP</a> </p>
                    </div>
                    <div >
                    
                    </div>
                    <div className="footer-flex">
                        <a href="https://facebook.com/" target="_blank" className="read-more-link" rel="noreferrer"><img src="/images/icons/facebook.png" /></a>
                        <a href="https://twitter.com/" target="_blank" className="read-more-link" rel="noreferrer"><img src="/images/icons/twitter.png" /></a>
                        <a href="https://instagram.com/" target="_blank" className="read-more-link" rel="noreferrer"><img src="/images/icons/instagram.png" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}