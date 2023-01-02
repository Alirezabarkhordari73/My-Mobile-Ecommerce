import React from "react";
import Image from "next/image";

import HeaderBanner from "../assets/images/Header-Banner.webp";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-[#ffffff] to-[#e4edf7] flex justify-between items-center px-5 py-3 lg:px-10 lg:py-4 transition-all duration-300 drop-shadow-lg">
      <div className="flex-col justify-start items-start space-y-4">
        <h1 className="text-[1.3rem] uppercase drop-shadow-sm tracking-[1px] font-semibold text-[#3c3c3c] lg:text-[3rem]">
          New Era Of Smart Phones
        </h1>
        <p className="text-[0.8rem] text-[#5d5d5d] lg:text-[0.9rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem cumque
          iure labore expedita et nobis animi. Dicta cum quae excepturi eveniet
        </p>
        <button className="bg-mainblue text-[#fff] text-[1rem] lg:text-[1.2rem] font-semibold px-7 py-2 lg:px-10 lg:py-3 rounded-md hover:bg-[#589eff] transition-all duration-100">
          Shop Now
        </button>
      </div>
      <Image
        src={HeaderBanner}
        alt="Header-Banner-Image"
        className="w-[240px] h-[240px] mt-3 mr-4 lg:w-[520px] lg:h-[520px] lg:mt-7 lg:mr-7 object-fit transition-all duration-300"
      />
    </div>
  );
};

export default Banner;
