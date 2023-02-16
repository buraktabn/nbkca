import { posts } from "@/services/app";
import Posts from "../Posts";


export default function BlogOther({title}: any){

    return (
        <Posts title={title} limit={2} items={posts} />
    )
}