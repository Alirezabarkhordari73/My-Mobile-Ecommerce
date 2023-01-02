import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";

import { addItemToCart } from "../Redux/CartSlice/CartSlice";

type Props = {
  product: Product;
};

const Products = ({ product }: Props) => {
  const [heatLikeButton, setHeatLikeButton] = useState(false);
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addItemToCart({ product, quantity: 1 }));

    toast.success(`${product.name} added to cart`, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.6 }}
      className="product-card product-card-box-shadow">
      <div className="flex items-start justify-between w-full">
        <button
          onClick={addItemToBasket}
          type="button"
          className="rounded-md text-mainblue text-sm px-2 py-1 flex justify-center gap-2 hover:text-[1rem] transition-all duration-100">
          Add To Cart +
        </button>
        <BsFillSuitHeartFill
          onClick={() => setHeatLikeButton((prevState) => !prevState)}
          className="neu-morph-container mr-4"
          style={{ color: heatLikeButton ? "#f44" : "#cfcfcf" }}
        />
      </div>

      <div>
        <Image
          src={urlFor(product.image[0]).url()}
          width={300}
          height={300}
          className="w-[210px] h-[210px] object-contain"
          alt={product.name}
        />
      </div>

      <div className="flex-col flex items-center">
        <span className="text-[#ff3737] text-lg font-semibold mt-1">
          {product.price}$
        </span>
        <h1 className="font-semibold">{product.name}</h1>
      </div>
    </motion.div>
  );
};

export default Products;
