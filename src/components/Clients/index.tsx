/* eslint-disable jsx-a11y/alt-text */
import Image from "../ui-components/Image";



const Clients = () => {


    return (
        <div className="container">
            <div className="grid-2-columns">
                <div className="margin-40px" style={{marginBottom:"40px"}}>
                    <div style={{marginBottom: "15px"}}>
                        <h3 className="primary-title">Our Expertise</h3>
                    </div>
                    <div className="h-line"></div>
                    <div style={{
                        padding: "25px 0",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",

                        color: "#777E91",
                        }}>
                        As you might expect of a company that began as a high-end interiors contractor, we pay strict attention to the smallest details. As we`ve grown and evolved into a general contractor, our commitment to exceptional quality has never wavered. 
                    </div>

                </div>
                <div className="primary-wrapper">
                    <div style={{
                        width: "544px",
                        height: "396px",
                        
                        /* Neutrals/2 */
                        
                        background: "#23262F",
                        /* /Shadow/01 */
                        
                        boxShadow: "0px 64px 64px -48px rgba(0, 0, 0, 0.1)",
                        borderRadius: "16px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            padding: "0px",
                            gap: "40px",

                            width: "416px",
                            height: "268px",
                        }}>
                    
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                padding: "0px",
                                gap: "16px",
                            
                            }}>
                                <div style={{
                                    width: "48px",
                                    height: "48px",
                                    background: "#45B36B",
                                    borderRadius: "25px"
                                }}><Image src="" /></div>
                                <div>
                                <p style={{
                                    fontWeight: 500,
                                    fontSize: "14px",
                                    lineHeight: "24px",

                                    color: "#FCFCFD"
                                }}>Isabelle O`Conner</p>
                                <p style={{
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    color: "#777E91",
                                }}>BA at Robin</p>
                                </div>
                            </div>
                            <p style={{

                                fontWeight: 400,
                                fontSize: "24px",
                                lineHeight: "32px",
                                letterSpacing: "-0.01em",
                                color: "#FCFCFD",
                                textTransform: "none"
                            }}>Stacks is the cleanest design system I’ve used. It helps a lot of projects done without thinking. Nice Work!</p>
                            <div>
                                ...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Clients;