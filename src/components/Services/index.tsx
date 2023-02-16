import { Grid } from "@nextui-org/react";
import Button from "../ui-components/Button";
import Image from "../ui-components/Image";
import Title, { ContainerTitle } from "../ui-components/Title";


interface Props {
    title?: string // Context title
    services: Type.Service[]
}

export default function Services(props: Props) {

    let { services, title } = props

    return (

        <div className="container">
            <div className="services-grid">
                {services?.map((service: Type.Service) => Service(service))}
            </div>
        </div>
    )
}


function Service(service: Type.Service){

    let { title, description, image} = service;

    return (
        <div className="service-wrapper">
            <div className="service-photo">
                <Image className="service-image" sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 28vw" src={image}  />
            </div>
            <div className="service-content">
                <h4 className="service-title">{title}</h4>
                <p>{description}</p>
                <div className="margin-20px"><a href="#" className="read-more-link">Read More</a></div>
            </div>
        </div>
    )
}