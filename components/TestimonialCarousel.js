"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function TestimonialCarousel() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const items = [
  { id: 1,img:"https://beauroi.com/img/main-page.png", name: "Client1", role:"Augmental AI" ,description: "Beau Roi implemented E-commerce for us using Google Cloud Spanner which revolutionized our business proceedings. The management of our worldwide inventory was in disarray until we seamlessly incorporated it. Through its expansive, worldwide database, we attained swifter loading times, instantaneous inventory updates, and a substantial surge in sales. Our gratitude goes out to the Beau Roi Team for their instrumental role in this achievement"},
   { id: 2, name: 'Client2',name2:"MultiCloud Computing", description: `Big data analytics has had a profound impact on our healthcare organization. We now have the ability to analyze vast amounts of patient data, leading to more accurate diagnoses, personalized treatment plans, and improved patient outcomes. It's incredible to see how data-driven insights are transforming the healthcare landscape and saving lives. Very satisfying service with real work, and the Beau Roi Team have proven it. There's nothing more exciting when the marketing strategies and campaign` },
  { id: 3, name: 'Client3', name2:"Application Development", description:"Beau Roi’s Team dedicatedly worked on our manufacturing operations using different services like BigQuery, BQML, Pub/Sub, Dataflow, Spanner and Cloud storage to reduce the downtime, improving efficiency with uninterrupted production. This Analytics ecosystem makes Beau Roi more competitive and agile in the market."},
  { id: 4, name: 'Client4',name2:"Data & Analytics", description: "Beau Roi has truly transformed our digital landscape! Through strategic integration of AWS services such as EC2, Lambda, and S3, we've witnessed a remarkable 40% reduction in infrastructure costs. Our productivity has soared, thanks to seamlessly executed and auto-scaled marketing campaigns using Lambda functions." }, 
  ];

 

  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }) => {
    return {
      scale: position() === "center" ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      opacity: 1
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  }
};

function getZIndex({ position, direction }) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2
  };
  return indexes[position()];
}

  return (
    <div className="overflow-hidden">

                 <div class="retest  main-wrapper py-20">
                    <h2 class="pt-32  text-4xl px-4 font-bold text-white text-center  text-black sm:text-4xl lg:text-5xl">What Say Our Clients
                    </h2>
       <div className="wrapper p-4 ">
        {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item) => {
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (
              <motion.div
                className="card  m-4   "
                key={item.id}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (item === visibleItems[0]) {
                      return "left";
                    } else if (item === visibleItems[1]) {
                      return "center";
                    } else {
                      return "right";
                    }
                  }
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
              >

              <a className="carousel-item" href="#">
                            <div className="testi">
                                <div className="img-area">
                                    <img src="https://beauroi.com/img/main-page.png"/>
                                </div>
                                <p className="max-w-fit"> {item.description}</p>
                                <h4> {item.name}</h4>
                                <h5> {item.role}</h5>
                            </div>
                  </a>
               
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="buttonsi pb-16">
        <motion.button
        className="px-2 text-3xl text-white"
          whileTap={{ scale: 0.8 }}
          onClick={() => handleClick(-1)}
        >
          ◀︎
        </motion.button>
        <motion.button className="px-2 text-3xl text-white" whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>
          ▶︎
        </motion.button>
      </div>
    </div>
    </div>
  );
}
