import Hero from '@/components1/Hero';
import Script from 'next/script';

import Image from 'next/image'

export default function Home() {
  return (
          <>
         {/* <div className="sm:text-[3rem] max-sm:py-20 pt-32 py-10 px-10 bg-gradient-to-br from-blue-900 to-indigo-900 via-sky-100 text-white text-[1.4rem] max-sm font-bold"> */}
         {/*      Contact Us */}
         {/*    </div> */}
            <div className='bg-gradient-to-tl from-purple-900 to-blue-900 h-[620px] w-full relative'>
              <div>
                <img src="3r.png" className='w-full h-full object-cover absolute mix-blend-overlay'/>
                <div className="flex justify-center max-sm:px-0 py-64">
                  <h1 className="text-white max-sm:text-3xl text-7xl font-semibold">
                    Contact Us
                  </h1>
                </div>
              </div>
            </div>
            <div className="spac layert2 relative mt-[-311px]"></div>
                <div className=" ">  
          
  <div className="flex justify-center items-center border-y-[1px] border-r-[0.1px] border-gray-100  w-full  ">
    
    
        <div className='bg-gradient-to-tl from-purple-900 to-blue-900 h-[787px] w-[80%] relative'>
              <div>
                <img src="/24-7.jpg" className='w-full h-full object-cover absolute mix-blend-overlay'/>
                <div className="flex-col justify-center items-center max-sm:px-0 pt-[58vh] px-16">
                          <h1 className="font-bold text-white py-4 uppercase text-4xl">
            Request for Services
          </h1>
                  <h1 className="text-gray-100 w-[90%] max-sm:text-lg  text-lg ">
          Eager to propel growth a purposful transformating. We have left an
          incredible mark across industries. Now it's time to fuse our expertise
          with your belief.
                  </h1>
                </div>
              </div>
            </div>
<div className="container px-20 bg-white">
    <div className="   px-4 lg:px-2">
      <div className="w-full p-8  my-4 px-12 py-28  bg-white">

        <p className=" mb-16  pt-3 leading-8 max-w-2xl text-md text-gray-700">
 <br />{" "}
          <span className="   text-4xl">
            Care to share a glimps<br/>of your journey
          </span>
        </p>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            defaultValue="103d9f61-759f-4ac3-9b7a-0377c9d138c4"
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600" 
              type="text"
              placeholder="First Name*"
              name="name"
              required=""
            />
            <input
            className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600" 

              type="text"
              placeholder="Last Name*"
              name="lname"
              required=""
            />
            <input
              className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600" 

              type="email"
              placeholder="Email*"
              name="email"
              required=""
            />
            <input
             className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600" 

              type="number"
              placeholder="Phone*"
              name="ph:"
              required=""
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Message*"
              className=" peer h-32 w-[100%] border-[1px]  border-gray-400 text-gray-900 mt-2 p-3 rounded-sm  focus:outline-none focus:shadow-outline"
              name="msg"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="my-2 ">
            <button
              className="uppercase text-xl font-semibold tracking-wide bg-gradient-to-tl from-green-200 to-blue-900 text-white p-3 rounded-md w-full 
                focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
                                    <Script src="https://web3forms.com/client/script.js" async defer></Script>
      
      </div></div>
    </div>
  </div>
  </div> 
          </>
  )
}
