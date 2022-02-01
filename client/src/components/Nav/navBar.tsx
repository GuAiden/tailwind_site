import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navBar.css';
import { NavItem, NavButton, NavDropdown } from './navComponents';

type NavProps = {
  darkTheme: boolean;
  handleDarkTheme: () => void;
};

const ThemeIcon: React.FunctionComponent<NavProps> = ({
  darkTheme,
  handleDarkTheme,
}: NavProps) => (
  <>
    {darkTheme ? (
      <FaSun
        size="24"
        className="top-navigation-icon flex mx-5 my-auto"
        onClick={handleDarkTheme}
      ></FaSun>
    ) : (
      <FaMoon
        size="24"
        className="top-navigation-icon flex mx-5 my-auto"
        onClick={handleDarkTheme}
      />
    )}
  </>
);

const NavBar: React.FunctionComponent<NavProps> = ({
  darkTheme,
  handleDarkTheme,
}: NavProps) => (
  <nav className="bg-white px-1 sm:px-4 py-0 md:py-1 dark:bg-neutral-900 drop-shadow-md dark:drop-shadow-md dark-transition z-50 dark:z-50">
    <div className="relative py-2 lg:py-3 flex items-center justify-between text-gray-700 font-semibold text-sm leading-6 dark:z-50">
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
        <NavDropdown
          title="About"
          options={[
            { path: '/about/ASOC', text: 'ASOC' },
            { path: '/about/team', text: 'Team' },
            { path: '/about/constitution', text: 'Constituion' },
            { path: '/about/privacy', text: 'Privacy Policy' },
            { path: '/about/actuarial', text: 'Actuarial Studies' },
            { path: '/about/exemptions', text: 'Exemptions' },
          ]}
        />
        <NavItem path="downloads" text="Downloads" />
        <NavItem path="careers" text="Careers" />
        <NavItem path="contact" text="Contact" />
        <NavItem path="sponsors" text="Sponsors" />
        <NavButton path="join" text="Sign Up" />
        <ThemeIcon darkTheme={darkTheme} handleDarkTheme={handleDarkTheme} />
      </div>
    </div>
  </nav>
);

export default NavBar;
