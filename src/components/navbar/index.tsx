import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png"
import useMediaQuery from "@/hooks/useMediaQuery";
import {Link} from 'react-router-dom';
import Links from './Links';



function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const handleClick = () => setIsMenuToggled(!isMenuToggled);

  return <nav>
    <div className={`${flexBetween} fixed top-0 z-50 w-full py-6 bg-gray-1000 drop-shadow-lg`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* Left Side  */}
          <Link to="/"><img alt="logo" src={Logo} width={150} /></Link>

          {/* Right Side */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <ul className={`${flexBetween} gap-8 text-sm`}>
                <Links />
              </ul>
              <div className={`${flexBetween} gap-8`}>
                <p className="text-white">Sign In</p>
                <Link to="/" 
                  className="action-button"
                >Become a Member</Link>
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
    {!isAboveMediumScreens && isMenuToggled && (
      <div className="fixed right-0 bottom-0 z-50 h-full w-[300px] bg-gray-1000 drop-shadow-xl">
        {/* CLOSE ICON */}
        <div className="flex justify-end p-12">
          <button onClick={handleClick}>
            <XMarkIcon className="h-6 w-6 text-primary-500" />
          </button>
        </div>

        {/* MOBILE MENU ITEMS */}
        <ul className="ml-[33%] flex flex-col gap-10 text-2xl">
          <Links />
        </ul>
      </div>
    )}
  </nav>;

}

export default Navbar