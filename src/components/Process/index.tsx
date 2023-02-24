import ButtonN from "../ui-components/Button";

export default function Process(){
    return (
        <div className="container">
            <div className="grid-2-columns">
                <div className="margin-40px" style={{margin:"55px 0 "}}>
                
                    <div className="primary-wrapper">
                        <div className="h-line"></div>
                        <div> <h3 className="primary-title">Promise &amp; Values</h3> </div>
                    </div>
                    <div className="h-line"></div>
                    <div className="process-subtitle">
                        Success comes from process 
                    </div>
                    <div className="process-image" style={{
                        background: "url(/images/abstract-minimalistic-background.png), url(/images/abstract-minimalistic-background.png)",
                    }}>
                    </div>
                </div>
                <div className="primary-wrapper">
                    <div className="process-section">
                        <div className="process-item">
                            <div className="item-title-group"><p className="item-dot" /> <p className="item-title"> Goal and vision</p></div>
                            <div className="item-devider" />
                            <p className="item-description" >Every project starts by discovering where you are—and where you want to go. By understanding what you want, we can start to build your vision.</p>
                        </div>
                        <div className="process-item">
                        <div className="item-title-group"><p className="item-dot2" /> <p className="item-title"> Goal and vision</p></div>
                            <div className="item-devider" />
                            <p className="item-description" >Every project starts by discovering where you are—and where you want to go. By understanding what you want, we can start to build your vision.</p>
                        </div>
                        <div className="process-item">
                        <div className="item-title-group"><p className="item-dot3" /> <p className="item-title">Goal and vision</p></div>
                            <div className="item-devider" />
                            <p className="item-description" >Every project starts by discovering where you are—and where you want to go. By understanding what you want, we can start to build your vision.</p>
                        </div>
                        <div className="item-button" >
                            <ButtonN label="See how we work" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}