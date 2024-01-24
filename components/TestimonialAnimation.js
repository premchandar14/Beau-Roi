"use client"

import 'materialize-css/dist/css/materialize.min.css';
import Script from 'next/script';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { useEffect } from "react";



  const items = [
  { id: 1,img:"https://beauroi.com/img/main-page.png", name: "Client1", role:"Augmental AI" ,description: "Beau Roi implemented E-commerce for us using Google Cloud Spanner which revolutionized our business proceedings. The management of our worldwide inventory was in disarray until we seamlessly incorporated it. Through its expansive, worldwide database, we attained swifter loading times, instantaneous inventory updates, and a substantial surge in sales. Our gratitude goes out to the Beau Roi Team for their instrumental role in this achievement"},
   { id: 2, name: 'Client2',name2:"MultiCloud Computing", description: `Big data analytics has had a profound impact on our healthcare organization. We now have the ability to analyze vast amounts of patient data, leading to more accurate diagnoses, personalized treatment plans, and improved patient outcomes. It's incredible to see how data-driven insights are transforming the healthcare landscape and saving lives. Very satisfying service with real work, and the Beau Roi Team have proven it. There's nothing more exciting when the marketing strategies and campaign` },
  { id: 3, name: 'Client3', name2:"Application Development", description:"Beau Roi’s Team dedicatedly worked on our manufacturing operations using different services like BigQuery, BQML, Pub/Sub, Dataflow, Spanner and Cloud storage to reduce the downtime, improving efficiency with uninterrupted production. This Analytics ecosystem makes Beau Roi more competitive and agile in the market."},
  { id: 4, name: 'Client4',name2:"Data & Analytics", description: "Beau Roi has truly transformed our digital landscape! Through strategic integration of AWS services such as EC2, Lambda, and S3, we've witnessed a remarkable 40% reduction in infrastructure costs. Our productivity has soared, thanks to seamlessly executed and auto-scaled marketing campaigns using Lambda functions." }, 
  ];


const TestimonialAnimation = () => {
	useEffect(() => {
		const init=async()=>{
			const M =await import('materialize-css');		
			const elems=document.querySelectorAll('.carousel');
			const instances =window.M.Carousel.init(elems);
		};

		init();

	}, []);






	return (
    <div className="h-[100vh] bg-blue-400">
<div className="carousel h-full">
              <a className="carousel-item w-full h-full" href="#">
                            <div className="testi bg-orange-600 w-[200px]">
                                <div className="img-area">
                                    <img src="https://beauroi.com/img/main-page.png"/>
                                </div>
                                <p className=""> {items[0].description}</p>
                                <h4> {items[0].name}</h4>
                                <h5> {items[0].role}</h5>
                            </div>
                  </a>
              <a className="carousel-item" href="#">
                            <div className="testi">
                                <div className="img-area">
                                    <img src="https://beauroi.com/img/main-page.png"/>
                                </div>
                                <p className="max-w-fit"> {items[1].description}</p>
                                <h4> {items[1].name}</h4>
                                <h5> {items[1].role}</h5>
                            </div>
                  </a>
              <a className="carousel-item" href="#">
                            <div className="testi">
                                <div className="img-area">
                                    <img src="https://beauroi.com/img/main-page.png"/>
                                </div>
                                <p className="max-w-fit"> {items[2].description}</p>
                                <h4> {items[2].name}</h4>
                                <h5> {items[2].role}</h5>
                            </div>
                  </a>
              <a className="carousel-item" href="#">
                            <div className="testi">
                                <div className="img-area">
                                    <img src="https://beauroi.com/img/main-page.png"/>
                                </div>
                                <p className="max-w-fit"> {items[3].description}</p>
                                <h4> {items[3].name}</h4>
                                <h5> {items[3].role}</h5>
                            </div>
                  </a>

</div>

</div>




	);
};

export default TestimonialAnimation


