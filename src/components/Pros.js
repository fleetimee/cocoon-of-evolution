import React from 'react';
import CardImage1 from '../assets/img/1.png';

const Pros = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-6">
      <div className="text-center">
        <h1 className="py-4 px-4 text-red-500 uppercase tracking-wider text-xl font-semibold">
          What we serve
        </h1>
        <p className="py-4 text-gray-800 capitalize text-5xl tracking-tight font-bold">
          Your favorite food
        </p>
        <p className="text-gray-800 capitalize text-5xl tracking-tight font-bold">
          delivery partner
        </p>
      </div>

      <div class="py-10 flex flex-wrap -mx-px overflow-hidden justify-between text-center">
        <div class="my-px px-px w-1/3 overflow-hidden sm:w-full md:w-1/2 lg:w-1/3">
          <div>
            <img src={CardImage1} alt="CardImage1" />
          </div>
        </div>

        <div class="my-px px-px w-1/3 overflow-hidden sm:w-full md:w-1/2 lg:w-1/3">
          <img src={CardImage1} alt="CardImage1" />
        </div>

        <div class="my-px px-px w-1/3 overflow-hidden sm:w-full md:w-1/2 lg:w-1/3">
          <img src={CardImage1} alt="CardImage1" />
        </div>
      </div>
    </div>
  );
};

export default Pros;
