import React from "react";
import arrow from "/arrow.png";
import "../App.css";
const NavigationBar = () => {
   return (
      <div className=" fixed top-6 px-4 w-full py-4">
         <nav
            id="shadow"
            className=" h-[4.5rem] sm:h-[6rem] lg:h-[7rem] rounded-full sm:max-w-[50rem] m-auto bg-black-default brightness-200 flex flex-row justify-between items-center px-3 sm:px-6"
         >
            <h1 className="sora text-white">CPULABS</h1>
            <a href="https://calendly.com/wprosper92/30min" target="blank" className=" z-50">
               <button className="bg-white flex justify-center gap-2 py-2 px-6 rounded-full h-[3rem] sm:min-h-[8vh] font-bold sora items-center outline-none border-none">
                  <p>Book a call</p>
                  <img src={arrow} alt="arrow" className="w-4 h-4" />
               </button>
            </a>
         </nav>
      </div>
   );
};

export default NavigationBar;
