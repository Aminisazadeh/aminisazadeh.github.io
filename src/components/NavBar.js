import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, ScholarIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const CustomLink = ({ href, title, className = "", onClick }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} relative group text-[rgb(var(--foreground-rgb))]`}
    >
      {title}
      <span
        className={`
          h-[1px] inline-block bg-[rgb(var(--foreground-rgb))]
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const MobileNavLink = ({ href, title, onClick }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative group text-[rgb(var(--foreground-rgb))] text-lg font-semibold ${
        router.asPath === href ? "underline underline-offset-4" : ""
      }`}
    >
      {title}
    </Link>
  );
};

const HamburgerMenu = ({ isOpen, toggle }) => {
  return (
    <button
      className="flex flex-col justify-center items-center md:hidden w-10 h-10 z-50"
      onClick={toggle}
      aria-label="Toggle navigation menu"
      type="button"
    >
      <span
        className={`block h-0.5 w-6 bg-[rgb(var(--foreground-rgb))] transition-all duration-300 ease-out ${
          isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-[rgb(var(--foreground-rgb))] transition-all duration-300 ease-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-[rgb(var(--foreground-rgb))] transition-all duration-300 ease-out ${
          isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
        }`}
      />
    </button>
  );
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full px-6 md:px-8 py-6 md:py-8 flex items-center justify-between relative font-bold border-b-4 border-solid border-zinc-500">
      {/* Mobile left button */}
      <div className="flex md:hidden items-center">
        <HamburgerMenu isOpen={isOpen} toggle={handleToggle} />
      </div>

      {/* Desktop left nav */}
      <nav className="hidden md:flex items-center gap-4">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/articles" title="Articles" />
      </nav>

      {/* Center logo */}
      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>

      {/* Desktop right icons */}
      <nav className="hidden md:flex items-center justify-center flex-wrap gap-6">
        <motion.a
          href="https://scholar.google.com/citations?user=uwHOZTkAAAAJ&hl=en/"
          target="_blank"
          rel="noreferrer"
          className="w-6 text-[rgb(var(--foreground-rgb))]"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ScholarIcon />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/aminisazadeh/"
          target="_blank"
          rel="noreferrer"
          className="w-6 text-[rgb(var(--foreground-rgb))]"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>

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

        <ThemeSwitcher />
      </nav>

      {/* Mobile right placeholder to balance layout */}
      <div className="flex md:hidden items-center">
        <ThemeSwitcher />
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-zinc-900 border-b border-zinc-300 dark:border-zinc-700 shadow-lg md:hidden z-40"
          >
            <div className="flex flex-col items-center gap-6 py-6">
              <MobileNavLink href="/" title="Home" onClick={closeMenu} />
              <MobileNavLink href="/about" title="About" onClick={closeMenu} />
              <MobileNavLink href="/projects" title="Projects" onClick={closeMenu} />
              <MobileNavLink href="/articles" title="Articles" onClick={closeMenu} />

              <div className="flex items-center gap-6 pt-2">
                <motion.a
                  href="https://scholar.google.com/citations?user=uwHOZTkAAAAJ&hl=en/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-6 text-[rgb(var(--foreground-rgb))]"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ScholarIcon />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/aminisazadeh/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-6 text-[rgb(var(--foreground-rgb))]"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedInIcon />
                </motion.a>

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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
