import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-[rgb(var(--foreground-rgb))] opacity-50 mt-16 px-4 sm:px-6 md:px-8 lg:px-32">
      <div
        className={`${inter.className} py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-sm sm:text-base text-[rgb(var(--foreground-rgb))] text-center sm:text-left`}
      >
        {/* Left side: Copyright */}
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        {/* Right side: Branding/Author */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end">
          <span>Built with</span>
          <span className="text-red-500 px-1 text-lg sm:text-xl">&hearts;</span>
          <span>by&nbsp;</span>
          <span className="font-semibold underline underline-offset-4">Amin Isazadeh</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
