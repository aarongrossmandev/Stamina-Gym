import { useState  } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png"
import useMediaQuery from "@/hooks/useMediaQuery";
import {Link, NavLink} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import { MainLinks, SubLinks } from "@/shared/LinkData";


function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1100px)");
 

  const handleClick = () => setIsMenuToggled(!isMenuToggled);

  
  return <nav>
    <div className={`${flexBetween} fixed top-0 z-50 w-full py-6 bg-black drop-shadow-lg`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* Left Side  */}
          <Link to="/"><img alt="logo" src={Logo} width={150} /></Link>

          {/* Right Side */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <ul className={`${flexBetween} md:gap-4 lg:gap-8 xl:gap-14 xxl:gap-24 text-sm`}>
                {MainLinks.map((links, index) => (
                  <li key={links.linkTo+"index"}>
                    <NavLink 
                      to={links.linkTo} 
                      className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
                      >
                      {links.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              {/* SUB LINKS POOL AND SPA */}
              <ul className="flex justify-between gap-8 text-sm border-r border-l border-primary-500 px-4 lg:px-4 xl:px-12 xxl:px-16">
                {SubLinks.map((sublinks, index) => (
                  <li key={sublinks.linkTo+"index"}>
                  <NavLink 
                    to={sublinks.linkTo}
                    className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
                  >
                    {sublinks.name}
                  </NavLink>
                </li>
                ))}
              </ul>
              <div className={`${flexBetween} gap-8`}>
                <p className="nav-links">Sign In</p>
                  <Link to="/contact" 
                  className="rounded-md bg-primary-500 text-white px-4 md:px-4 xxl:px-10 py-2 border border-transparent hover:bg-primary-500/20
                   hover:text-white hover:border-primary-500 hover:shadow-black-shadow transition-all duration-500 ease-in-out"
                >
                Become a Member
                </Link>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-primary-500 p-2"
              onClick={handleClick}
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </div>

    {/* MOBILE MENU */}
    <AnimatePresence>
    {!isAboveMediumScreens && isMenuToggled && (
      <motion.div 
        initial={{ x:300, opacity:0}}
        animate={{ x: 0, opacity:1}}
        transition={{duration: 1}}
        exit={{
          x:300,
          transition: {delay: 0.2, duration: 0.7, opacity: 0}
        }}
        className="fixed right-0 bottom-0 z-50 h-full w-[300px] bg-black drop-shadow-xl">
        {/* CLOSE ICON */}
        <div className="flex justify-end p-12">
          <button onClick={handleClick}>
            <XMarkIcon className="h-6 w-6 text-primary-500" />
          </button>
        </div>

        {/* MOBILE MENU ITEMS */}
        <ul className="flex items-center flex-col gap-10 text-2xl">
              {MainLinks.map((links, index) => (
                  <li key={links.name+"index"}>
                    <NavLink 
                      to={links.linkTo} 
                      className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
                      onClick={handleClick}
                      >
                      {links.name}
                    </NavLink>
                  </li>
                ))}
          <ul className="flex flex-col gap-10 text-2xl border-b border-t border-primary-500 py-4">
              {SubLinks.map((sublinks, index) => (
                <li key={sublinks.name+"index"}>
                  <NavLink 
                    to={sublinks.linkTo}
                    className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")}
                    onClick={handleClick}
                  >
                    {sublinks.name}
                  </NavLink>
                </li>
                ))}
              </ul>
        </ul>
        <div className="flex items-center flex-col gap-10 text-2xl pt-8">
                <p className="nav-links">Sign In</p>
                <Link to="/contact" 
                  className="text-primary-500 hover:text-primary-300 hover:animate-bounce p-4"
                  onClick={handleClick}
                >Become a Member</Link>
              </div>
      </motion.div>
    )}
  </AnimatePresence>
  </nav>;

}

export default Navbar;

