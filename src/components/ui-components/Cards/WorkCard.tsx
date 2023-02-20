/* eslint-disable jsx-a11y/alt-text */
import { Grid } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button";
import Image from "../Image";

interface Props extends Type.Work {
    title: string
    description: string
    image: string
}

export default function WorkCard(props: Props){

    const router = useRouter()

    let {title, slug, image, description} = props;

    return (
        <div role="listitem" className="w-dyn-item">
            <div style={{opacity: 1}} className="portfolio-wrapper w-inline-block">
                <div>
                    {image && <Image className="work-image" src={image} style={{}} />}
                </div>
                <div className="work-flex-small">
                    <div>
                        <h3 className="project-title">Donec mide</h3>
                        <p className="category">Landscaping</p>
                    </div>
                    <div>
                        <Link className="button" href={`/project/${slug}`}>View Project</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}