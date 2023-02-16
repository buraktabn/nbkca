import Image from "../ui-components/Image";


const YellowArea = () => {

    return (
       
        <div className="container">
            <div className="quote-circle">
                <Image
                    src="/images/icons/icons8-get-quote-192.png" 
                    loading="lazy" width="40" alt="" className="quote-image" />
            </div>
            <div className="margin-30px">
                <h2 className="quote-title">Our promise as a contractor is to build community value into every project while delivering professional expertise, exceptional customers service &amp; quality construction.<br /></h2>
            </div>
        </div>

    )
}


export default YellowArea;