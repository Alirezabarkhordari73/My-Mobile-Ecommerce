import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";

import useWindowDimensions from "../Hooks/useWindowDimensions";
import { useAppSelector } from "../Redux/Hooks";
import { useStateCartContext } from "../context/CartContext";

type Props = {};

const Header = (props: Props) => {
  const { isCartOpen, setIsCartOpen } = useStateCartContext();

  const [menuBtnClick, setMenuBtnClick] = useState(false);
  const [reachBreakPoint, setReachBreakPoint] = useState(false);

  const totalQty = useAppSelector((state) => state.cart.totalQuantity);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 1024) {
      setReachBreakPoint(true);
    } else {
      setReachBreakPoint(false);
    }
  }, [width]);

  return (
    <header className="w-full h-[20%] fixed top-0 left-0 z-[200]">
      <div className="flex justify-between items-center h-[80px] bg-gradient-to-b from-[#fff] to-[#dfdfdf] p-5">
        <div className="flex justify-center items-center space-x-7">
          <button
            type="button"
            className="relative"
            onClick={() => setIsCartOpen(true)}>
            <HiOutlineShoppingBag className="text-[2.5rem] cursor-pointer" />
            <span className="w-6 h-6 absolute bg-mainblue rounded-full text-mainWhite text-center top-6 right-0 z-10 animate-bounce">
              {totalQty}
            </span>
          </button>

          <form className="flex items-center justify-center space-x-2">
            <HiSearch className="text-[1.5rem] text-mainblue font-semibold" />
            <input
              type="text"
              title="Search Bar"
              placeholder="Type to search"
              className="p-2 w-[12rem] lg:w-[20rem] rounded-md outline-none"
            />
          </form>
        </div>
        <Link href="/">
          <h1 className="text-xl lg:text-2xl font-bold text-mainblue tracking-[1px]">
            Mobile-Shop
          </h1>
        </Link>
      </div>
      <div className="bg-mainblue z-[100] h-[20px] relative flex justify-end items-center p-5 drop-shadow-md">
        {!reachBreakPoint ? (
          <HiMenuAlt2
            onClick={() => setMenuBtnClick((prevState) => !prevState)}
            className="text-2xl text-mainWhite cursor-pointer"
          />
        ) : null}

        <div
          className={`${
            menuBtnClick ? "opacity-100" : "opacity-0 h-0"
          } w-full h-[350px] absolute top-[2.5rem] left-0 p-5 lg:w-[400px] lg:p-2 duration-300`}>
          <div className="bg-mainblue h-full w-full flex flex-col justify-start gap-4 items-start text-md text-mainWhite font-semibold p-5 z-[100]">
            <div className="header-menu-items">Home</div>
            <div className="header-menu-items">Products</div>
            <div className="header-menu-items">Explore</div>
            <div className="header-menu-items">Contact</div>
          </div>
        </div>

        {reachBreakPoint ? (
          <ul className="flex justify-center items-center gap-12 pl-5">
            <li className="text-[#fff] cursor-pointer">Home</li>
            <li className="text-[#fff] cursor-pointer">Products</li>
            <li className="text-[#fff] cursor-pointer">Explore</li>
            <li className="text-[#fff] cursor-pointer">Contact</li>
          </ul>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
