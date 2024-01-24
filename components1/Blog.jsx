"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Blog({dtxt, dcolor, dfl, dbg, dsrc}) {
  return (
    <section  className="flex justify-between bg-gray-900 py-32">


      <div className="px-[390px]">
        <div className="text-center">
              <h1 className="text-gray-100  leading-[2.4rem] text-[1.9rem] font-semibold">
            Empower business to multi-cloud.
          </h1>
          
        </div>

      </div>



      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >





        <SwiperSlide  className="bg-gray-900" >          
     <section  className={`${dcolor} ${dbg} mx-36   py-2  rounded-3xl  gap-[10px] items-center mb-3 dark:bg-gray-900`}>
          <div  className=" ml-8 mr-12 py-2">
            <div className="py-3">
  
            <div className="sm:text-[1.4rem] max-sm:pt-20 text-[1.3rem] font-bold">
              Our Mission
            </div>
            <p className="text-md  leading-5 max-w-xl mt-2">
            Empower business to leverage multi-cloud. Empower business to leverage multi-cloud. {`${dtxt}`} Empower business to leverage multi-cloud. We believe that no two orgs are alike, and therefore, their cloud strategies should be just as unique.
            </p>
            </div>
 
             
            <div className='mt-1'>
                <button className="px-4 py-2 text-white  hover:bg-blue-400 rounded-md transition duration-300 bg-indigo-700 ">
                  Know More
                </button>  
             </div>
          </div>

          <div  className=" sm:w-1/2  max-w-screen-xl   py-8  text-center lg:py-10 ">
                 
    <div
         
            className="md:w-[95%] px-8 flex justify-center items-center"
          >
            <img src={`${dsrc}`} className=" rounded-3xl " />
          </div>

      </div>
          
        </section>
</SwiperSlide>
        <SwiperSlide className="bg-sea3">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-sea3">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-sea3">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-sea3">Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide className="bg-sea3">Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide className="bg-sea3">Slide 9</SwiperSlide>
      </Swiper>
</section>
  );
}
