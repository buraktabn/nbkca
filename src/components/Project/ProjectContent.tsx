

export default function ProjectContent({text}: any) {


    return (
        <div className="container">
            <div className="_740px-wrapper" dangerouslySetInnerHTML={{ __html:text }} />
        </div>
    )
}