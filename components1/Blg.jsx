

const Blg = ({dtxt, dcolor, dfl, dbg, dsrc}) => {
	return (
		<section  className="bg-gradient-to-br from-blue-900 via-gray-900 to-blue-900 py-32">

		<div className="container mx-auto ">

         


      <div className="px-[90px]">
        <div className="text-center">
              <h1 className="text-gray-100 pb-8  leading-[2.6rem] text-[2.2rem] font-semibold">
            Empower business to cloud strategies multi-cloud.
          </h1>
          
        </div>

      </div>  
     <div className="flex ">

 <section  className={`${dcolor} ${dbg}    py-10  rounded-3xl  gap-[10px] items-center dark:bg-gray-900`}>
               <div  className="   max-w-screen-xs   py-4  text-center  ">
                 
    <div
         
            className="md:w-[98%] px-8 flex justify-center items-center"
          >
            <img src={`${dsrc}`} className=" rounded-3xl " />
          </div>

      </div>
          <div  className=" ml-8 mr-12 ">
            <div className="py-3">
  
            <div className="sm:text-[1.4rem] max-sm:pt-20 text-[1.3rem] font-bold">
             Big Title
            </div>
            <p className="text-md   max-w-sm mt-2">
            Empower business to leverage multi-cloud. Empower business to leverage multi-cloud. {`${dtxt}`} Empower business to leverage multi-cloud. We believe that no two orgs are alike, and therefore, their cloud strategies should be just as unique.
            </p>
            </div>
 
             
          </div>


            <div className='mt-1  ml-8'>
                <button className="px-4 py-2 text-white  hover:bg-blue-400 rounded-md transition duration-300 bg-indigo-700 ">
                  Know More
                </button>  
             </div>
          
        </section>	      <section  className={`${dcolor} ${dbg}    py-10  rounded-3xl  gap-[10px] items-center dark:bg-gray-900`}>
               <div  className="   max-w-screen-xs   py-4  text-center  ">
                 
    <div
         
            className="md:w-[98%] px-8 flex justify-center items-center"
          >
            <img src="/3r.png" className=" rounded-3xl " />
          </div>

      </div>
          <div  className=" ml-8 mr-12 ">
            <div className="py-3">
  
            <div className="sm:text-[1.4rem] max-sm:pt-20 text-[1.3rem] font-bold">
              Big Title
            </div>
            <p className="text-md max-w-sm mt-2">
            Empower business to leverage multi-cloud. Empower business to leverage multi-cloud. {`${dtxt}`} Empower business to leverage multi-cloud. We believe that no two orgs are alike, and therefore, their cloud strategies should be just as unique.
            </p>
            </div>
 
             
          </div>


            <div className='mt-1  ml-8'>
                <button className="px-4 py-2 text-white  hover:bg-blue-400 rounded-md transition duration-300 bg-indigo-700 ">
                  Know More
                </button>  
             </div>
          
        </section>	        </div>		

		</div>
	
		</section>
	)
}

export default Blg