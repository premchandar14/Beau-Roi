// import { useRouter } from 'next/router';
import Details2 from '@/components/Details2';
const sampleServices = [
  { id: 1,img:".././augmentalai.jpg", name: "augmental-ai", name2:"Augmental AI" ,description: "Augmental AI represents more than AI: augmentative intelligence denotes a fundamental shift in society. It goes beyond simple task automation to transform entire industries, improve decision-making, and unleash limitless potential. Our experience with AugmentalAI is proof/testament that innovation is only limited by data and imagination. Your guide in this revolutionary journey, Beauroi will lead you from data to decision, guaranteeing AI-driven succes "},
  { id: 2,img:".././multicloud.jpg", name: 'multiCloud-computing',name2:"MultiCloud Computing" ,description: "In the whirlwind of today's business landscape, managing a multi-cloud ecosystem might seem daunting/intricate. / Navigating a multi-cloud environment in today's fast-paced business world can be intricate. But rest assured, Beauroi is here to simplify the journey. With our seasoned experts and tailored tools, we seamlessly oversee your multi-cloud environment, providing clear insights into usage, cost management, and performance optimization. The result? Informed decisions and the utmost value from your cloud investments. Your cloud ecosystem is our responsibility, and we handle it with confidence and care." },
  { id: 3,img:".././appdev.jpg", name: 'Application-Development', name2:"Application Development", description:"Unleash the potential of customized software with our bespoke Application Development services. At our organization, we specialize in creating personalized software solutions that cater to the specific requirements of businesses and individuals. Our customized applications are meticulously devised to address particular challenges and capitalize on opportunities, providing you with a distinct competitive edge while enhancing operational efficiency. From streamlined utilities to intricate enterprise solutions, whether you require agile utilities or complex enterprise solutions, we excel in transforming your vision into reality by creating flawlessly crafted software."},
  { id: 4,img:".././data.jpg", name: 'Data-and-Analytics',name2:"Data & Analytics", description: "Data analytics is the skill of utilizing statistical and machine learning methods to reveal profound insights from data. These insights act as guiding beacons, assisting in well-informed decision-making across all aspects of your business, whether it is innovating products, implementing effective marketing strategies, enhancing customer service, or refining operational processes." }, 
  { id: 5,img:".././ideas.jpg", name: 'Strategic-IT-Consultation',name2:"Strategic IT Consultation", description: "In our realm, IT consulting transcends the mere provision of advice; it becomes a transformative expedition of teamwork, execution, and resolute assistance. Our adept consultants forge a close alliance with our esteemed clients, ensuring the seamless assimilation of proposed solutions into their operational framework. Through continuous guidance and unwavering support, we amplify the worth of technological investments, guaranteeing triumph in every step of your IT journey." },
  { id: 6,img:".././time-materials.jpg", name: 'Time-and-Material',name2:"Time & Material", description:`Our Time & Material services truly embody dependability and quantifiable achievements.
Staff augmentation delivers not only a prompt resolution but also the added advantage of swift integration. Augmented staff consists of seasoned experts who effortlessly assimilate into your company's culture and workflow. This effectively reduces disturbances typically encountered in traditional recruitment procedures.
`},
  { id: 7,img:".././trainings.jpg", name: 'Training-and-Recruitment',name2:"Training & Recruitment", description:"Our industry-ready tech talents are a finely-tuned addition to your team. They seamlessly integrate into your projects, ensuring your ability to tackle challenges, meet deadlines, and drive innovation without missing a beat. Your success is our foremost priority, delivered through these accomplished professionals." },
  { id: 8,img:".././24--7service.jpg", name: '24-7',name2:"24/7", description: "Transcending Your Preconceptions Opting for our assistance services entails selecting unparalleled dependability, expertise, and unwavering commitment to your triumph. We don't merely provide services; we empower you to attain your aspirations. Consider us as your steadfast companion on your expedition; we stand beside you incessantly." },


  // ... more services
];

export function generateStaticParams() {
return [
  { serviceid: "augmental-ai"},
  { serviceid: "multicloud-computing"},
  { serviceid: "application-development"},
  {serviceid: "data-and-analytics"},
  { serviceid: "strategic-it-consultation"},
  { serviceid: "time-and-material"},
  { serviceid: "training-and-recruitment"},
  {serviceid: "24-7"},

  // ... more services
]

}

// 
// export async function getStaticPaths() {
//   return await generateStaticParams();
// }

export default function servicedetailed({params}) {
  // const router = useRouter();
  const { serviceid } = params;

  const servicer = sampleServices.find((service) => service.name.toLowerCase() === params.serviceid); 

  return (
    <>
            <div className='bg-gradient-to-tl from-purple-900 to-blue-900 h-[500px] w-full relative'>
              <div>
                <img src="../3r.png" className='w-full h-full object-cover absolute mix-blend-overlay'/>
                <div className="flex justify-center max-sm:px-0 py-64">
                  <h1 className="text-white max-sm:text-3xl text-6xl font-semibold">
                    Service/{servicer.name}
                  </h1>
                </div>
              </div>
            </div>
{/*  */}
            <div>
              
            </div>
        <Details2 sername={servicer.name} serimg={servicer.img} serdes={servicer.description}/>    

 
    </>
  );
}
