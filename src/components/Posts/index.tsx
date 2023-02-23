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

    return (
        <div role="listitem" className="w-dyn-item">
            <div style={{
                opacity: 1,
                transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`, 
                transformStyle: `preserve-3d`,
            }}>
                <a href="#" className="blog-image w-inline-block hd-image">
                    <Image 
                        src={item?.coverImage ? urlFor(item?.coverImage?.asset._ref as string).auto('format').fit('max').width(460).height(370).toString() : ""} 
                        loading="lazy" 
                        alt="" 
                        sizes="(max-width: 991px) 90vw, 43vw"
                        className="blog-image" />
                </a>
                <div className="blog-content">
                    <div>
                        <a href={`/post-category/${item?.category}`} className="category-tag">{item?.category}</a>
                    </div>
                        <a href={`/post/${item?.slug?.current}`} className="blog-title">{item?.title}</a>
                    <div className="margin-20px">
                        <div className="flex-blog-small">
                            <a href={`/post/${item?.slug?.current}`} className="read-more-link">Read More</a>
                            <p className="category _1">{moment(item?.date).format("ll")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Posts;