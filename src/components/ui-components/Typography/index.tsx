import React from 'react';

interface Props {
    children: React.ReactNode
    className: string
}

const Typography = ({className, children}: Props) => {

    return (
        <p className={className}>{children}</p>
    )
}

export default Typography;