import { HTMLAttributes } from "react";













export function H2({className, ...props}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 
    className={`${className} scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0`}
    {...props}
    />
  )
}