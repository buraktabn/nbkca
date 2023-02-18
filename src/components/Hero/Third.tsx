

export default function HeroThird({title, description, image, options}: any){

    return (
        <div className="hero third">
            <div className="max-w-hero project-max">
            <div>
                <h1 className="title-1 for-work-page">{title}</h1>
            </div>
            <div className="margin-40px">
                <div className="primary-wrapper">
                    <div className="h-line" />
                    <div>
                        <h3 className="primary-title smaller">Project Details</h3>
                    </div>
                </div>
                <div className="margin-40px">
                    <div className="div-block">
                        {options?.map((option: any, index: any) => {
                            return (
                                <div className="w-clearfix" key={index}>
                                    <div className={`project-details  ${[1, 3, 5, 7].includes(index) ? 'white' : ''}`}>
                                        <p className="project-sub-title">{option.label}</p>
                                    </div>
                                    <div className={`project-details no-line ${[1, 3, 5, 7].includes(index) ? 'white' : ''}`}>
                                        <p className="project-sub-title">{option.value}</p>
                                    </div>
                                </div>
                            )
                        })}
                    
                    </div>
                </div>
            </div>
            </div>
            <div style={{backgroundImage: `url(${image})`}} className="hero-photo" />
        </div>
    )
}