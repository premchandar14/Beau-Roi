import Image from 'next/image'
// import TestimonialCarousel from '@/components/TestimonialCarousel';
import TestimonialAnimation from '@/components/TestimonialAnimation';
import Map from '@/components/Map';
import BigImageDetails from '@/components1/BigImageDetails';
import Script from 'next/script';
export default function Home() {
    return ( 
        <>
        <div>
            <section className="bg-gradient-to-bl p-16 from-blue-500 to-indigo-400 via-white">
                <div className="landing-page ">
                    <div className="my-5 hero-text max-w-[550px]">
                        <h1 className="text-[20px] sm:pl-20 px-8  text-[48px] sm:text-[60px] text-gray-900 leading-[1.3] font-bold tracking-[-0.025em] mb-[16px] "> Step into success with <span className=" text-[68px] text-gray-800 inline"> BeauRoi</span></h1>
                        <p className="sm:pl-20 px-8  text-[18px] ">where innovation shapes your business future. Explore brilliance now!</p>
                    </div>
                    <div className="image-container flex justify-center">
                        <img className="person-image w-[46%] p-5 " src="https://cdn.pixabay.com/photo/2017/02/25/23/52/connections-2099068_1280.png" alt="cloud" />

                        <img className="ball-image bright-ball" src="hero-float4.jpg" alt="Ball" />
                        <img className="ball-image bleft-ball" src="aaaaa.png" alt="Ball" />
                        <img className="ball-image t-ball" src="hero-float6.jpg" alt="Ball" />
                        <img className="ball-image trb" src="hero-float1.jpg" alt="Ball" />
                        <img className="ball-image tlb" src="hero-float2.jpg" alt="Ball" />
                        <img className="ball-image tb" src="hero-float3.jpg" alt="Ball" />
            </div>
          </div>
          <section className="pt-12">
            <div className="flex  py-2 justify-center">
              <h2 className="text-4xl px-4 font-semibold text-center  text-gray-600 sm:text-4xl lg:text-5xl pb-4">
                Industries Covered
              </h2>
            </div>
            <div className="flex justify-center px-3 sm:px-2 pb-10 sm:pb-20">


 <div className="scroll imgBox" >
        <div>
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="education.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="banking.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="manufacturing.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="healthcare.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="ecommerce.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="education.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="banking.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="manufacturing.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="healthcare.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="ecommerce.png" /> 
        </div>
        <div>
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="education.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="banking.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="manufacturing.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="healthcare.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="ecommerce.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="education.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="banking.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="manufacturing.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="healthcare.png" />
                  <img width="250px" className="mx-3 opacity-65 logos-slide" src="ecommerce.png" /> 
        </div>
    </div>




            </div>
          </section>
        </section>









       <section className="py-20  sm:py-16 lg:py-24 z-40">
                    <div className=" px-4 mx-auto items-center flex flex-col ">
                        <h2 className="text-4xl px-4 font-bold text-center  text-black sm:text-4xl lg:text-5xl">
                            <span className="block    font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400 inline">Services
                            </span> We Offer
                        </h2>
                        <p className="sm:mb-20 mb-10  px-4 mx-auto pt-4 text-center  text-md text-gray-700">Comes directly from the desk of engineers, creators and managers at
                            Skcript.creators and managers at
                            Skcript.
                        </p>
                        <div className="grid grid-cols-1 gap-10 px-10 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 ">
                            <a href="augmental-ai" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                                        <div className="w-full h-full   p-5   relative">
                                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">Discover<br/>Augmental AI</h2>
                                                <p className="text-lg font-light text-white ">Shaping a Limitless<br/>Tomorrow </p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="augmentalai.jpg" className="w-full z-0  h-full    object-fill example "/>
                                </div>
                            </a>
                            <a href="/services/multicloud-computing" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                                        <div className="w-full h-full   p-5   relative">
                                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">MultiCloud <br/>Computing</h2>
                                                <p className="text-lg font-light text-white">Simplifying Complexities,<br/>Maximizing Value</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="multicloud.jpg" className="w-full z-0  h-full    object-fill example "/>
                                </div>
                            </a>
                            <a href="/services/application-development" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                                        <div className="w-full h-full   p-5   relative">
                                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">Application<br/>Development</h2>
                                                <p className="text-lg font-light text-white">Tailored Solutions for<br/>Your Unique Needs</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="appdev.jpg" className="w-full z-0  h-full    object-fill example "/>
                                </div>
                            </a>
                            <a href="/services/data-and-analytics" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                                        <div className="w-full h-full   p-5   relative">
                                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">Data &<br/>Analytics</h2>
                                                <p className="text-lg font-light text-white"> Unleash Your Business's<br/>Untapped Potential</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="data.jpg" className="w-full z-0  h-full    object-fill example "/>
                                </div>
                            </a>
                            <a href="/services/strategic-it-consultation" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                                        <div className="w-full h-full   p-5   relative">
                                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">Strategic IT<br/>Consultation</h2>
                                                <p className="text-lg font-light text-white">Your Pathway to Success<br/>in the Digital Era</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="ideas.jpg" className="w-full z-0  h-full    object-fill example "/>
                                </div>
                            </a>
                            <a href="/services/time-and-material" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                                        <div className="w-full h-full   p-5   relative">
                                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">Time &<br/>Material</h2>
                                                <p className="text-lg font-light text-white">Measurable Results,<br/>Consistently Delivered</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="time-materials.jpg" className="w-full z-0  h-full    object-fill example "/>
                                </div>
                            </a>
                            <a href="/services/training-and-recruitment" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                                        <div className="w-full h-full   p-5   relative">
                                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">24/7<br/></h2>
                                                <p className="text-lg font-light text-white">Support That Exceeds<br/>Your Imagination</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="24--7service.jpg" className="w-full z-0  h-full    object-fill example "/>
                                </div>
                            </a>
                            <a href="/services/24-7" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                                        <div className="w-full h-full   p-5   relative">
                                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                                <h2 className="text-2xl font-bold  text-white stroke-2 stroke-black mb-6 pb-4">Training &<br/>Recruitment</h2>
                                                <p className="text-lg font-light text-white">Crafting<br/>Industry-Ready Talent</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="trainings.jpg" className="w-full z-0  h-full    object-fill example "/>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

 <BigImageDetails/>



            <div className='border-y-[0.5px] border-gray-200 flex-1  justify-center item-center bg-gradient-to-r from-pink-200 to-blue-200  pb-20 w-[100%]'>
                     <div className="p-10 max-sm:text-center sm:pt-20 pb-8 flex justify-center item-center"> <h3 className="mb-2 text-5xl font-semibold  text-gray-700 dark:text-gray-100">
          Subscribe to our Newsletter
        </h3></div>
        <div className="flex justify-center item-center">

                {/* <img src="4r.png" className='w-full h-full object-cover absolute mix-blend-overlay'/> */}
                <div className="flex items-center justify-center max-sm:px-0 sm:py-6">

     <div className="flex flex-wrap bg-black/10 justify-center items-center sm:w-[1230px] sm:h-[200px] p-5 mx-auto text-left  rounded lg:flex-nowrap md:p-8 dark:border-gray-700">
     
      <div className="flex-1 justify-center item-center w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Transformation Begins Here
        </h3>
        <p className="text-gray-900 ">
          Gear up to embark on a journey towards a greatest feature
        </p>
      </div>
      <div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
        <form noValidate="">
          <input type="hidden" name="tags" defaultValue="earlyaccess" />
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="flex-1 px-3 py-2 placeholder-black border border-gray-400 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
            <button
              type="submit"
              className="sm:ml-4 w-full px-6 py-4 mt-5 text-white bg-gray-900 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap "
            >
            
              Les's Connect
            </button>

          </div>
        </form>
      </div>
    </div>
                </div>
              </div>
            </div>



       <div className=" py-8 sm:py-20  ">  
                            <div className="pt-24 pb-20 flex justify-center  item-center"> <h3 className="mb-2 max-sm:text-center text-5xl font-semibold  text-gray-700 dark:text-gray-100">
          Request for Services
        </h3></div>
          
  <div className="flex justify-center items-center max sm:mx-20  shadow-2xl shadow-gray-300  ">
    
    
        <div className='max-sm:hidden bg-gradient-to-tl from-purple-900 to-blue-900 h-[744px] w-[80%] relative'>
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
<div className="container  border-[1px] border-gray-100 sm:px-20 bg-white">
    <div className="  px-4 lg:px-2">
      <div className="w-full p-8  my-4 px-12   bg-white">

        <p className=" mb-16  pt-3 leading-8 max-w-2xl text-md text-gray-700">
 <br />{" "}
          <span className="text-3xl   sm:text-3xl">
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
          <div className="my-2 mt-[-20px] ">
            {/* <button */}
            {/*   className="uppercase text-xl font-semibold tracking-wide bg-gradient-to-tl from-green-200 to-blue-900 text-white p-3 rounded-md w-full  */}
            {/*     focus:outline-none focus:shadow-outline" */}
            {/* > */}
            {/*   Send */}
            {/* </button> */}
            <div className="bdy ">
            <a className="arrr" href="" >
    <span className="text-sm flex item-center">Send</span>
    <div className="liquid"></div>
</a></div>
          </div>
        </form>
                                    <Script src="https://web3forms.com/client/script.js" async defer></Script>
      
      </div></div>
    </div>
  </div>
  </div>  







<Map />





      </div> 
      </>
    )
}