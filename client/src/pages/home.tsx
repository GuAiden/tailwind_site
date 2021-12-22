/* eslint-disable global-require */
import React from 'react';
import './home.css';
import graphDesign from '../assets/graph.png';
import chartDesign from '../assets/coolChart.png';
import barDesign from '../assets/coolBar.png';
import lightGraphDesign from '../assets/lightChart.png';
import lightLineDesign from '../assets/lightLineChart.png';
import lightBarDesign from '../assets/lightBar.png';
import { useDarkTheme } from '../App';

// type ChartProps = {
//   type:
//     | 'area'
//     | 'line'
//     | 'bar'
//     | 'histogram'
//     | 'pie'
//     | 'donut'
//     | 'radialBar'
//     | 'scatter'
//     | 'bubble'
//     | 'heatmap'
//     | 'treemap'
//     | 'boxPlot'
//     | 'candlestick'
//     | 'radar'
//     | 'polarArea'
//     | 'rangeBar'
//     | undefined;
//   width: number;
// };

// const BarChart = ({ type, width }: ChartProps): JSX.Element => {
//   const state = {
//     options: {
//       chart: {
//         id: 'basic-bar',
//       },
//       xaxis: {
//         categories: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//       },
//     },
//     series: [
//       {
//         name: '',
//         data: [30, 40, 45, 50, 49, 60, 70, 91],
//       },
//     ],
//   };

//   return (
//     <>
//       <Chart
//         options={state.options}
//         series={state.series}
//         type={type}
//         width={width}
//       />
//     </>
//   );
// };

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
      <div className="relative flex justify-center pointer-events-none pt-32">
        <div className="grid grid-cols-2 w-4/6 gap-24">
          <div className="col-auto">
            <p className="text-xl mb-5 font-semibold dark:text-white dark-transition">
              ASOC
            </p>
            <h1 className="hidden md:visible md:flex font-MontSerrat text-5xl tracking-widest text-black dark:text-white dark-transition">
              The Actuarial Society of UNSW
            </h1>
            <p className="flex md:hidden font-MontSerrat items-center text-4xl tracking-widest text-black dark:text-white dark-transition">
              ASOC
            </p>
          </div>
          <div className="dark-transition">
            {darkTheme ? <DarkImageGrid /> : <LightImageGrid />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
