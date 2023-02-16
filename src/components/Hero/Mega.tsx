

export default function HeroMega({title, description}: any){

    return (
        <div className="hero-image inner">
           <div className="container _1200px">
                <div className="max-w-width _2 center">
                    <div className="category-flex">
                        <div className="data-created white">{title}</div>
                    </div>
                    <h2 className="title-1 for-blog-page">{description}</h2>
                </div>
            </div>
            <div 
                style={{
                    backgroundImage: 'url("https://assets.website-files.com/63b80132c70d8c034d473f37/63b83f78ae20f795a99ad2d3_blog-1.jpg")', 
                    willChange: 'transform', 
                    transform: 'translate3d(0px, 0.02px, 0px) scale3d(1.34993, 1.34993, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', 
                    transformStyle: 'preserve-3d'
                }} 
                className="background-overlay blog-photo" />
        </div>
    )
}