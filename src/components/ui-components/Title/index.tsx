

interface Props {
    title: string
    className: any
}

const Title = ({title, className}: Props) => {

    return (
        <p className={className}>{title}</p>
    )
}

export const ContainerTitle = ({className, title}: Props) => {
    return (
        <p className={className}>{title}</p> 
    )
}

export default Title;