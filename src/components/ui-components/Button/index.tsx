import { Component } from "react";
import { Button, styled } from '@nextui-org/react';

const ButtonN = ({className, label, size, color, style}:{className?: string, label?: string, size?: any, color?: any, style?: any}) => {
    const MyStyledButton = styled(Button, {
        boxShadow: '$md', // shadows.md
        variants: {
            // size: {
            //     mysize: {
            //         height: '$12', // space[12]
            //         borderRadius: '$xs' // radii.xs
            //     }
            // },
            color: {
                [color]: {
                    background: '#1A1B1F', // colors.green800
                    color: '#FFF', 
                    border: '1px #1A1B1F inset',
           
                    '&:hover': {
                        backgroundColor: "hsl(0deg 0% 15%)",
                        color: "#FFF",
                        borderColor: "hsl(0deg 0% 15%)",
                        // border: '1px #FFF inset',
                        // color: '#fff',
                        boxShadow: "0 4px 0 0 #252525",
                    },
                    '&:active': {
                        background: '$green200',
                        border: '1px #1A1B1F inset',
                    },
                    '&:focus': {
                        borderColor: '#777E90',
                        border: '1px #1A1B1F inset',
                    },
                }
            }
        }
    });

    return (
        <MyStyledButton className={className} auto size={size} color={color} style={style}> {label} </MyStyledButton>
    )
}

export default ButtonN;