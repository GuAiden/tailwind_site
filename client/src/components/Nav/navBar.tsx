import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useDarkMode from '../../hooks/darkMode';
import './navBar.css';

const ThemeIcon: React.FunctionComponent = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = (): void => setDarkTheme(!darkTheme);
  return (
    <>
      {darkTheme ? (
        <FaSun
          size="24"
          className="top-navigation-icon flex mx-5 my-auto"
          onClick={handleMode}
        ></FaSun>
      ) : (
        <FaMoon
          size="24"
          className="top-navigation-icon flex mx-5 my-auto"
          onClick={handleMode}
        />
      )}
    </>
  );
};

const NavBar: React.FunctionComponent = () => (
  <nav className="bg-white px-2 sm:px-4 py-0 md:py-1 dark:bg-neutral-900 drop-shadow-md dark:drop-shadow-md dark:shadow-gray-800/60 dark-transition z-50 dark:z-50">
    <div className="relative py-2 px-8 lg:py-3 flex items-center justify-between text-gray-700 font-semibold text-sm leading-6 dark:z-50">
      <Link
        to="/"
        className="flex text-xl text-black my-auto dark:text-white font-MontSerrat font-bold z-50 dark:z-50 nav-text"
      >
        <img
          width="29"
          height="29"
          src="https://asoc.unsw.edu.au/images/header_logo.png"
          className="mr-2 my-auto z-50 dark:z-50 dark-transition"
        />
        ASOC
      </Link>
      <div className="flex">
        <Link to="about" className="nav-text">
          About
        </Link>
        <Link to="downloads" className="nav-text">
          Downloads
        </Link>
        <Link to="careers" className="nav-text">
          Careers
        </Link>
        <Link to="contact" className="nav-text">
          Contact
        </Link>
        <Link to="sponsors" className="nav-text">
          Sponsors
        </Link>
        <Link to="join" className="nav-text">
          <button className="nav-button">Sign Up</button>
        </Link>
        <ThemeIcon />
      </div>
    </div>
  </nav>
);

export default NavBar;
