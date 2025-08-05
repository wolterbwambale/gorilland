import React from "react";
import touring from "../assets/touring.png";
import travel from "../assets/travel.png";
import agency from "../assets/agency.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl my-8 p-4 flex flex-col rounded-xl hover:scale-105 duration-300">
          <img
            src={travel}
            alt="/"
            className="w-20 mx-auto mt-[-60px] bg-white"
          />
          <h2 className="text-4xl font-bold text-center py-4">First Tour</h2>
          <p className="text-center text-3xl font-bold">3672$</p>

          <div className="text-center font-medium">
            <p className="py-2  border-b">East Africa</p>
            <p className="py-2 border-b">Air Ticket</p>
            <p className="py-2 border-b">Accomodation</p>
            <p className="py-2 border-b">Meals</p>
          </div>
          <button className="bg-[#00df9a] py-2 text-white my-6 font-medium mx-auto w-[200px] rounded-md">
            Get startd
          </button>
        </div>
        <div className="w-full shadow-xl my-8 p-4 flex flex-col rounded-xl hover:scale-105 duration-300">
          <img
            src={agency}
            alt="/"
            className="w-20 mx-auto mt-[-60px] bg-white"
          />
          <h2 className="text-4xl font-bold text-center py-4">First Tour</h2>
          <p className="text-center text-3xl font-bold">3672$</p>

          <div className="text-center font-medium">
            <p className="py-2  border-b">East Africa</p>
            <p className="py-2 border-b">Air Ticket</p>
            <p className="py-2 border-b">Accomodation</p>
            <p className="py-2 border-b">Meals</p>
          </div>
          <button className="bg-[#00df9a] py-2 text-white my-6 font-medium mx-auto w-[200px] rounded-md">
            Get startd
          </button>
        </div>
        <div className="w-full shadow-xl my-8 p-4 flex flex-col rounded-xl hover:scale-105 duration-300">
          <img
            src={touring}
            alt="/"
            className="w-20 mx-auto mt-[-60px] bg-white"
          />
          <h2 className="text-4xl font-bold text-center py-4">First Tour</h2>
          <p className="text-center text-3xl font-bold">3672$</p>

          <div className="text-center font-medium">
            <p className="py-2  border-b mx-8">East Africa</p>
            <p className="py-2 border-b mx-8">Air Ticket</p>
            <p className="py-2 border-b mx-8">Accomodation</p>
            <p className="py-2 border-b">Meals</p>
          </div>
          <button className="bg-[#00df9a] py-2 text-white my-6 font-medium mx-auto w-[200px] rounded-md">
            Get startd
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
