import React from 'react';
import Image from 'next/image';
import { SlArrowRightCircle } from "react-icons/sl";

const Banner = () => {
  return (
    <div className='relative pt-12'>
      <div className='absolute inset-0 flex flex-col justify-start items-start text-left pt-14 px-4'>
        <div className='uppercase'>
          <p className='text-sm text-orange-500 border bg-gray-200 w-full md:w-80 rounded-xl text-start'>
            fresh ingredients sourced globally 
          </p>
          <h1 className='pt-2 text-black text-3xl sm:text-4xl md:text-6xl font-extrabold'>
            sushi elegance
          </h1>
          <div className='flex flex-col md:flex-row items-start justify-start'>
            <h1 className='pt-2 text-orange-500 text-3xl sm:text-4xl md:text-6xl font-extrabold'>
              redefined
            </h1>
            <h1 className='pt-2 text-black text-3xl sm:text-4xl md:text-6xl font-extrabold ml-2'>
              for
            </h1>
          </div>
          <h1 className='pt-2 text-black text-3xl sm:text-4xl md:text-6xl font-extrabold'>
            your plate.
          </h1>
        </div>
        <div className='pt-10'>
          <button className='flex items-center justify-center w-32 sm:w-40 h-12 text-center text-white bg-black hover:bg-orange-600 rounded'>
            <span>Reserve Now</span>
            <SlArrowRightCircle className='ml-2 w-5 h-5' />
          </button>
        </div>
      </div>
      <div className='flex justify-end pt-28 md:pt-52'>
        <Image 
          width={100} height={500}
          src="https://img.freepik.com/vector-gratis/fondo-resena-hotel-plano_23-2148158366.jpg?t=st=1732300189~exp=1732303789~hmac=d41dc9c690330f00c66addc4a3ce57362188c8abb28c998786f605620d98412b&w=360" 
          alt="imagenfondo"
          className=' sm:w-80 md:w-96 lg:w-2/4  object-cover md:mt-[-90px]'
        />
      </div>
    </div>
  );
}

export default Banner;