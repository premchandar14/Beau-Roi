

const About = () => {
  return (

      
        <div className="  text-white bg-gradient-to-tl from-gray-600 via-purple-900 to-sky-900 px-16 pt-10 pb-32">

            <section

      className='flex justify-between items-center max-lg:flex-col gap-10 w-full py-28 max-container px-10 max-sm:gap-20 max-sm:px-10'
    >
      <div       initial = {{opacity: 0.5, scale: 0.9}}
            whileInView = {{opacity: 1, scale: 1}}
              viewport={{ once: true,    }}
            transition = {{duration: 0.6}} className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Optimize Your Data & 
                <span className='text-amber-400'> Business </span> Process
        </h2>
        <p className='mt-4 lg:max-w-lg '>
          Your trusted domain-centric data cloud platform solution and
                  service provider. With our deep-domain expertise and data
                  engineering superpowers, we are committed to delivering
                  strategic business outcomes through tech innovations.
                  Your trusted domain-centric data cloud platform solution and
                  service provider. 
        </p>

        <div className='mt-11'>
                <button className="px-3  py-2  bg-amber-300 rounded-sm text-sm">
                  Know More
                </button>     <a
                      href="#"
                      className="text-sm  leading-6 "
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>      </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          className="rounded-3xl"
          src="/ediit.png"
          alt='detail'
          width={570}
          height={522}

        />
      </div>
    </section>
     <section  className="text-gray-900 py-2 bg-white rounded-3xl flex dark:bg-gray-900">
          <div  className="sm:w-auto pl-28 py-10">
            <div className="py-5">
            <div className="sm:text-[2rem] max-sm:pt-20 text-[1.3rem] max-sm font-extrabold">
              Our Vision
            </div>
            <p className="text-lg font-semibold leading-8 max-w-xl mt-2">
               Empower business to leverage the full potential of multi-cloud environments. We believe that no two organisations are alike, and therefore, their cloud strategies should be just as unique.
            </p>
            </div>
            <div className="py-5">
             <div className="sm:text-[2rem]  max-sm:pt-20 text-[1.3rem] max-sm font-extrabold">
              Our Mission
            </div>
            <p className="text-lg font-semibold leading-8 max-w-xl mt-2">
               To be your guiding light, simplify the complexities of multi cloud environments and empower your organisation to harness their full potential.
            </p>
            </div>
            <div className='mt-1'>
                <button className="px-4 py-2 text-white border border-solid hover:bg-blue-400 rounded-md transition duration-300 bg-indigo-700 border-gray">
                  Know More
                </button>  
             </div>
          </div>

          <div  className=" sm:w-1/3  max-w-screen-xl px-10 ml-20  py-8  text-center lg:py-10 ">
              <dl  className="flex py-8 max-w-screen-md  gap-8 mx-auto   dark:text-white">
                  <div  className="py-4 flex  flex-col items-center justify-center">
                      <dt  className="mb-2 text-3xl text-gray-900 md:text-4xl  font-extrabold">73M+</dt>
                      <dd  className="font-bold  text-lg text-gray-900  dark:text-gray-400">developers</dd>
                         <p className="text-sm    mt-1">
                           Empower Your Business with Smart Solutions 
                         </p>
                  </div>
                 <div  className="py-4 flex  flex-col items-center justify-center">
                      <dt  className="mb-2 text-3xl md:text-4xl text-gray-900 font-extrabold">73M+</dt>
                      <dd  className="font-bold text-gray-900 text-lg  dark:text-gray-400">developers</dd>
                         <p className="text-sm    mt-1">
                           Empower Your Business with Smart Solutions 
                          </p>
                  </div>
              
              </dl>              <dl  className="flex py-8 max-w-screen-md  gap-8 mx-auto text-gray-900  dark:text-white">
                  <div  className="py-4 flex  flex-col items-center justify-center">
                      <dt  className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
                      <dd  className="font-bold text-gray-900 text-lg  dark:text-gray-400">developers</dd>
                         <p className="text-sm    mt-1">
                           Empower Your Business with Smart Solutions 
                         </p>
                  </div>
                 <div  className="py-4 flex  flex-col items-center justify-center">
                      <dt  className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
                      <dd  className="font-bold text-gray-900 text-lg  dark:text-gray-400">developers</dd>
                         <p className="text-sm    mt-1">
                           Empower Your Business with Smart Solutions 
                          </p>
                  </div>
              
              </dl>
          </div>
        </section>
    </div>

  )
}

export default About

   