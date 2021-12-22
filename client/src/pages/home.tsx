/* eslint-disable global-require */
import React from 'react';
import './home.css';
import graphDesign from '../assets/images/graph.png';
import chartDesign from '../assets/images/coolChart.png';
import barDesign from '../assets/images/coolBar.png';
import lightGraphDesign from '../assets/images/lightChart.png';
import lightLineDesign from '../assets/images/lightLineChart.png';
import lightBarDesign from '../assets/images/lightBar.png';
import { useDarkTheme } from '../App';

const DarkImageGrid: React.FunctionComponent = () => (
  <div className="col-auto grid grid-cols-2 gap-3">
    <div className="col-span-1">
      <img className="dark-graph-image" src={graphDesign} />
    </div>
    <div className="col-auto">
      <img className="dark-graph-image" src={chartDesign} />
    </div>
    <div className="col-span-full justify-self-center">
      <img className="dark-graph-image" src={barDesign} />
    </div>
  </div>
);

const LightImageGrid: React.FunctionComponent = () => (
  <div className="col-auto grid grid-cols-2 gap-3">
    <div className="col-span-1">
      <img className="light-graph-image" src={lightGraphDesign} />
    </div>
    <div className="col-auto">
      <img className="light-graph-image" src={lightLineDesign} />
    </div>
    <div className="col-span-full justify-self-center">
      <img className="light-graph-image" src={lightBarDesign} />
    </div>
  </div>
);

const Home: React.FunctionComponent = () => {
  const darkTheme = useDarkTheme();
  return (
    <>
      {/* Opening Page ASOC opening line */}
      <div className="relative flex justify-center pointer-events-none pt-32">
        <div className="grid grid-cols-2 w-4/6 gap-24">
          <div className="col-auto">
            <div className="flex flex-col dark:text-white text-black font-MontSerrat dark-transition">
              <p className="text-xl mb-5 font-semibold">ASOC</p>
              <h1 className="hidden md:visible md:flex text-5xl tracking-widest">
                The Actuarial Society of UNSW
              </h1>
              <h1 className="flex md:hidden items-center text-4xl tracking-widest">
                ASOC
              </h1>
              <h3 className="mt-32 pointer-events-none select-none italic">
                A society striving to provide support, growth opportunities,
                industry exposure, and social events for actuarial students
                during their challenging but rewarding experience at university.
              </h3>
            </div>
          </div>
          <div className="dark-transition">
            {darkTheme ? <DarkImageGrid /> : <LightImageGrid />}
          </div>
        </div>
      </div>
      {/* Scroll down svg logo */}
      <div className="flex justify-center mt-20 animate-bounce animate-pulse dark:text-white">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
      {/* Event Space */}
    </>
  );
};

export default Home;
