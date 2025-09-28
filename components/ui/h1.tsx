'use client'

import { HTMLAttributes } from "react"












export default function H1({className, ...props}: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1 
        className={`${className} scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance`}
        {...props}/>
    )
}