import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/Nav/navBar';
import useDarkMode from './hooks/darkMode';

type ContextType = { darkTheme: boolean | null };

export default function App(): JSX.Element {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = (): void => setDarkTheme(!darkTheme);
  return (
    <>
      <NavBar darkTheme={darkTheme} handleDarkTheme={handleMode} />
      <div className="bg-white dark:bg-zinc-900 min-h-screen max-h-full dark-transition -z-50">
        <Outlet context={darkTheme} />
        <Footer />
      </div>
    </>
  );
}

export function useDarkTheme(): ContextType {
  return useOutletContext<ContextType>();
}
