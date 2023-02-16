import { Grid } from "@nextui-org/react";
import Button from "../Button";
import Image from "../Image";

interface Props {
    title: string
    description: string
    image: string
}

export default function WorkCard(props: Props){

    let {title, image, description}:{title: string, image: string, description: string} = props;

    return (
        <div role="listitem" className="w-dyn-item">
            <a style={{opacity: 1}} className="portfolio-wrapper w-inline-block">
                <div>
                    {image && <Image className="work-image" src={image} style={{}} />}
                </div>
                <div className="work-flex-small">
                    <div>
                        <h3 className="project-title">Donec mide</h3>
                        <p className="category">Landscaping</p>
                    </div>
                    <div>
                        <div className="button">View Project</div>
                    </div>
                </div>
            </a>
        </div>
    )
}