import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import krypthqt from "/krypthqlogo.png";
import jobmingle from "/jobmingle.png";
import zibra from "/zibra2.png";
import ellipse from "/Ellipse.png";
import Whatweoffer from "./components/Whatweoffer";
import DevelopmentProcess from "./components/DevelopmentProcess";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
   const [count, setCount] = useState(0);

   const workedfor = [
      {
         id: 1,
         img: jobmingle,
      },
      {
         id: 2,
         img: krypthqt,
      },
      // {
      //    id: 3,
      //    img: zibra,
      // },
   ];

   return (
      <div className="relative">
         <NavigationBar />
         <section className="min-h-[94vh] sm:min-h-[100vh] bg-black-default">
            <img src={ellipse} alt="ellipse" className="absolute hidden md:block opacity-10 sm:opacity-50" />
            <main className=" pt-[17rem] sm:pt-[14rem] text-white px-2 md:px-16 pb-6">
               <h1 className="montserrat font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-7xl capitalize ">
                  a software engineer <br /> you can trust to develop <br /> your ideas &lt;/&gt;.
               </h1>
               <p className="text-white sm:font-bold text-xl sora px-8 pt-8 sm:py-2"> Here to design and develop your digital products! </p>
               <br />
               <p className="montserrat text-xl font-bold text-white text-center mt-20 sm:mt-0 my-4">worked / working for:</p>
               <div className="flex flex-row gap-7 sm:gap-10 items-center w-auto m-auto justify-center">
                  {workedfor.map((item) => {
                     return <img key={item.id} src={item.img} alt={item.id} className="w-[6rem] sm:w-28" />;
                  })}
               </div>

               {/* <div className="sm:hidden">scrll</div> */}
            </main>
         </section>
         <section className="min-h-[70vh] bg-[#f6f6f6]">
            <h2 className="text-black-default montserrat font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-5xl pt-16">What i offer</h2>
            <Whatweoffer />
         </section>

         <section className=" bg-[#f6f6f6]">
            <h2 className="text-black-default montserrat font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-5xl pt-16">My development process</h2>
            <DevelopmentProcess />
         </section>
         <section className="bg-black-default min-h-[100vh] pb-10 lg:mx-4">
            <Projects />
         </section>
         <section>
            <Footer />
         </section>
      </div>
   );
}

export default App;
