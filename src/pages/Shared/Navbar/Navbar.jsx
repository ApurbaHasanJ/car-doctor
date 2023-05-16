import { useContext, useState } from "react";
import logo from "../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { FaUser } from "react-icons/fa"
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../providers/AuthProvider";
// import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        
      })
      .catch((err) => console.error(err));
  };

  // shared nav items
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Contact
        </NavLink>
      </li>
      {user && (
        <li>
          {user.photoURL ? (
            <img
              className="lg:w-13 lg:h-13 md:h-10 md:w-10 h-7 w-7 rounded-full"
              title={user.displayName}
              src={user.photoURL}
              alt="User.png"
            />
          ) : (
            <FaUser className="text-2xl" />
          )}
        </li>
      )}
      {user ? (
        <Link onClick={handleLogout} className="btn">
          Log Out
        </Link>
      ) : (
        <li>
          <Link to="/login" className="btn">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="my-container relative mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl flex items-center justify-between">
      {/* Logo Section */}
      <Link to="/" className="inline-flex items-center">
        <img src={logo} alt="" className="lg:w-auto md:w-20 w-16" />
      </Link>

      {/* Nav Items Section */}
      <ul className="items-center mx-auto text-lg font-bold hidden space-x-8 lg:flex">
        {navItems}
      </ul>
      <ul className="lg:flex items-center gap-6  hidden ">
        <li className="ml-auto text-2xl">
          <Link to="/orderReviews">
            <AiOutlineShopping className="w-7 h-7 duration-300 hover:text-[#FF3811]" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <AiOutlineSearch className="w-7 h-7 duration-300 hover:text-[#FF3811]" />
          </Link>
        </li>
        <li className="">
          <Link to="/" className="inline-flex items-center">
            <button className=" btn-sec">Appointment</button>
          </Link>
        </li>
      </ul>

      {/* Mobile Navbar Section */}
      <div className="lg:hidden">
        {/* Dropdown Open Button */}
        <button
          aria-label="Open Menu"
          title="Open Menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3BottomRightIcon className="w-7 text-[#FF3811]" />
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-white border rounded shadow-sm">
              {/* Logo & Button section */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <img src={logo} alt="" className="md:w-20 w-16" />
                  </Link>
                </div>
                {/* Dropdown menu close button */}
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className="w-7 hover:bg-orange-100 hover:rounded-xl text-[#FF3811]" />
                  </button>
                </div>
              </div>
              {/* Mobile Nav Items Section */}
              <nav>
                <ul className="space-y-4">
                  {navItems}
                  <ul className="flex justify-end items-center gap-7">
                    <li className="ml-auto text-2xl">
                      <Link to="/orderReviews">
                        <AiOutlineShopping className="w-5 h-5 md:w-6 md:h-6 duration-300 hover:text-[#FF3811]" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <AiOutlineSearch className="w-5 h-5 md:w-6 md:h-6  duration-300 hover:text-[#FF3811]" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="inline-flex items-center">
                        <button className=" text-xs md:text-lg font-normal tracking-wide px-4 py-3 rounded drop-shadow-2xl border border-[#FF3811] text-[#FF3811] hover:text-white hover:bg-[#FF3811] duration-500 ">
                          Appointment
                        </button>
                      </Link>
                    </li>
                  </ul>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
