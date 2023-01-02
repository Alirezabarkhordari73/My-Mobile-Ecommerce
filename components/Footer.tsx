import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="w-full h-[190px] bg-[#f0f0f0] drop-shadow-sm flex flex-col items-center justify-center space-y-5 lg:flex-row space-x-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold">Sign up for Newsletter ...</h1>
          <p className="text-[#636363] mt-2">
            and receive %20 coupon for first shopping.
          </p>
        </div>

        <form className="flex justify-center items-center">
          <div className="bg-mainblue w-[100px] lg:w-[120px] h-12 text-center text-xl text-mainWhite flex items-center justify-center">
            Subscribe
          </div>
          <input
            className="w-[230px] lg:w-[390px] h-12 p-3 outline-none"
            title="subscribe"
            placeholder="Enter your email address"
          />
        </form>
      </div>
      <div className="footer-container md:h-[400px] grid grid-rows-3 gap-2 md:grid-cols-3 shadow-md">
        <div className="w-full flex-col justify-start items-center p-4 lg:pl-20">
          <h1 className="text-xl lg:text-3xl font-bold tracking-[1px]">
            Mobile-Shop
          </h1>
          <p className="font-semibold lg:mt-3 lg:text-lg">
            Got Question? Call Us ...
          </p>
          <p className="font-semibold text-mainblue text-lg lg:text-2xl lg:mt-3 tracking-[1px]">
            09337756404
          </p>
          <p className="text-[#8a8a8a] text-lg lg:mt-3">
            17 Princess Road, London Grester London NW18JR, UK
          </p>
          <div className="flex justify-start items-center space-x-5 text-2xl mt-3 lg:text-3xl">
            <IoLogoFacebook />
            <AiFillTwitterCircle />
            <AiFillGoogleCircle />
            <AiFillYoutube />
          </div>
        </div>
        <div className="w-full p-4 lg:pl-20">
          <h1 className="font-bold text-lg">Find it fast</h1>
          <ul className="text-[#8a8a8a] text-base lg:mt-3">
            <li>Computers & Laptops</li>
            <li>Cameras & Photos</li>
            <li>Hardware</li>
            <li>Smartphones & Tablets</li>
            <li>TV & Audio</li>
            <li>Car Electronics</li>
          </ul>
        </div>
        <div className="w-full p-4 lg:pl-20">
          <h1 className="font-bold text-lg">Customer Care</h1>
          <ul className="text-[#8a8a8a] text-base mt-3">
            <li>Computers & Laptops</li>
            <li>Cameras & Photos</li>
            <li>Hardware</li>
            <li>Smartphones & Tablets</li>
            <li>TV & Audio</li>
            <li>Car Electronics</li>
            <li>Smartphones & Tablets</li>
            <li>TV & Audio</li>
            <li>Car Electronics</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
