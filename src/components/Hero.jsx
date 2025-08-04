import React from "react";
import { ReactTyped } from "react-typed";
function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col text-center justify-center">
        <p className="text-[#00df9a] font-bold py-2 font-sans text-center">
          TREKKING GORILLA
        </p>
        <h1 className="md:text-6xl sm:6xl text-xl md:py-6 font-bold">
          GO TREKKING GORILLA
        </h1>
        <div className="flex justify-center items-center text-center">
          <p className="md:text-3xl sm:text-3xl text-xl font-semibold sm:text-center">
            Let us take you places trekking Gorillas in{" "}
            <ReactTyped
              className="text-[#00df9a] font-serif font-bold text-center"
              strings={[
                " Uganda ",
                " Rwanda",
                " Tanzania",
                " Zambabwe",
                " South Africa",
              ]}
              typeSpeed={140}
              backSpeed={150}
              loop
            ></ReactTyped>
          </p>
        </div>
        <p className="py-2 text-gray-500 font-bold md:5xl text-xl sm:text-4xl">
          face to face with Gorilla
        </p>
        <button className="bg-[#00df9a] py-3 w-[200px]  mx-auto rounded-md my-6 text-black font-medium">
          See More
        </button>
      </div>
    </div>
  );
}

export default Hero;
