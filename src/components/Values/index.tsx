import { Grid } from "@nextui-org/react";
import Title, {ContainerTitle} from "../ui-components/Title";
import Typography from "../ui-components/Typography";


const Values = ({title, label, description, items}: {title: string, label: string, description: string, items:any}) => {

    return (
        <div className="main-grid">
            <div className="about-image-wrapper">
                <div className="image-element">
                    <img 
                        src="/images/cards/1.png" 
                        loading="lazy" 
                        sizes="(max-width: 479px) 96vw, (max-width: 767px) 95vw, (max-width: 991px) 94vw, 40vw" 
                        alt="" className="image" />
                </div>
                <div className="image-element">
                    <img 
                        src="https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b825eb7ab76557b8a21921_photo-2.jpg" 
                        loading="lazy" 
                        sizes="(max-width: 479px) 96vw, (max-width: 767px) 95vw, (max-width: 991px) 94vw, 40vw" 
                        srcSet="https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b825eb7ab76557b8a21921_photo-2-p-500.jpg 500w, https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b825eb7ab76557b8a21921_photo-2-p-800.jpg 800w, https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b825eb7ab76557b8a21921_photo-2-p-1080.jpg 1080w, https://assets.website-files.com/63b80132c70d8cb5d1473f05/63b825eb7ab76557b8a21921_photo-2.jpg 1572w" 
                        alt="" 
                        className="image" />
                </div>
            </div>
            <div className="sticky-100vh">
                <div className="max-w-hero">
                    <div className="primary-wrapper">
                        <div className="h-line"></div>
                        <div> <h3 className="primary-title">Promise &amp; Values</h3> </div>
                    </div>
                    <div className="margin-50px">
                        {items?.map((item: any, index: any) => <ListItem key={index} {...item} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

function ListItem({title, description, icon}: any){


    return (
        <div className="margin-30px">
            <div className="w-clearfix">

                <div className="info-icon">
                    <img src={icon} loading="lazy" alt="" className="value-icon smaller" />
                </div>
                <div className="info-content no-margin">
                    <h4 className="service-title-2">{title}</h4>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    )
}


export default Values;