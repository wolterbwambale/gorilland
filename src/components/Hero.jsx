import React from "react";
import { ReactTyped } from "react-typed";
function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col text-center justify-center">
        <p className="text-[#00df9a] font-bold">TREKKING GORILLA </p>
        <h1 className="md:text-7xl sm:6xl text-xl md:py-6 font-bold">
          GO TREKKING GORILLA
        </h1>
        <div>
          <p className="md:text-4xl sm:text-4xl text-xl font-semibold">
            Let us take you places trekking Gorillas in{" "}
            <ReactTyped
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
      </div>
    </div>
  );
}

export default Hero;
