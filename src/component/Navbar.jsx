import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 ${
        isScrolled
          ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]"
          : ""
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-15 hidden">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold tracking-wider text-orange-500"
                  : "font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/process"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </NavLink>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-x-5">

          {/* Search */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              placeholder="search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />

            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </div>

          {/* Icons */}
          <button className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </button>

          <button className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </button>

          {/* Hamburger */}
          <button
            className="text-zinc-800 text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`
            flex flex-col gap-y-8 bg-orange-500/15 backdrop-blur-xl
            rounded-xl shadow-xl p-10 items-center
            md:hidden absolute top-28 left-1/2
            transform -translate-x-1/2 transition-all duration-500
            ${showMenu ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
        >

          <li>
            <NavLink
              to="/"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-orange-800"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/process"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </NavLink>
          </li>

          {/* Mobile Search */}
          <li className="flex p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              placeholder="search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />

            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;