import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-[rgb(var(--foreground-rgb))] opacity-50 mt-16 px-8 lg:px-32">
        <div className={`${inter.className} py-8 flex flex-row items-center justify-between text-base text-[rgb(var(--foreground-rgb))]`}>
            {/* Left side: Copyright */}
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            
            {/* Right side: Branding/Author */}
            <div className="flex items-center">
                Built with <span className="text-red-500 px-1 text-xl">&hearts;</span> 
                by&nbsp;<span className="font-semibold underline underline-offset-4"> Amin Isazadeh</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
