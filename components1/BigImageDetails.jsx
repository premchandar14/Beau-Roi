

const BigImageDetails = ({dsrc}) => {
	return (
		<section className=" flex px-16 sm:px-36 justify-center bg-white py-36">
		<div className=" container mx-auto ">
			<div className="flex max-sm:flex-col justify-between gap-10 sm:gap-20">
				<div className=" sm:w-1/2">
					{/* <h2 className="text-blue-700 pb-1 text-xl font-extrabold"> */}
					{/* 	we specialize in */}
					{/* </h2> */}
					<h1 className="test-gray-900  sm:leading-10  sm:text-[2.1rem] font-extrabold text-[1.8rem]  max-sm:text-center ">
						Empower business to<br/>leverage multi-cloud.
					</h1>
					
				</div>
		

					<h1 className="text-gray-900 text-[1.6rem]  max-sm:text-center  sm:leading-6 sm:text-[1rem] font-bold">
						 Up & Running:<br/><span className="text-blue-700 pb-1 text-md sm:text-xl font-bold"> India, United Kingdom</span><br/><br/>
	        In Progress:<br/><span className="text-blue-700 pb-1 text-md sm:text-xl font-semibold"> Australia, Canada, Netherlands, UAE </span>

					</h1>
					
	</div>

			<div className="pt-16 mx-auto flex justify-center">
				         <div >

				          <div class="aspect-video">

        <video className="h-full w-full max-sm:w-[120%] rounded-lg"  autoPlay muted>
      <source src="mapvid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
            {/* <img className=" rounded-3xl" src={`${dsrc}`}   /> */}
                       </div>
			</div>
			
		</div>
		</section>

	)
}

export default BigImageDetails;