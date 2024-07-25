import React from "react";
import assistant from "/assistant.png";
import blockchain from "/blockchain.png";
import webdev from "/webdev.png";
import arrow from "/arrowwhite.png";

const wio = [
   {
      id: 1,
      title: "Web Development",
      des: "Custom web applications engineered to fulfill your specific business requirements and drive growth.",
      src: webdev,
   },
   {
      id: 2,
      title: "Virtual Assitance",
      des: "I am committed to providing reliable and high-quality assistance, ensuring that you can focus on your core business activities ",
      src: assistant,
   },
   {
      id: 3,
      title: "Blockchain Development",
      des: "Secure and innovative blockchain solutions for all web3 usecases.",
      src: blockchain,
   },
];

const Whatweoffer = () => {
   return (
      <div className="mt-6">
         <div className="grid grid-1 sm:grid-cols-2 md:grid-cols-3 px-4 xl:max-w-[80%] gap-4 m-auto">
            {wio.map((item) => {
               return (
                  <section key={item.id} className=" bg-[#ebebeb] rounded-lg space-y-4 sm:space-y-0 p-5">
                     <img src={item.src} alt={item.id} className="w-12 h-12" />
                     <h1 className="text-black-default text-xl font-semibold montserrat pt-1 text-left">{item.title}</h1>
                     <p className="text-sm sm:text-[110%] sora text-left pt-2 ">{item.des}</p>
                  </section>
               );
            })}
         </div>

         <br />
         <div className="mt-10">
            <a href="https://calendly.com/wprosper92/30min" target="blank">
               <button className="bg-black-default flex m-auto justify-center gap-2 py-2 px-8 rounded-full h-[3.4rem] sm:min-h-[9vh] font-bold sora items-center outline-none border-none text-white">
                  <p>Book a call</p>
                  <img src={arrow} alt="arrow" className="w-4 h-4 " />
               </button>
            </a>
         </div>
      </div>
   );
};

export default Whatweoffer;
