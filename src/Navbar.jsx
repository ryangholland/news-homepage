function Navbar() {
  return (
    <div>
      <img src="/icon-menu.svg" alt="Menu" className="sm:hidden"/>
      <nav className="text-darkGrayishBlue hidden sm:block">
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
    </div>
  );
}

export default Navbar;
