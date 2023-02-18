import Link from "next/link";
import Image from "../ui-components/Image";

const Logo = ({src, name}:{src?: string, name: string}) => {

    return <Link href="/"> {src ? (  <Image src={src} /> ) : (<p style={{color: "#FFF", marginTop: "10px"}}>{name}</p>)} </Link>
}


export default Logo;