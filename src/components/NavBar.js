import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, ScholarIcon } from "./Icons"; // Swapped Twitter for Scholar
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group text-[rgb(var(--foreground-rgb))]`}>
      {title}
      <span className={`
        h-[1px] inline-block bg-[rgb(var(--foreground-rgb))] 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'} 
      `}> &nbsp; </span>
    </Link>
  );
};

export default function NavBar() {
  return (
    <header className="w-full px-8 py-8 font-medium flex items-center justify-between relative">
      <nav className="flex items-center gap-4">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/articles" title="Articles" />
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      <nav className="flex items-center justify-center flex-wrap gap-6">
        {/* Google Scholar Icon */}
        <motion.a 
          href="https://scholar.google.com/" 
          target="_blank" 
          rel="noreferrer"
          className="w-6 text-[rgb(var(--foreground-rgb))]"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ScholarIcon />
        </motion.a>

        {/* LinkedIn Icon */}
        <motion.a 
          href="https://www.linkedin.com/" 
          target="_blank" 
          rel="noreferrer"
          className="w-6"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>

        {/* GitHub Icon */}
        <motion.a 
          href="https://github.com/" 
          target="_blank" 
          rel="noreferrer"
          className="w-6 text-[rgb(var(--foreground-rgb))]"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
      </nav>
    </header>
  );
}