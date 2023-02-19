import { Grid } from "@nextui-org/react";

import Button from "@/components/ui-components/Button"

export default function HeroSlider(){

    return (
        <div className="hero">
            <div className="max-w-hero" >
                <div style={{width: "100%"}} >
                    <h1 className="title-1">Build.<br /><span className="image-span"><br /></span>Invest. Innovate.</h1>
                </div>
                <div style={{width: "100%", display: "flex"}}>
                    <Button label="Contact us" size="lg" color="" style={{ border: "1px #1A1B1F inset"}}  />
                    <Button label="Our Services" size="lg" color="" style={{marginLeft: "15px", border: "1px #1A1B1F inset"}} />
                </div>
            </div>
            <div className="hero-photo" style={{
                backgroundImage: `url('/images/30ebfbd2-b113-de0e-04ca-62149e5ae34d-e0473f29.png')`
            }}>
                {/* <img width={716} height={952} src="/images/30ebfbd2-b113-de0e-04ca-62149e5ae34d-e0473f29.png" /> */}
            </div>
        </div>
    )
}