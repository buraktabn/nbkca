
import { Textarea as TextareaN } from "@nextui-org/react";

interface Props {
    label: string
    maxLength?: number
    className?: string
    placeholder?: string
    name?: string
    type?: string
    required: boolean
}
export default function Textarea({required, label, className, name, type, maxLength, placeholder}: Props){

    return (
        <div style={{width: "100%"}}>
            <TextareaN required={required} minRows={4} label={label} className={className} name={name} placeholder={placeholder} maxLength={maxLength} style={{width: "100%"}}  />
        </div>
    )
}