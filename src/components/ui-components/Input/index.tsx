import React from "react";
import { Input as InputN } from "@nextui-org/react";

interface Props {
    label: string
    className?: string
    placeholder?: string
    name?: string
    type?: string
    value?: string
    required: boolean
    labelLeft?: string | React.ReactNode;
    labelRight?: string | React.ReactNode;
    contentLeft?: React.ReactNode;
    contentRight?: React.ReactNode;
    contentRightStyling?: boolean
    clearable: any

}
export default function Input({value, label, className, name, type, placeholder, required, contentRight}: Props, props: Props){

    return (
        <div style={{width: "100%"}}>
            <InputN value={value} label={label} className={className} name={name} type={type} placeholder={placeholder} contentRight={contentRight} style={{width: "100%"}}  {...props}  />
        </div>
    )
}