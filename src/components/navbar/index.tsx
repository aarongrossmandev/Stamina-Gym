import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "bg-transparent" : "bg-gray-1000 drop-shadow";

  return <nav>
    <div className={`${flexBetween} fixed top-0 z-50 w-full py-6 bg-gray-1000 drop-shadow-lg`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* Left Side  */}
          <img alt="logo" src={Logo} width={150} />

          {/* Right Side */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Training"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p className="text-white">Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage} >Become a Member</ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-primary-500 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
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
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <XMarkIcon className="h-6 w-6 text-primary-500" />
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Benefits"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Training"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
    )}
  </nav>

};

export default Navbar