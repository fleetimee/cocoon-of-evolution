import React from 'react';
import { ReactComponent as HeroImage } from '../assets/img/undraw_breakfast_psiw (1).svg';

const Hero = () => {
  return (
    <div class="max-w-6xl flex md:flex-wrap flex-wrap-reverse overflow-hidden mx-auto py-20 px-6 items-center">
      <div class="overflow-hidden sm:w-1/2 md:w-1/2 items-center">
        <div className="hidden space-x-2 py-3 px-4 w-48 bg-red-100 rounded-full md:flex">
          <p className="text-lg text-red-400 tracking-tight font-medium antialiased ">
            More than faster
          </p>
          <p>🍒</p>
        </div>

        <h1 className="pt-9 w-3/4 text-2xl md:text-4xl lg:text-6xl text-gray-800 leading-loose font-bold tracking-normal">
          Be The Fastest In Delivering Your <span className="text-red-500">Food</span>
        </h1>
        <p className="w-3/4 text-lg py-5 font-normal text-gray-500 leading-7">
          Our job is to filling tummmy with delicious food and with fast and free delivery.
        </p>

        <div className="space-x-8 items-center flex">
          <button className="px-6 py-3 bg-red-500 text-gray-100 hover:bg-red-700 rounded-full">
            Get Started
          </button>
          <div className="inline-flex space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <button>Watch Video</button>
          </div>
        </div>
      </div>

      <div class="w-full overflow-hidden flex sm:w-1/2 md:w-1/2 justify-center ">
        <div className="py-9">
          <HeroImage className="h-48 sm:h-52 md:h-56 lg:h-80" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
