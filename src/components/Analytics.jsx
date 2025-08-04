import React from "react";
import pricing from "../assets/pricing.jpg";
function Analytics() {
  return (
    <div className="w-full py-16 px-4 bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={pricing}
          alt="consultancy"
          className="rounded-md w-[500px] my-2 mx-auto px-2"
        />
        <div className="flex justify-center flex-col">
          <p className="text-[#00df9a] font-mono font-bold sm:text-3xl text-xl py-2">Tour With Us</p>
          <h1 className="md:text-4xl sm:text-3xl text-xl font-bold font-serif py-2">
            Start Your Holiday
          </h1>
          <p>
            We have water rafting, bird watching, game park drives, gorilla
            trekking, honey moon and many more safaris in our various
            destinations.
          </p>
          <div className="block sm:flex  gap-2">
            <button className="bg-[#00df9a] py-3 my-2 sm:w-[200px] rounded-md font-medium w-full">
              Book Now
            </button>
            <button className="bg-black text-white sm:w-[200px]  my-2 py-3 rounded-md font-medium w-full">
              Leaarn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
