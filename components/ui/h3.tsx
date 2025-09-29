import { HTMLAttributes } from "react";













export function H3({className, ...props}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
    className={`${className} scroll-m-20 text-2xl font-semibold tracking-tight`}
    {...props}
    />
  )
}