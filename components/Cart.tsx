import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useStateCartContext } from "../context/CartContext";
import { useAppSelector } from "../Redux/Hooks";
import {
  removeEntireItem,
  increaseItemsCart,
  decreaseItemFromCart,
} from "../Redux/CartSlice/CartSlice";

type Props = {};

const Cart = (props: Props) => {
  const { isCartOpen, setIsCartOpen } = useStateCartContext();

  const dispatch = useDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) => state.cart.totalAmount);

  const removeFromCart = (id: string, name: string) => {
    dispatch(removeEntireItem({ id }));

    toast.success(`${name} Successfully Removed !`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const increaseItems = (id: string) => {
    dispatch(increaseItemsCart({ id }));
  };

  const decreasseItems = (id: string) => {
    dispatch(decreaseItemFromCart({ id }));
  };

  return (
    <>
      <ToastContainer />
      <div
        className={` ${
          isCartOpen ? "left-0" : "lg:left-[-530px] left-[-100%]"
        } bg-gradient-to-b from-[#fff] to-[#e6e6e6] w-full lg:w-[530px] h-screen flex flex-col items-start justify-between fixed top-0 shadow-xl z-[210] duration-300`}>
        <div className="flex h-[8%] p-7 bg-gradient-to-b from-[#fff] to-[#e6e6e6] w-full justify-between pb-5 items-center mb-5 border-b-[1px] border-[#ebebeb] drop-shadow-lg">
          <AiOutlineClose
            onClick={() => setIsCartOpen(false)}
            className="text-xl neu-morph-container cursor-pointer hover:bg-mainblue hover:text-[#fff]"
          />
          <h3 className="text-[#000] text-xl tracking-[1.1px] font-bold">
            Your Shopping Cart
          </h3>
        </div>

        <div className="h-[82%] w-full overflow-y-auto space-y-4">
          {cartItems.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              key={item.product._id}
              className="w-[90%] h-[270px] mx-auto cart-card-box-shadow bg-mainWhite rounded-md p-5">
              <div className="flex justify-between items-center h-full">
                <div className="h-full flex flex-col justify-center">
                  <button
                    onClick={() =>
                      removeFromCart(item.product._id, item.product.name)
                    }
                    className="text-mainblue mb-[3rem]">
                    Remove From Cart -
                  </button>
                  <Image
                    src={urlFor(item.product.image[0]).url()}
                    alt={item.product._id}
                    width={300}
                    height={300}
                    className="w-[160px] h-[160px] object-contain"
                  />
                </div>

                <div className="flex flex-col justify-center h-full w-[55%] space-y-5">
                  <h1 className="font-bold text-lg">{item.product.name}</h1>
                  <div className="flex justify-start items-center">
                    <p className="mr-2 font-semibold">Price :</p>
                    <h2 className="text-xl text-mainred font-bold">
                      {item.product.price} $
                    </h2>
                  </div>

                  <div className="flex justify-start items-center">
                    <p className="mr-2 font-semibold">Quantity :</p>
                    <button
                      onClick={() => increaseItems(item.product._id)}
                      className="w-8 h-8 rounded-md bg-mainblue text-mainWhite text-xl text-center">
                      +
                    </button>
                    <div className="text-[#000] text-lg w-8 h-8 text-center">
                      {item.quantity}
                    </div>
                    <button
                      onClick={() => decreasseItems(item.product._id)}
                      className="w-8 h-8 rounded-md bg-mainblue text-mainWhite text-xl text-center">
                      -
                    </button>
                  </div>
                  <button className="w-[80px] h-[35px] border-2 border-mainblue text-mainblue text-lg font-semibold rounded-md text-center">
                    Buy +
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-full h-[5%] flex justify-between items-center bg-mainblue px-10 mt-2 text-mainWhite text-xl font-semibold">
          <h1>Total Price :</h1>
          <h1>{totalPrice} $</h1>
        </div>
      </div>
    </>
  );
};

export default Cart;
