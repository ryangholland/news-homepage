import { useState } from "react";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div>
      <img
        src="/icon-menu.svg"
        alt="Menu"
        className="md:hidden"
        onClick={() => setNavToggle(true)}
      />
      <nav className="text-darkGrayishBlue hidden md:block">
        <ul className="flex gap-8">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </nav>

      <div className={navToggle ? "block" : "hidden"}>
        <div className="z-10 w-screen h-screen bg-darkGrayishBlue absolute top-0 right-0 opacity-70"></div>

        <div className="z-20 w-2/3 h-screen bg-white absolute top-0 right-0 p-8 flex flex-col sidebar-open">
          <img
            src="/icon-menu-close.svg"
            alt="Close nav menu"
            className="self-end"
            onClick={() => setNavToggle(false)}
          />
          <nav className="mt-24 text-lg">
            <ul className="flex flex-col gap-8">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
