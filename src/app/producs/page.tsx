'use client'
import { Chair, Sofa } from '@/assets'
import Image from 'next/image'
import React, { useEffect } from 'react'
import getProducts from '../store/product.store';
import Link from 'next/link';

const page = () => {
    const { loading, error, getproducts, products } = getProducts();

    useEffect(() => {
        getproducts();
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
                    <div className='md:pl-[50px] pt-[50px]'>
                        <h1 className='text-[18px] w-[120px] font-normal text-[#2A254B] hover:text-neutral-400 '>Product type</h1>
                        <div className='mt-4 flex flex-col gap-3 px-3 text-[#2A254B]'>
                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <h3 className=' font-normal text-[#2A254B] hover:text-neutral-400'>Furniture</h3>
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
                        {products.map((product) => (
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