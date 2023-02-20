import { urlFor } from "@/lib/sanity";
import moment from "moment";
import Image from "../ui-components/Image";

interface Props {
    title?: string,
    items: Type.Post[]
    limit?: number
}

const Posts = ({limit, title, items}: Props) => {

    return (
      <div className="container">
        <div className="primary-wrapper center">
            <div className="h-line"></div>
            <div>
                <h3 className="primary-title">{title || "Latest news"}</h3>
            </div>
        </div>
        <div className="margin-60px">
            <div className="w-dyn-list">
                <div role="list" className="blog-grid w-dyn-items">
                    {items?.slice(0, limit || items.length).map((item, index) => <PostItem key={index} item={item} />)}
                </div>
            </div>
        </div>
      </div>
    )
}

function PostItem({item}: {item: Type.Post}){

    let { title, slug, coverImage, date, category } = item;

    return (
        <div role="listitem" className="w-dyn-item">
            <div style={{
                opacity: 1,
                transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, 
                transformStyle: `preserve-3d`,
            }}>
                <a href="#" className="blog-image w-inline-block hd-image">
                    <Image 
                        src={urlFor(coverImage?.asset._ref as string).auto('format').fit('max').width(460).height(370).toString()} 
                        loading="lazy" 
                        alt="" 
                        sizes="(max-width: 991px) 90vw, 43vw"
                        className="blog-image" />
                </a>
                <div className="blog-content">
                    <div>
                        <a href={`/post-category/${category}`} className="category-tag">{category}</a>
                    </div>
                        <a href={`/post/${slug?.current}`} className="blog-title">{title}</a>
                    <div className="margin-20px">
                        <div className="flex-blog-small">
                            <a href={`/post/${slug?.current}`} className="read-more-link">Read More</a>
                            <p className="category _1">{moment(date).format("ll")}</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Posts;