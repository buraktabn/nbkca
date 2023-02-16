/* eslint-disable @next/next/no-img-element */


interface Props {
    src?: string
    style?: any
    className?: string
    srcSet?: string
    sizes?: string
    alt?: string
    loading?: "eager" | "lazy" | undefined
    width?: string
}

const Image = ({loading, className, src, style, srcSet, sizes, alt, width}: Props) => {
    return (
        <img 
            className={className} 
            src={src} 
            style={style} 
            loading={loading}
            alt={alt}
            width={width}
            sizes={sizes}
            srcSet={srcSet}
        />
    )

}

export { Image }
export default Image;