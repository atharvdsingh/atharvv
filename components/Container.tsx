import React from 'react'

export default function Container({children,className}:{children:React.ReactNode,className?:string}) {
  return (
    <div className={`max-w-5xl w-full p-4 mx-auto ${className}`} >{children}</div>
  )
}
