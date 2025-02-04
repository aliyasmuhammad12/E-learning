import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [isOpen, setIsopne] = useState(false);
  return (
    <div>
      <motion.div initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5, delay:0.5}}
      
      >
        <div className="container flex justify-between items-center py-6">
          {/* logo seaction */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary"/>
            <p>E-Tutor</p>
          </div>
          {/* menu section  */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* cta button section  */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold ">Sign in</button>
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">
              Register
            </button>
          </div>
          {/* mobile hamberger menu */}
          <div className="lg:hidden cursor-pointer" onClick={() => { setIsopne(!isOpen)}}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>
      {/* Mobile slider section */}
      <ResponsiveMenu isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
