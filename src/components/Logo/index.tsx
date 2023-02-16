const Logo = ({src, name}:{src?: string, name: string}) => {

    return src ? (
        <img src={src} />
    ) : (<p>{name}</p>)
}


export default Logo;