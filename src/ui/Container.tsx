import React from 'react'

const Container:React.FC<{children:React.ReactNode, className: string}> = ({children, className}) => {
  return (
    <div className={'w-full h-[calc(100vh-5rem)] '+className}>
        {children}
    </div>
  )
}

export default Container