import React from 'react'

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-8 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
