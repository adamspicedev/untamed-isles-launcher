import React from 'react';
import Stories from './Stories';
import Logo from '../assets/logo.png';
const ContentWrapper = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-0 object-cover w-full h-full">
      <video
        src="./assets/bg.mp4"
        muted
        autoPlay
        loop
        poster="./assets/poster.png"
      ></video>
      <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-30" />

      <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full">
        <div className="flex flex-row h-full justify-evenly">
          <div className="flex flex-col justify-between h-full ">
            <img src={Logo} className="object-cover w-64 h-64 m-10" />
            <button className="z-50 w-64 px-8 py-2 m-12 text-white rounded-lg outline-none text-7xl font-geizer bg-untamed-blue hover:bg-untamed-glow focus:outline-none">
              PLAY
            </button>
          </div>
          <div className="flex-grow m-10 overflow-scroll">
            <Stories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
