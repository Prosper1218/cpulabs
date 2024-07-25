import React from "react";
import linklooom from "/linkloomsite.png";
import quizcrazesite from "/quizcrazesite.png";
import zibrainfo from "/zibrainfo.png";

const wio = [
   {
      id: 1,
      title: "Zibra",
      des: "Carefully crafted landing page built for a logistics and taxi company.",
      src: zibrainfo,
      to: "https://zibralogistics.info",
   },
   {
      id: 2,
      title: "linkloom",
      des: "A social media website. I focused on the user authentication, profile setup and edit. ",
      src: linklooom,
      to: "https://linkloom-zeta.vercel.app/",
   },
   {
      id: 3,
      title: "quizcraze",
      des: "A simple quiz site.",
      src: quizcrazesite,
      to: "https://quizcraze-iota.vercel.app/",
   },
];

const Projects = () => {
   return (
      <div>
         <h2 className=" montserrat font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-5xl pt-16 text-white">Few of my works</h2>

         <div className="grid mt-8 grid-1 sm:grid-cols-2 px-4 xl:max-w-[80%] gap-4 m-auto">
            {wio.map((item) => {
               return (
                  <div key={item.id} className="flex flex-col">
                     <section className=" bg-[#ebebeb]/10 rounded-lg space-y-4 sm:space-y-0 px-3 pt-5 pb-0">
                        <img src={item.src} alt={item.id} className="w-full h-full rounded-t-lg object-fill" />
                     </section>
                     <a target="blank" href={item.to} className="text-white text-xl font-semibold montserrat capitalize text-left pl-3 w-full py-2">
                        {item.title}
                     </a>
                     <h1 className="text-white text-left sora pl-2 text-sm">{item.des}</h1>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Projects;
