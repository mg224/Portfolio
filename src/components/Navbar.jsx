import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="pb-16 text-2xl font-thin tracking-tight lg:mt-16 lg:text2xl">
            Misha
        </div>
        <div className="m-8 flex items-center justify-center gap-4">
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-purple-700">
              About
            </Link>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-purple-700">
              Experience
            </Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-purple-700">
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-purple-700">
              Contact
            </Link>
            <a href="https://linkedin.com/in/mishasgupta" className=" text-2xl cursor-pointer hover:text-purple-700"><FaLinkedin /></a>
            <a href="https://github.com/mg224" className="text-2xl cursor-pointer hover:text-purple-700"><FaGithub /></a>
        </div>
    </nav>
  );
};

export default Navbar;