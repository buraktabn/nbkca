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
export default function Input(props: Props){

    return (
        <div style={{width: "100%"}}>
            <InputN style={{width: "100%"}}  {...props}  />
        </div>
    )
}