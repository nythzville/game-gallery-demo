import classNames from "classnames"
import React from "react"

type CardProps = { 
    className?: string;
    children: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
    return (
        <div className={classNames('card', className)}>
            {children}
        </div>
    )
}