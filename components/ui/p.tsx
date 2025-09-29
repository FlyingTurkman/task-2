import { HTMLAttributes } from "react";













export function P({className, ...props}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
    className={`${className} leading-7 [&:not(:first-child)]:mt-6`}
    {...props}
    />
  )
}