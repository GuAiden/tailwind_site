import React from 'react';

export const BlueGrayStripes: React.FunctionComponent = () => (
  <div className="relative -skew-y-6 py-8 content-none h-full overflow-hidden z-50">
    <div className="absolute top-0 h-3/5 right-2/3 w-full content-none py-4 bg-gray-800" />
    <div className="absolute bottom-1 h-3/5 right-3/4 w-full content-none py-1 bg-blue-500/80" />
    <div className="absolute top-0 h-3/5 left-2/3 w-full content-none py-4 bg-gray-800" />
    <div className="absolute bottom-1 h-3/5 left-3/4 w-full content-none py-1 bg-blue-500/80" />
  </div>
);

export const LeftBlueGrayStripe: React.FunctionComponent = () => (
  <div className="relative -skew-y-6 py-8 content-none h-full overflow-hidden z-50">
    <div className="absolute top-0 h-3/5 right-2/3 w-full content-none py-4 bg-gray-800" />
    <div className="absolute bottom-1 h-3/5 right-3/4 w-full content-none py-1 bg-blue-500/80" />
  </div>
);

export const RightBlueGrayStripe: React.FunctionComponent = () => (
  <div className="relative -skew-y-6 py-8 content-none h-full overflow-hidden z-50">
    <div className="absolute top-0 h-3/5 left-2/3 w-full content-none py-4 bg-gray-800" />
    <div className="absolute bottom-1 h-3/5 left-3/4 w-full content-none py-1 bg-blue-500/80" />
  </div>
);

export const LeftSkyBlueStripe: React.FunctionComponent = () => (
  <div className="relative -skew-y-6 py-8 content-none h-full overflow-hidden z-50">
    <div className="absolute top-[-1px] h-3/5 right-1/3 w-full content-none py-4 bg-gray-800" />
    <div className="absolute bottom-2 h-3/5 right-2/3 w-72 content-none py-1 bg-sky-400/80" />
  </div>
);

export const RightSkyBlueStripe: React.FunctionComponent = () => (
  <div className="relative -skew-y-6 py-8 content-none h-full overflow-hidden z-50">
    <div className="absolute bottom-[-1px] h-3/5 left-1/3 w-full content-none py-4 bg-gray-800" />
    <div className="absolute top-2 h-3/5 left-2/3 w-72 content-none py-1 bg-sky-400/80" />
  </div>
);

export const PageDivider: React.FunctionComponent = () => (
  <div className="relative py-2 h-full z-50">
    <div className="w-4/6 mx-auto border-2 border-gray-400/50 rounded-full content-none h-full" />
  </div>
);
