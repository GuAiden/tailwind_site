import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
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
          className="top-navigation-icon flex mx-5"
          onClick={handleMode}
        ></FaSun>
      ) : (
        <FaMoon
          size="24"
          className="top-navigation-icon flex mx-5"
          onClick={handleMode}
        />
      )}
    </>
  );
};

const NavBar: React.FunctionComponent = () => (
  <nav className="bg-white px-2 sm:px-4 py-1 dark:bg-neutral-800 drop-shadow-md dark:drop-shadow-lg">
    <div className="relative py-2 px-8 lg:py-3 flex items-center justify-between text-gray-700 font-semibold text-sm leading-6">
      <a href="#yo" className="flex text-xl my-auto dark:text-white font-sans">
        <img
          width="29"
          height="29"
          src="https://asoc.unsw.edu.au/images/header_logo.png"
          className="mr-2 my-auto"
        />
        ASOC
      </a>
      <div className="flex">
        <a href="#another" className="nav-text">
          About
        </a>
        <a href="#another" className="nav-text">
          Downloads
        </a>
        <a href="#another" className="nav-text">
          Careers
        </a>
        <a href="#another" className="nav-text">
          Contact
        </a>
        <a href="#another" className="nav-text">
          Sponsors
        </a>
        <a href="#another" className="nav-text">
          ASOC Forms
        </a>
        <ThemeIcon />
      </div>
    </div>
  </nav>
);

export default NavBar;
