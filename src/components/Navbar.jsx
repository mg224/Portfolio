import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="pb-16 text-2xl font-thin tracking-tight lg:mt-16 lg:text2xl">
            Misha's Portfolio
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://linkedin.com/in/mishasgupta"><FaLinkedin /></a>
            <a href="https://github.com/mg224"><FaGithub /></a>
        </div>
    </nav>
  );
};

export default Navbar;