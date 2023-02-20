import Posts from "../Posts";

export default function BlogOther({title, posts}: any){

    return (
        <Posts title={title} limit={2} items={posts} />
    )
}