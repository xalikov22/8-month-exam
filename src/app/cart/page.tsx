
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Vase } from '@/assets';


const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    const pricePerProduct = 85;
    const [totalPrice, setTotalPrice] = useState(pricePerProduct);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        setTotalPrice(totalPrice + pricePerProduct);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice(totalPrice - pricePerProduct);
        }
    };
    //////////////////


    const newCart = JSON.parse(localStorage.getItem("products") || "[]");
    let [shop, setShop] = useState<any>(newCart);
    useEffect(() => { }, [shop]);




    const b = () => {
        const newCart = (localStorage.removeItem("products"));
    }

    //////////////////
    return (
        <>
            <div className="container bg-white mx-auto lg:px-[62px] px-[20px]">
                <p className="sm:text-[36px] text-[24px] text-[#2A254B] md:pt-[64px] text-center md:text-start pb-[40px] sm:pb-[50px]">
                    Your shopping cart
                </p>
                <div className="justify-between  hidden sm:flex pb-[12px] ">
                    <p className="text-[14px] text-[#2A254B] ">
                        Product
                    </p>
                    <p className="text-[14px] text-[#2A254B]  pl-48">
                        Quantity
                    </p>
                    <p className="text-[14px] text-[#2A254B] ">Total</p>
                </div>
                <hr className=" pt-[12px]  hidden sm:flex" />\
                {shop.map((product: any) => (
                    <div key={product.id} className="flex text-[#2A254B] sm:justify-between py-[20px] items-center justify-center">

                        <div className="flex">
                            <img
                                src={product.image}
                                alt=""
                                className="sm:w-[109px] sm:h-[134px] w-[133px] h-[170px]" />
                            <div className="flex flex-col">
                                <p className="text-[20px] text-[#2A254B]  pl-[21px]">
                                    {product.name}
                                </p>
                                <p className="text-[14px] hidden sm:flex py-2 text-[#2A254B]  pl-[21px] max-w-[179px]">
                                    A timeless ceramic vase with a tri color grey glaze.
                                </p>
                                <p className=" text-[#2A254B]  pl-[21px]">£{product.sale}</p>
                                <div className="items-center gap-5 pl-[21px] flex sm:hidden">
                                    <button onClick={decreaseQuantity} className="w-[30px] h-[30px] hover:bg-[#2A254B] hover:text-[#fff] border-2 rounded">-</button>
                                    <p>{quantity}</p>
                                    <button onClick={increaseQuantity} className="w-[30px] h-[30px] hover:bg-[#2A254B] hover:text-[#fff] border-2 rounded">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="items-center gap-5 pl-[21px] hidden sm:flex">
                            <button onClick={decreaseQuantity} className="w-[30px] h-[30px] hover:bg-[#2A254B] hover:text-[#fff] border-2 rounded">-</button>
                            <p>{quantity}</p>
                            <button onClick={increaseQuantity} className="w-[30px] h-[30px] border-2 rounded hover:bg-[#2A254B] hover:text-[#fff]">+</button>
                        </div>
                        <p className="text-[18px] hidden sm:block">
                            £ {pricePerProduct * quantity}
                        </p>
                        <div className="">
                            <p className="sm:text-end text-center hidden pt-4">Subtotal £ {totalPrice}</p>
                            <p className="sm:text-end text-center">
                                Taxes and shipping are calculated at checkout
                            </p>
                            <div className="sm:flex justify-center hidden  sm:justify-end">
                                <button onClick={b}
                                    type="submit"
                                    className=" mt-[88px]  w-[150px] h-[50px] text-center items-center  text-[16px]  flex justify-center hover:bg-[#F9F9F9]  hover:text-[#1a253c] rounded-2 border-2   sm:h-[56px] bg-[#1a253c] text-slate-200 font-medium"
                                >
                                    Go to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                ))}


            </div>

        </>
    );
};

export default Cart;
