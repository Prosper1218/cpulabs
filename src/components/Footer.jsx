import React from "react";
import arrow from "/arrowwhite.png";
import gmail from "/gmail.png";
import whatsapp from "/whatsapp.png";
const Footer = () => {
   return (
      <div className="sm:min-h-[80vh] h-[50vh] bg-[#F6F6F5] relative">
         <h2 className=" montserrat font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-5xl pt-16 text-black-default">
            Have an idea? <br /> Reach out!
         </h2>

         <br />
         <div className="mt-10">
            <a href="https://calendly.com/wprosper92/30min" target="blank">
               <button className="bg-black-default hover:bg-black-default/95 flex m-auto justify-center gap-2 py-2 px-8 rounded-full h-[3.4rem] sm:min-h-[9vh] font-bold sora items-center outline-none border-none text-white">
                  <p>Book a call</p>
                  <img src={arrow} alt="arrow" className="w-4 h-4 " />
               </button>
            </a>
         </div>

         <div className="  px-4 w-full py-4 absolute bottom-10">
            <nav
               id="shadow"
               className=" h-[4.5rem] sm:h-[6rem] lg:h-[7rem] rounded-full sm:max-w-[50rem] m-auto bg-black-default brightness-200 flex flex-row justify-between items-center px-3 sm:px-6"
            >
               <h1 className="sora text-white">CPULABS</h1>
               <div className=" w-5rem flex flex-row items-cener justify-center gap-3">
                  <a href="https://wa.me/+2349034879783" target="blank" className="border p-2 bg-white rounded-full">
                     <img src={whatsapp} alt="gmail" className="w-7 h-7" />
                  </a>
                  <a href="mailto:wprosper92@gmail.com" target="blank" className="border p-2 bg-white rounded-full">
                     <img src={gmail} alt="gmail" className="w-7 h-7" />
                  </a>
               </div>
            </nav>
         </div>
      </div>
   );
};

export default Footer;
