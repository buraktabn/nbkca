import { posts, works } from "@/services/app";
import Posts from "../Posts";
import Works from "../Works";


export default function ProjectOther({title}: any){

    return (
        <Works
            title={title}
            items={works} 
        />
    )
}