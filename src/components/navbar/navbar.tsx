"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between w-full h-100 border-b border-white lg:block ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden z-10 relative text-white focus:outline-none ml-3"
      >
        <BiMenu className="w-8 h-8" />
      </button>
      <div
        className={`flex flex-col text-orange-500 transition duration-300 all-ease justify-center items-center bg-gray-900 gap-4 z-10 h-400 absolute w-200 animate-slideInFromLeft lg:flex lg:w-full lg:bg-transparent lg:flex-row lg:h-100 lg:justify-center lg:items-center lg:space-x-4 ${
          isOpen ? "block" : "hidden"
        }`}
        ref={navbarRef}
      >
        <Link
          href="/"
          className="z-10 text-lg font-semibold text-white hover:text-orange-500 transition duration-300 all-ease border-b-2 lg:border-none"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-lg font-semibold text-white hover:text-orange-500 transition duration-300 all-ease border-b-2 lg:border-none"
        >
          About Me
        </Link>
        <Link
          href="/contact"
          className="text-lg font-semibold text-white hover:text-orange-500 transition duration-300 all-ease border-b-2 lg:border-none"
        >
          Contact
        </Link>
        <Link
          href="/service"
          className="text-lg font-semibold text-white hover:text-orange-500 transition duration-300 all-ease border-b-2 lg:border-none"
        >
          Service
        </Link>
        <Link
          href="/music"
          className="text-lg font-semibold text-white hover:text-orange-500 transition duration-300 all-ease border-b-2 lg:border-none"
        >
          Music
        </Link>
      </div>
      <h1 className="my-auto font-bold mr-3 text-white lg:hidden">
        Teguh<span className="text-orange-400">Kajang</span>
      </h1>
    </nav>
  );
};

export default Navbar;
