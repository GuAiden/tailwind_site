import React from 'react';
import './App.css';
import NavBar from './components/Nav/navBar';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-stretch my-32">
        <p className="flex self-center text-4xl bg-gray-600 p-5 tracking-widest text-white dark:bg-white dark:text-black">
          The Actuarial Society of UNSW
        </p>
      </div>
    </>
  );
}

export default App;
