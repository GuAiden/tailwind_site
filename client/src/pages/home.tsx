/* eslint-disable global-require */
import React from "react";
import "./home.css";
import graphDesign from "../assets/images/graph.png";
import chartDesign from "../assets/images/coolChart.png";
import barDesign from "../assets/images/coolBar.png";
import lightGraphDesign from "../assets/images/lightChart.png";
import lightLineDesign from "../assets/images/lightLineChart.png";
import lightBarDesign from "../assets/images/lightBar.png";
import { useDarkTheme } from "../App";
import Events from "./events.json";

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

type EventCardProps = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  coverImageURL: string;
};

const EventCard: React.FunctionComponent<EventCardProps> = ({
  title,
  description,
  startDate,
  endDate,
  coverImageURL,
}: EventCardProps) => (
  <>
    <div className="event-card">
      <img className="max-h-[30vh] mx-auto" src={coverImageURL} />
      {/* <h1 className="text-center p-2 text-3xl">{title}</h1>
      <p className="text-gray-400 p-2">{description}</p>
      <h4 className="p-2">
        {startDate} {endDate}
      </h4> */}
      {/* <img
        src="https://scontent.fsyd11-2.fna.fbcdn.net/v/t39.30808-6/248596834_2432745236857806_8208171371330292695_n.png?_nc_cat=107&_nc_rgb565=1&ccb=1-5&_nc_sid=e3f864&_nc_ohc=gaXJmC40JswAX-SvcF3&_nc_oc=AQmwYdd7vrR3mhfr1yjwvw9eQapfTAWO82JogUv54AYBoj-A1Gb2YQrf2gNkf2d3Tsk&tn=stnQroAJSPBsJJPx&_nc_ht=scontent.fsyd11-2.fna&oh=00_AT_DGG9U4OiPGjXOXBZIadTZj9CmfC6lSRHD78EBZzfTXA&oe=61C96EC4"
        className="w-[100%] h-[100%] overflow-visible"
      /> */}
    </div>
  </>
);

const EventScrollView: React.FunctionComponent = () => (
  <>
    <h1 className="text-center mt-10 tracking-tight font-extrabold text-2xl dark-text">
      Upcoming Events
    </h1>
    <div className="flex md:w-4/6 h-fit mx-auto">
      <div className="flex flex-nowrap flex-row overflow-x-auto snap-x py-10">
        {Events.events.map((event) => (
          <EventCard
            title={event.title}
            description={event.description}
            startDate={event.startDate}
            endDate={event.endDate}
            coverImageURL={event.coverImageURL}
          />
        ))}
      </div>
    </div>
  </>
);

const SponsorsGrid: React.FunctionComponent = () => (
  <>
    {/* <div className="flex justify-center mt-20">
      <h2 className="dark-text text-2xl font-semibold">Sponsors</h2>
    </div> */}
    <div className="grid grid-cols-2 md:grid-cols-4 md:w-4/6 h-fit mx-auto mt-10">
      <img
        src="https://asoc.unsw.edu.au/images/web/sponsors/principal/actuaries-institute.png"
        className="sponsor-image"
      />
      <img
        src="https://asoc.unsw.edu.au/images/web/sponsors/principal/ey.png"
        className="sponsor-image"
      />
      <img
        src="https://asoc.unsw.edu.au/images/web/sponsors/principal/finity.png"
        className="sponsor-image"
      />
      <img
        src="https://asoc.unsw.edu.au/images/web/sponsors/principal/pwc.png"
        className="sponsor-image"
      />
    </div>
    <img
      src="https://asoc.unsw.edu.au/images/web/sponsors/principal/taylorfry.png"
      className="mx-auto w-[25%] md:w-[12.5%] max-h-[50%] my-auto mt-5"
    />
  </>
);

const ScrollDownIcon: React.FunctionComponent = () => (
  <div className="flex justify-center mt-10 animate-bounce dark:text-white">
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
);

const HomeInfo: React.FunctionComponent = () => {
  const darkTheme = useDarkTheme();
  return (
    <>
      <div className="relative flex justify-center pointer-events-none pt-10 md:pt-32">
        <div className="grid grid-cols-2 w-5/6 md:w-4/6 gap-24">
          <div className="col-auto">
            <div className="flex flex-col dark:text-white text-black font-MontSerrat dark-transition">
              <p className="text-xl mb-5 font-semibold">ASOC</p>
              <h1 className="hidden md:visible md:flex text-5xl tracking-widest">
                The Actuarial Society of UNSW
              </h1>
              <h1 className="flex md:hidden items-center text-4xl tracking-widest">
                ASOC
              </h1>
              <h3 className="mt-32 pointer-events-none select-none hidden lg:visible lg:flex italic none">
                A society striving to provide support, growth opportunities,
                industry exposure, and social events for actuarial students
                their challenging but rewarding experience at university.
              </h3>
            </div>
          </div>
          <div className="dark-transition">
            {darkTheme ? <DarkImageGrid /> : <LightImageGrid />}
          </div>
        </div>
      </div>
      <h3 className="mt-10 w-5/6 md:w-3/5 mx-auto pointer-events-none select-none lg:hidden italic none dark-text md:text-center">
        A society striving to provide support, growth opportunities, industry
        exposure, and social events for actuarial students during their
        challenging but rewarding experience at university.
      </h3>
    </>
  );
};

const Home: React.FunctionComponent = () => (
  <>
    <HomeInfo />
    <SponsorsGrid />
    <ScrollDownIcon />
    <EventScrollView />
  </>
);

export default Home;
