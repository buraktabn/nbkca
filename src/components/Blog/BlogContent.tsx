import Link from "next/link";


export default function BlogContent({text}: any){

    return (

        <div className="container">
            <div className="blog-page-wrapper">
                <div>
                    <div style={{opacity: 1}} className="w-richtext" dangerouslySetInnerHTML={{ __html: text}} />
                    <div className="margin-30px">
                        <Link href="/blog" className="button w-button">Back to Blog</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}