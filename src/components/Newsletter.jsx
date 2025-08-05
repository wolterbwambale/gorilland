import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full mx-w-[1240px] py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl sm:2xl xl">
            {" "}
            Destination of the Month: Rwenzori
          </h1>
          <p>
            Escape to crystal-clear waters and white sandy beaches. 7 Days / 6
            Nights
            <span className="text-[#00df9a]">
              {" "}
              from $999 – flights + resort
            </span>{" "}
            included!
          </p>
        </div>
        <div className="my-4">
          <div className="flex justify-center flex-col sm:flex-row items-center my-2">
            <input
              type="email"
              className="p-3 w-full text-black rounded-md text-xl font-serif"
              placeholder="Enter your email.."
            />
            <button className="bg-[#00df9a] rounded-md w-[200px] py-3 my-2 md:ml-4">
              Notify Me
            </button>
          </div>
          <p>Now flying direct from LA to Rome every Monday & Thursday.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
