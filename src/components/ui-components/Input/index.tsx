


interface Props {
    placeholder?: string
    name?: string
    type?: string
}
export default function Input({name, type, placeholder}: Props){

    return (
        <div>
            <input name={name} type={type} placeholder={placeholder}  />
        </div>
    )
}