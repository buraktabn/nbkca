import { Component } from "react";
import { Button, styled } from '@nextui-org/react';

const ButtonN = ({className, label, size, color, style}:{className?: string, label?: string, size?: any, color?: any, style?: any}) => {
    const MyStyledButton = styled(Button, {
        boxShadow: '$md', // shadows.md
        variants: {
            size: {
                mysize: {
                    height: '$12', // space[12]
                    borderRadius: '$xs' // radii.xs
                }
            },
            color: {
                [color]: {
                    background: '#1A1B1F', // colors.green800
                    color: '#FFF', 
                    border: '1px #1A1B1F inset',
                    '&:hover': {
                        background: '#000000',
                        border: '1px #FFF inset',
                        color: '#fff',
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