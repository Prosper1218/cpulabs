import React from "react";
import call from "/call.png";
import proposal from "/proposal.png";
import DandD from "/DandD.png";

const process = [
   {
      id: 1,
      title: "Discovery call",
      des: "Schedule a call at your convenience to discuss and gain clarity on your project requirements.",
      src: call,
   },
   {
      id: 2,
      title: "Project proposal",
      des: "Receive a detailed proposal outlining the project scope, timeline, and cost after our initial discussion. ",
      src: proposal,
   },
   {
      id: 3,
      title: "Development and delivery",
      des: "Collaborate with our team as we develop and deliver your customized solution, ensuring it meets your expectations.",
      src: DandD,
   },
];

const DevelopmentProcess = () => {
   return (
      <div className="mt-8 min-h-[50vh] pb-4">
         <div className="grid grid-1 sm:grid-cols-2  md:grid-cols-3 px-4 xl:max-w-[80%] gap-4 m-auto">
            {process.map((item) => {
               return (
                  <section key={item.id} className="border bg-[#ebebeb] rounded-lg space-y-4 sm:space-y-0 p-5">
                     <div className="w-[9rem] flex flex-row gap-2 p-1 rounded-full bg-black-default item-center">
                        <section className="bg-white w-fit p-2 flex flex-row items-center justify-center rounded-full">
                           <img src={item.src} alt={item.id} className="w-7 h-7" />
                        </section>
                        <p className=" flex flex-col items-center justify-center sora capitalize text-white text-xl">Step {item.id}</p>
                     </div>
                     <h1 className="text-black-default text-xl font-semibold montserrat pt-1 text-left">{item.title}</h1>
                     <p className="text-sm sm:text-[110%] sora text-left pt-2 ">{item.des}</p>
                  </section>
               );
            })}
         </div>
      </div>
   );
};

export default DevelopmentProcess;
