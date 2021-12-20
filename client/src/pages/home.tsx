/* eslint-disable global-require */
import React from 'react';

const Home: React.FunctionComponent = () => (
  <>
    <div className="relative min-h-screen flex justify-center">
      <div className="absolute grid grid-cols-1 w-screen transform -skew-y-6 -z-10 dark:opacity-60">
        <div className="col-span-1 bg-gray-800 dark:bg-white rounded py-48">
          {' '}
        </div>
      </div>
      <div className="relative flex justify-center items-start py-10 dark:relative">
        <p className="flex font-MontSerrat items-center text-4xl bg-gray-200 p-5 tracking-widest text-black dark:bg-neutral-700 dark:text-white dark-transition">
          The Actuarial Society of UNSW
        </p>
      </div>
    </div>
  </>
);

export default Home;
