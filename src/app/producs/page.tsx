'use client'
import { Chair, Sofa } from '@/assets'
import Image from 'next/image'
import { MdShoppingCartCheckout } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import getProducts from '../store/product.store';
// import Link from 'next/link';
import axios from 'axios';
import Link from 'next/link';

// import { Link } from 'next/link';
interface userType {
    id: number;
    name: string;
    image: string;
    description: string;
    sale: number;
    title: string;
}

const page = () => {

    const [Search, setSearch] = useState("");
    const [Products, setProducts] = useState<userType[]>([])
    useEffect(() => {
        const storedProducts = JSON.parse(
            localStorage.getItem("products") || "[]") as userType[];
        setProducts(storedProducts);
    }, []);

    const shop = (id: any) => {
        const newProduct: userType | undefined = Products.find((p) => p.id === id);
        if (newProduct) {

            const newCart = JSON.parse(localStorage.getItem("products") || "[]");
            newCart.push(newProduct);
            localStorage.setItem("products", JSON.stringify(newCart));
        }
    };
    ;

    useEffect(() => {
        axios
            .get("https://65f8a52cdf151452460fd72b.mockapi.io/produckts")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {

            });
    }, []);



    return (
        <section>
            <div className="bg-[url('/Page.png')] h-[209px] ">

                <p className="container mx-auto md:pt-[68px] md:text-start sm:pl-[40px] text-center sm:text-[32px] text-[20px] px-1 pt-4   text-white">
                    All products
                </p>
            </div>
            <div className='flex justify-between container mx-auto'>
                <div className='  hidden sm:block'>
                    <input
                        type="text"
                        placeholder="Search"

                        onChange={(e) => setSearch(e.target.value)}
                        className='mx-auto bg-[#3b3a48] text-white
                         block mt-5 w-[400px] h-[40px] px-4'
                    />
                    <div className='md:pl-[50px] pt-[50px]'>
                        <h1 className='text-[18px] w-[120px] font-normal text-[#2A254B] hover:text-neutral-400 '>Product type</h1>
                        <div className='mt-4 flex flex-col gap-3 px-3 text-[#2A254B] '>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B]  hover:text-gray-400'>Furniture</h3>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B] hover:text-neutral-400'>Homeware</h3>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B] hover:text-neutral-400'>Sofas</h3>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B] hover:text-neutral-400'>Homeware</h3>
                            </div>
                            <div className='flex gap-1'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B] hover:text-neutral-400'>Light fittings</h3>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B] hover:text-neutral-400 '>Accessories</h3>
                            </div>
                        </div>
                    </div>
                    <div className='md:pl-[50px] mx-auto mt-[30px]'>
                        <h1 className='text-[18px] w-[120px] font-normal text-[#2A254B] hover:text-neutral-400 '>Price</h1>
                        <div className='mt-4 flex flex-col gap-3 px-3 text-[#2A254B]'>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B]'>0-100</h3>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B]'>101-250</h3>
                            </div>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B]'>250+</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[1200px]  '>



                    <div className="flex flex-wrap gap-2 mt-10">
                        {Products.filter((product) => {
                            if (Search === "") {
                                return product;
                            } else if (
                                product.name.toLowerCase().includes(Search.toLowerCase())
                            ) {
                                return product;
                            }
                        }).map((product) => (




                            <div key={product.id} className="w-[300px] m-auto rounded p-4 shadow-lg transition-all duration-700 hover:scale-110 drop-shadow-2xl hover:bg-green-200 mb-10">
                                <Link href={`/${product.id}`}>
                                    <img className="w-full border-spacing-2 rounded" src={product.image} alt={product.name} />
                                </Link>
                                <h3 className="text-[#2A254B] text-2x1">{product.name}</h3>
                                <div className='flex items-center gap-3'>
                                    <h3 className="text-[#2A254B] text-xl">{product.title}</h3>
                                    <h3 className='text-[#2A254B] text-xl'>{product.description}</h3>
                                </div>
                                <h3 className='text-[#2A254B] text-xl'>{product.sale} $</h3>
                                <Link href='/cart'>                                <button onClick={() => shop(product.id)} className='flex gap-5 items-center text-center px-[10px] w-[100px] h-[50px] rounded border-spacing-5 hover:bg-green-500 hover:text-white text-white bg-[#2A252B]'>Add Producs <MdShoppingCartCheckout /></button></Link>

                            </div>
                        ))}
                    </div>







                    <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
                    <script>

                    </script>
                </div>
            </div>
        </section>
    )
}

export default page