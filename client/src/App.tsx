import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/Nav/navBar';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="dark:bg-neutral-900 h-screen dark:opacity-100 dark-transition dark:-z-50">
        <Outlet />
      </div>
    </>
  );
}

export default App;
