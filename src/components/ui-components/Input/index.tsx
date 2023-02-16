
import { Input as InputN } from "@nextui-org/react";

interface Props {
    placeholder?: string
    name?: string
    type?: string
}
export default function Input({name, type, placeholder}: Props){

    return (
        <div>
            <InputN name={name} type={type} placeholder={placeholder}  />
        </div>
    )
}