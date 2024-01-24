import React from 'react'

const Features = () => {
  return (
    <section className='container mx-auto flex bg-white justify-between text-gray-900 px-18 xl:mt-10 3xl:mt-16   gap-4  max-sm:p;x-10 '>
      <div className='cursor-pointer  flex items-center justify-center mx-7  bg-white py-4'>

          <div className="pr-6" >
            <img src="/c2.png" />
          </div>
          <div className=" max-w-sm">

              <h3 className='mt-5 text-lg font-bold'>
                AugmentalAI
              </h3>


            <p className='mt-3 '>
              hello there this is the service one in delivering
            </p>
          </div>
          <div className="mr-8" >
            <img src="/ar.png" width="50" />
          </div>
      </div>
       <div className='cursor-pointer  flex items-center justify-center mx-7   bg-white py-6'>

          <div className="pr-6" >
            <img src="/c3.png" />
          </div>
          <div className=" max-w-sm">

              <h3 className='mt-5 text-lg font-bold'>
                Cloud
              </h3>


            <p className='mt-3 '>
              hello there is the service one. specialize in delivering
            </p>
          </div>
            <div className="mr-8" >
            <img src="/ar.png" width="50" />
          </div>
      </div>
      <div className='cursor-pointer  flex items-center justify-center mx-7  bg-white py-6'>

          <div className="pr-6" >
            <img src="/cloud.png" />
          </div>
          <div className=" max-w-sm">

              <h3 className='mt-5 text-lg font-bold'>
                Warehouse
              </h3>


            <p className='mt-3 '>
              hello there  specialize this is the service one.
            </p>
          </div>
          <div className="mr-8" >
            <img src="/ar.png" width="50" />
          </div>

      </div>
    </section>
  );
}

export default Features;
