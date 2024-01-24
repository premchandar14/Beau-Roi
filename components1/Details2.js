

const Details2 = ({dtxt, dtxtt, dcolor, dfl, dbt, dtb, dbg, dsrc}) => {
  return (

      
        <div className={`${dbg} flex   mx-36 `} >

           
     <section  className={`${dcolor} container   py-2  rounded-3xl flex ${dfl} gap-10   dark:bg-gray-900`}>
          <div   className={` sm:w-1/2`}>
            <div className=" flex flex-col ">
                       <div className=''>
                <div className="  text-yellow-500  font-bold ">
                  
                </div>  
             </div>
            <div className= {` sm:text-[2.5rem]  flex ${dbt}  text-[1.3rem] font-bold`}>
                {`${dtxt}`}
            </div>
            <div className={`text-sm flex   ${dbt}   leading-8  mt-2   `}>
             {`${dtxtt}`}
            </div>
            </div>
 
             
            {/* <div className='mt-1'> */}
            {/*     <button className="px-4 py-2 text-white  hover:bg-blue-400 rounded-md transition duration-300 bg-indigo-700 "> */}
            {/*       Know More */}
            {/*     </button>   */}
            {/*  </div> */}
          </div>


          
        </section>




    </div>

  )
}

export default Details2
