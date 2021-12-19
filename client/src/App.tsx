import React from 'react';
import './App.css';
import NavBar from './components/Nav/navBar';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="flex">
        <p className="justify-center"> Content Hi! </p>
      </div>
    </>
  );
}

export default App;
