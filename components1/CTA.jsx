import React from 'react'

const CTA = ({color, hei}) => {
	return (
		<div className=" bg-gray-50 pb-1 pt-8">
		 <div className="mx-20 mx-auto my-16 py-10">
        <div className={`rounded-3xl py-10 border-2 border-gray-300  ${color+hei} `}>
          <div className=" sm:w-3/4  max-sm:px-16 max-sm:py-16 mx-auto  py-10">
            <h1 className="text-3xl font-bold text-center text-gray-900 ">
              Our Excellent AI Solutions for Your Business

            </h1>
            {/* animate__animated animate__headShake */}
            <p className="text-center text-xl mt-6 text-gray-900 ">
              At Beauroi, we are dedicated to helping businesses achieve their
              digital transformation goals. With our applied AI expertise.
            </p>
            <div className="mt-10 flex justify-center">
            	
        
               <button className="px-7  py-4 text-center text-white hover:bg-blue-400 rounded-lg transition duration-300 bg-indigo-900 ">
                  Know More
                </button>
          </div>
          </div>
        </div>
        </div>
        </div>
	)
}

export default CTA
