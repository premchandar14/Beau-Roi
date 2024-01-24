

const Details2 = ({sername,serdes,serimg}) => {
	return (

      <section className="container  mx-auto">

      <div className=" ">
   
   
      <div className=" sm:px-8  sm:py-32 w-[100%] ">

         <div className="md:flex items-center  justify-between">
          <div className="mt-6 ">
     
            <div className="sm:text-[2.7rem]  text-gray-900 max-sm:pt-20 text-[1.8rem] max-sm font-extrabold">
              {sername}
            </div>
                           <div className=" sm:text-[1.6rem] text-blue-500  font-bold ">
                   "we specialize in"
                </div>
            <p className="text-md max-w-xl mb-4 leading-8  mt-5">
               {serdes}</p>

  
          </div>
          <div
         
            className="md:w-[50%] pr-8 flex justify-end"
          >
            <img src={`${serimg}`} width="310px" height="600px" className="rounded-xl justify-center items-center" />
          </div>

        </div>  <div className='mt-16 flex  mx-auto'>
                <button href="/services" className="px-8 mr-4  py-4 text-white border border-solid hover:bg-blue-400 rounded-md transition duration-300 bg-indigo-700 border-gray">
                  explore more
                </button> <button className="px-8  py-4 text-white border border-solid hover:bg-blue-400 rounded-md transition duration-300 bg-indigo-700 border-gray">
                  Enquire Now
                </button> </div>

      </div>
        </div>

    </section>

	)
}

export default Details2