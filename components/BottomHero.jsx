import React from 'react'

const BottomHero = ({color, hei}) => {
	return (


        <div className={`py-10 ${color+hei} `}>
          <div className=" sm:w-3/4 max-sm:px-16 max-sm:py-16  mx-auto px-auto py-10">
            <h1 className="text-3xl text-center  ">
            

              Our Excellent AI Solutions for Your Business

            </h1>
            {/* animate__animated animate__headShake */}
            <p className="text-center mt-6 text-gray-900 ">
              At Beauroi, we are dedicated to helping businesses achieve their
              digital transformation goals. With our applied AI expertise.
            </p>
          </div>
        </div>
	)
}

export default BottomHero