// 'use client'
// import React, { useEffect, useState } from 'react'
// import { BsPatchCheckFill } from "react-icons/bs";
// import { BiSolidNotepad } from "react-icons/bi";
// import { FaTruckFast } from "react-icons/fa6";
// import { ImLeaf } from "react-icons/im";
// import axios from 'axios';
// const Bloc = ({ params }: {
//     params: { contact: string }
// }) => {
//     const { contact } = params

//     const getproduct = async () => {
//         try {
//             const res = await axios.get(`https://65f8a52cdf151452460fd72b.mockapi.io/produckts?id=${contact}`);
//             const data = res.data;
//             setd(data)

//         } catch (error) {
//             console.error(error);
//         }
//     }
//     const [d, setd] = useState([])

//     useEffect(() => {
//         getproduct()
//     }, [])
//     return (
//         <>
//             <section>
//                 {d.map((product: any) => (
//                     <div key={product.id} className="w-[300px] m-auto rounded p-4 shadow-lg transition-all duration-700 hover:scale-110 drop-shadow-2xl hover:bg-green-200 mb-10">
//                         <img className="w-full border-spacing-2 rounded" src={product.image} alt={product.name} />
//                         <h3 className="text-[#2A254B] text-2x1">{product.name}</h3>
//                         <div className='flex items-center gap-3'>
//                             <h3 className="text-[#2A254B] text-xl">{product.title}</h3>
//                             <h3 className='text-[#2A254B] text-xl'>{product.description}</h3>
//                         </div>
//                         <h3 className='text-[#2A254B] text-xl'>{product.sale} $</h3>

//                     </div>
//                 ))}
//                 <p className="pb-[21px] md:pt-[100px] sm:pt-[70px] pt-[40px] dark:text-slate-600 text-2xl text-center text-[#1a253c]">
//                     What makes our brand different
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-8 px-4 py-4">
//                     <div className="group w-[342px] md:w-[270px] p-3  ">
//                         <FaTruckFast className="text-[24px] text-black group-hover:text-blue-400 duration-200" />
//                         <p className="text-xl  text-[#1a253c] dark:text-slate-600 pt-4">
//                             Next day as standard
//                         </p>
//                         <p className="text-[16px] text-[#1a253c] dark:text-slate-600 pt-2">
//                             Order before 3pm and get your  order the  next day as standard
//                         </p>
//                     </div>

//                     <div className="group w-[342px] md:w-[270px]  p-4 duration-200">
//                         <BsPatchCheckFill className="text-black group-hover:text-red-500 text-[24px] duration-200" />
//                         <p className="text-xl  text-[#1a253c] dark:text-slate-600 pt-4">
//                             Made by true artisans
//                         </p>
//                         <p className="text-[16px]  text-[#1a253c] dark:text-slate-600 pt-2">
//                             Handmade crafted goods made with real passion and craftmanship
//                         </p>
//                     </div>
//                     <div className="group w-[342px] md:w-[270px]  p-4  duration-200">
//                         <BiSolidNotepad className="text-black group-hover:text-yellow-400 text-[24px] duration-200" />
//                         <p className="text-xl  text-[#1a253c] dark:text-slate-600 pt-4">
//                             Unbeatable prices
//                         </p>
//                         <p className="text-[16px]  text-[#1a253c] dark:text-slate-600 pt-2">
//                             For our materials and quality you won’t find better prices
//                             anywhere
//                         </p>
//                     </div>
//                     <div className="group w-[342px]  md:w-[270px]  p-4  duration-200">
//                         <ImLeaf className="text-black text-[24px] group-hover:text-green-400 duration-200" />
//                         <p className="text-xl  text-[#1a253c] dark:text-slate-600 pt-4">
//                             Recycled packaging
//                         </p>
//                         <p className="text-[16px]  text-[#1a253c] dark:text-slate-600 pt-2">
//                             We use 100% recycled packaging to ensure our footprint is
//                             manageable
//                         </p>
//                     </div>
//                 </div>
//                 <hr />
//             </section>


//             <section className="mt-[30px] flex flex-col container mx-auto justify-center  max-w-[1273px] sm:h-[364px] h-[320px] ">
//                 <p className="md:pt-[68px] text-center sm:text-[32px] text-[20px] px-1 pt-4   text-[#2A254B] dark:text-slate-600">
//                     Join the club and get the benefits
//                 </p>
//                 <p className="pt-4 px-1 text-[#2A254B] dark:text-slate-600 text-center max-w-[470px] mx-auto ">
//                     Sign up for our newsletter and receive exclusive offers on new ranges,
//                     sales, pop up stores and more
//                 </p>
//                 <form className="flex mx-auto pt-[72px] ">
//                     <input
//                         type="email"
//                         className="outline-none hover:border-5 hover:bg-slate-600  w-[170px] sm:w-[350px] md:w-[400px]  lg:w-[542px]  placeholder:pr-40 bg-slate-200  placeholder-red text-[#2A254B] py-4 pl-[16px] sm:pl-[32px]"
//                         placeholder="your@email.com"
//                         required
//                     />
//                     <button
//                         type="submit"
//                         className="w-[100px] text-slate-200 hover:border-2 border-[#23314e]  hover:bg-slate-200 hover:text-[#23314e] font-medium sm:w-[118px]  bg-[#1a253c] "
//                     >
//                         Sign up
//                     </button>
//                 </form>
//             </section>
//         </>
//     )
// }

// export default 







////////////////////
'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";

const Details = ({ params }: {
    params: { contact: string }
}) => {

    const [detail, setdetail] = useState([])
    const { contact } = params
    const getproduct = async () => {
        try {
            const res = await axios.get(`https://65f8a52cdf151452460fd72b.mockapi.io/produckts?id=${contact}`)
            const data = await res.data
            setdetail(data)



        } catch (error) {

        }

    }
    useEffect(() => {
        getproduct()
    }, [detail])
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

    return (
        <div>
            <div>

                {/* &lt; section class="text-gray-600 body-font overflow-hidden" &gt; */}
                {detail.length > 0 ? detail.map((product) =>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt="ecommerce"
                                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                src={product.image}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-black tracking-widest">
                                    {product.name}
                                </h2>
                                <h1 className="text-[#2A254B] text-3xl title-font font-normal mb-1">
                                    The Dandy Chair
                                </h1>
                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-4 h-4 text-indigo-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <span className="text-gray-600 ml-3">4 Reviews</span>
                                    </span>

                                    <span className="flex ml-3 pl-3 py-2 text-[#12131A] border-l-2 border-gray-200 space-x-2s">

                                        £250

                                    </span>
                                </div>
                                <p className="leading-relaxed pt-[40px]">

                                    Description
                                </p>
                                <p className="leading-relaxed pt-[20px]">
                                    A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                                </p>
                                <p>

                                </p>
                                <div className="flex mt-6 items-center gap-3 pb-5 border-b-2 border-gray-100 mb-5">

                                    <div className="flex">
                                        <span className="mr-3">Color</span>
                                        <button className="border-2 border-gray-300  rounded-full w-6 h-6 focus:outline-none  bg-white shadow-md hover:rounded-xl duration-500 hover:scale-105 hover:shadow-xl" />
                                        <button className="border-2 border-gray-300 ml-1 bg-orange-600 rounded-full w-6 h-6 focus:outline-none  shadow-md hover:rounded-xl duration-500 hover:scale-105 hover:shadow-xl" />
                                        <button className="border-2 border-gray-300 ml-1 bg-gray-600 rounded-full w-6 h-6 focus:outline-none shadow-md hover:rounded-xl duration-500 hover:scale-105 hover:shadow-xl " />
                                    </div>
                                    <div className="flex ml-6 items-center">
                                        <div className='flex gap-5 relative'>
                                            <span className="mr-3">Dimensions</span>
                                            <div className=" absolute pt-[50px] text-[#2A242B] font-normal flex gap-5">
                                                <p>
                                                    Height
                                                    <br />
                                                    110cm
                                                </p>
                                                <p>
                                                    Width
                                                    <br />
                                                    75cm
                                                </p>
                                                <p>
                                                    Depth
                                                    <br />
                                                    50cm
                                                </p>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-gray-900">
                                        £{product.sale}
                                    </span>



                                    <div className="">


                                        <div className="flex justify-center sm:justify-end">
                                        </div>
                                    </div>
                                </div>




                                <div className="items-center gap-5 pl-[21px] mt-[50px] flex sm:hidden">
                                    <button onClick={decreaseQuantity} className="w-[30px] h-[30px] hover:bg-[#2A254B] hover:text-[#fff] border-2 rounded">-</button>
                                    <p>{quantity}</p>
                                    <button onClick={increaseQuantity} className="w-[30px] h-[30px] hover:bg-[#2A254B] hover:text-[#fff] border-2 rounded">+</button>
                                    <div className="">
                                        <p className="sm:text-end text-center pt-4">Subtotal £ {totalPrice}</p>

                                        <div className="flex justify-center sm:justify-end">
                                            <button
                                                type="submit"
                                                className=" mb-[48px] mt-4 w-[172px]  flex  items-center justify-center hover:bg-[#F9F9F9]  hover:text-[#1a253c] rounded-2 border-2   h-[56px] bg-[#1a253c] text-slate-200 font-medium"
                                            >
                                                Go to checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>



                                <div className="flex pt-[100px] pr-[40px] ">
                                    <div className="items-center gap-5 pl-[21px] hidden sm:flex">
                                        <button onClick={decreaseQuantity} className="w-[30px] h-[30px] hover:bg-[#2A254B] hover:text-[#fff] border-2 rounded">-</button>
                                        <p>{quantity}</p>
                                        <button onClick={increaseQuantity} className="w-[30px] h-[30px] border-2 rounded hover:bg-[#2A254B] hover:text-[#fff]">+</button>
                                        <p className="sm:text-end text-center">Subtotal £ {totalPrice}</p>
                                        <button className="bg-[#F9F9F9] text-[#2A254B]  border-2 py-2 px-6 focus:outline-none rounded  hover:bg-[#2A254B] hover:text-[#F9F9F9] mx-auto  sm:w-[220px]">Add to cart</button>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>

                ) : null}
            </div>
        </div >
    );
};

export default Details;