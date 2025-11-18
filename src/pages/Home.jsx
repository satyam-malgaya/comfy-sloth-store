import React, { useRef, useState } from "react";
// https://react-course-comfy-sloth-store.netlify.app/
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import homeImage from "../assets/first-sec-1.jpeg";
import homeImage2 from "../assets/first-sec-2.jpeg";
import product1 from "../assets/product-1.jpeg";
import product2 from "../assets/product-2.jpeg";
import product3 from "../assets/product-3.jpeg";
import { GiCompass } from "react-icons/gi";
import { GiDiamondHard } from "react-icons/gi";
import { GiStabbedNote } from "react-icons/gi";

const Home = () => {
  const [show, setShow] = useState(false);
  const rotate = useRef(null);

  const rotateHandler = () => {
    setShow(true);
    if (rotate.current) {
      rotate.current.style.transform = "rotate(90deg)";
    }
  };

  const rotateoutHandler = () => {
    setShow(false);
    if (rotate.current) {
      rotate.current.style.transform = "rotate(0deg)";
    }
  };

  const data=[
    {
      icon: <GiCompass size={30} className="text-[#E8E6E3]" />,
      h1: "Mission",
      p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
      icon: <GiDiamondHard size={30} className="text-[#E8E6E3]" />                ,
      h1: "Vision",
      p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
      icon: <GiStabbedNote  size={30} className="text-[#E8E6E3]"/>,
      h1: "History",
      p: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
  ]

  return (
    <div className="w-full">
      <section className="w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-screen bg-[#181A1B]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-12 py-10 md:py-16 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="flex flex-col items-start gap-5 md:gap-6">
              <h1 className="text-[#CECAC3] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Design Your <br />
                Comfort Zone
              </h1>
              <p className="text-[#CECAC3] text-base sm:text-lg md:text-xl leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                at sed omnis corporis doloremque possimus velit! Repudiandae
                nisi odit, aperiam odio ducimus, obcaecati libero et quia
                tempora excepturi quis alias?
              </p>
              <button
                onMouseEnter={rotateHandler}
                onMouseLeave={rotateoutHandler}
                className="uppercase px-5 py-3 rounded-full bg-[#AB7B60] text-white tracking-wide text-sm sm:text-base flex gap-2 items-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                shop now {" "}
                <span
                  ref={rotate}
                  className={`inline-block transition-transform duration-300 ${
                    show ? "translate-x-6 rotate-90" : "translate-x-0"
                  }`}
                >
                  <BsFillArrowUpCircleFill size={20} />
                </span>
              </button>
            </div>

            {/* Right: Visual/Placeholder (hidden on small screens) */}
            <div className="relative hidden md:block w-full h-[290px] sm:h-[320px] md:h-[360px] lg:h-[420px] xl:h-[480px]">
              {/* Main hero image */}
              <img
                className="absolute bottom-10 md:left-12 md:translate-x-0 lg:left-20 w-3/4 md:w-[75%] lg:w-[80%] rounded-md object-cover h-auto max-h-full"
                src={homeImage}
                alt="Hero product"
              />

              {/* Accent vertical bar */}
              <div className="absolute left-6 md:left-10 lg:left-12 top-10 md:top-16 lg:top-12 w-5 md:w-3 lg:w-5 h-2/3 md:h-3/4 lg:h-[80%] bg-[#473225] rounded-tl-sm rounded-bl-sm"></div>

              {/* Secondary image overlay */}
              <img
                className="absolute bottom-0 right-4 md:right-8 lg:right-14 w-1/3 md:w-2/5 rounded-md object-cover h-auto max-h-[70%] shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
                src={homeImage2}
                alt="Detail shot"
              />

              {/* Framing background card */}
              <div className="absolute inset-0 rounded-xl border border-[#2a2c2d] bg-gradient-to-br from-[#1a1c1d] to-[#0c0d0d]" />
            </div>
          </div>
        </div>
      </section>
      {/* main section-2 */}
      <section className="w-full bg-[#1E2022] ">
        <div className="w-full min-h-[120vh] flex justify-center flex-col items-center">
          <div className="w-full h-35 flex justify-center items-center flex-col gap-1 ">
            <div>
              <h1 className="text-[2.5rem] font-bold text-[#CECAC3]">
                Featured Products
              </h1>
            </div>
            <div className="w-30 h-1 bg-[#815A44]"></div>
          </div>
          <div className="w-full h-auto flex flex-wrap justify-center pt-5 gap-6 md:gap-8 ">
            {/* sections-1 */}
            <div className="w-[90%] sm:w-[46%] lg:w-[30%] h-auto ">
              <div className="w-full rounded-sm h-60 overflow-hidden ">
                <img
                  className="rounded-sm"
                  src={product1}
                  alt="Sorry the image was not show"
                />
              </div>
              <div className="flex justify-between px-1">
                <h1 className="text-[#CECAC3]">Entertainment Center</h1>
                <p className="text-[#815A44]">$599.99</p>
              </div>
            </div>
            <div className="w-[90%] sm:w-[46%] lg:w-[30%] h-auto">
              <div className="w-full rounded-sm h-60 overflow-hidden">
                <img
                  className="rounded-sm"
                  src={product2}
                  alt="Sorry the image was not show"
                />
              </div>
              <div className="flex justify-between px-1">
                <h1 className="text-[#CECAC3]">High-back Bench</h1>
                <p className="text-[#815A44]">$399.99</p>
              </div>
            </div>
            <div className="w-[90%] sm:w-[46%] lg:w-[30%] h-auto">
              <div className="w-full rounded-sm h-60 overflow-hidden">
                <img
                  className="rounded-sm w-full h-full object-cover object-center"
                  src={product3}
                  alt="Sorry the image was not show"
                />
              </div>
              <div className="flex justify-between px-1">
                <h1 className="text-[#CECAC3]">Modern Bookshelf</h1>
                <p className="text-[#815A44]">$319.99</p>
              </div>
            </div>
          </div>
          <div className="pt-14">
            <button
              onMouseEnter={rotateHandler}
              onMouseLeave={rotateoutHandler}
              className="uppercase px-5 py-3 rounded-full  bg-[#AB7B60] text-white tracking-wide text-sm sm:text-base flex gap-2 items-center shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              ALL product{" "}
              <span
                ref={rotate}
                className={`inline-block transition-transform duration-300 ${
                  show ? "translate-x-6" : "translate-x-0"
                }`}
              >
                <BsFillArrowUpCircleFill size={20} />
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* section-3 */}
      <section>
        <div className="relative w-full h-[79vh] sm:h-[85vh] md:h-[79vh] lg:h-[79vh] bg-[#39281E]">
          <div className="w-full h-55 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 gap-4 sm:gap-0">
            <h1 className="text-[#CECAC3] text-[1.8rem] sm:text-[2rem] md:text-[2.1rem] tracking-[1px] font-bold text-center sm:text-left">
              Custom Furniture <br />
              Built Only For You
            </h1>
            <p className="text-[#634634] text-[16px] sm:text-[13px] md:text-[14px] text-start  sm:text-right max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.  Saepe
              dolorum <br/> debitis  consectetur reprehenderit non aliquam 
              voluptates dolore aut vero consequuntur.
            </p>
          </div>
          <div className="absolute top-40 sm:top-50 md:top-60 w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 min-h-[40vh] px-4 sm:px-6 md:px-8 lg:px-10">
           { data.map((item,key)=>{
              return <div key={key} className="w-full sm:w-[45%] md:w-[35%] lg:w-[30%] flex items-center justify-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 lg:px-10 flex-col h-auto sm:h-80 md:h-82 rounded-sm bg-[#815A44] py-6 sm:py-4">
                <div className="px-3 sm:px-4 py-3 sm:py-4 bg-[#39281E] rounded-full">{item.icon}</div>
                <div className="text-[#CECAC3] text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] font-bold tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] text-center">{item.h1}</div>
                <div className="text-center text-[#CECAC3] text-[14px] sm:text-[15px] md:text-[16px] leading-6 sm:leading-7">
                 {
                  item.p
                 }
                </div>
              </div>
            })
            }
          </div>
        </div>
      </section>
      <footer className="bg-[#181A1B]">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 min-h-[80vh] sm:min-h-[90vh] md:min-h-[100vh] lg:min-h-[110vh] gap-8 sm:gap-0 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="text-center sm:text-left w-full sm:w-auto">
            <h1 className="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] tracking-[1px] font-bold pb-3 sm:pb-4 md:pb-5 text-[#CECAC3] leading-tight">Join our newsletter and get 20% off</h1>
            <p className="text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] text-[#815A44] max-w-sm sm:max-w-md mx-auto sm:mx-0 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className="hidden sm:block" /> Placeat sint unde  quaerat ratione soluta veniam provident <br className="hidden sm:block" /> adipisci cumque eveniet tempore?</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full sm:w-auto max-w-sm sm:max-w-none pt-4 sm:pt-0">
            <input className="w-full sm:w-72 md:w-80 lg:w-90 h-[40px] sm:h-[38px] px-3 sm:px-2 border-1 rounded-tl-sm rounded-bl-sm sm:rounded-bl-none sm:rounded-tr-none border-[#CECAC3] bg-transparent text-[#CECAC3] placeholder-[#634634] text-sm sm:text-base focus:outline-none focus:border-[#815A44] transition-colors" type="email" placeholder="Enter Email" required />
            <button className="px-6 sm:px-4 md:px-7 py-2 sm:py-[3.5px] border-1 rounded-tr-sm rounded-br-sm sm:rounded-tl-none sm:rounded-bl-none bg-[#815A44] border-[#CECAC3] text-[#CECAC3] hover:bg-[#9a6b52] transition-colors text-sm sm:text-base font-medium">Subscribe</button>
          </div>
        </div>
        <div className="w-full h-16 sm:h-18 md:h-20 bg-[#1A1C1D] flex justify-center items-center px-4">
          <p className="text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] text-[#CECAC3] text-center tracking-[2px]">© 2025 <span className="text-[#815A44] font-medium">ComfySloth</span> All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};


export default Home;
