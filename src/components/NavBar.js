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
      />
    </Link>
  );
};

const MobileNavLink = ({ href, title, onClick }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative group text-[rgb(var(--foreground-rgb))] text-lg font-semibold"
    >
      {title}
      <span
        className={`
          h-[1px] inline-block bg-[rgb(var(--foreground-rgb))]
          absolute left-0 -bottom-1
          transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
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
    <header className="w-full border-b-4 border-solid border-zinc-500 font-bold relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6">
        <div className="grid grid-cols-3 items-center">
          {/* Left */}
          <div className="flex items-center justify-start">
            <div className="md:hidden">
              <HamburgerMenu isOpen={isOpen} toggle={handleToggle} />
            </div>

            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <CustomLink href="/" title="Home" />
              <CustomLink href="/about" title="About" />
              <CustomLink href="/projects" title="Projects" />
              <CustomLink href="/articles" title="Articles" />
            </nav>
          </div>

          {/* Center */}
          <div className="flex items-center justify-center">
            <Logo />
          </div>

          {/* Right */}
          <div className="flex items-center justify-end gap-4 md:gap-5">
            <nav className="hidden md:flex items-center gap-4 md:gap-5">
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
            </nav>

            <ThemeSwitcher />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-900 border-b border-zinc-300 dark:border-zinc-700 shadow-lg"
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
