import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/Nav/navBar';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="bg-white dark:bg-neutral-900 h-screen dark-transition -z-50">
        <Outlet />
      </div>
    </>
  );
}

export default App;
