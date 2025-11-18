import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { PiSquaresFourFill } from "react-icons/pi";
import data from "../components/data";
// import { colors } from "../components/data";
const Product = () => {
  const [price, setprice] = useState(5000);
  const [Cardvalue, setCardvalue] = useState(22);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedColor, setSelectedColor] = useState("all");
  const [ishover , setishover]=useState(null)
  const [state,setstate]=useState(true)
  const colors = [
    { value: "all", color: "" },
    { value: "red", color: "red" },
    { value: "blue", color: "blue" },
    { value: "green", color: "green" },
    { value: "black", color: "black" },
  ];

  const EnterHandle = (index) => {
    const newstate = [...ishover];
    newstate[index] = true;
    setishover(newstate);
  };

  const LeaveHanlder = (index) => {
    const newstate = [...ishover];
    newstate[index] = false;
    setishover(newstate);
  };

  // const filterdata = activeCategory==='All' ?data:data.filter((item)=>item.category === activeCategory)
  const filterdata = data.filter((item) => {
    const categoryMatch =
      activeCategory === "All" || item.category === activeCategory;
  
    const companyMatch =
      selectedCompany === "all" || item.company === selectedCompany;
  
    const colorMatch =
      selectedColor === "all" || item.colors.includes(selectedColor);
  
      const priceValue = parseFloat(item.price.replace("$", ""));
      const priceMatch = priceValue <= Number(price);

    return categoryMatch && companyMatch && colorMatch && priceMatch;
  });
  

  function changeHandler(e) {
    setprice(e.target.value);
  }
  useEffect(() => {
    setCardvalue(filterdata.length);
  }, [filterdata]);
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-20 sm:h-24 md:h-28 flex items-center justify-start bg-[#463022] px-4 sm:px-8 md:px-15">
        <p className="text-lg sm:text-xl md:text-[2.1rem] font-bold tracking-[1px] sm:tracking-[2px] md:tracking-[2.3px] text-[#815A44]">
          Home&nbsp;/ Product
        </p>
      </div>
      <div className="w-full min-h-screen pt-4 sm:pt-8 md:pt-15 bg-[#181A1B] flex flex-col lg:flex-row">
        {/* left-container */}
        <form className="flex px-4 sm:px-6 md:px-10 justify-center items-start flex-col w-full lg:w-auto">
          <div className="w-full lg:w-[18vw] xl:w-[18vw] min-h-screen lg:h-[120vh] flex flex-col gap-3 sm:gap-4 md:gap-5 pb-6 lg:pb-0">
            <div className="">
              <input
                type="text"
                placeholder="Serach"
                className="w-full max-w-xs lg:w-40 h-8 bg-[#3B3B3B] rounded-sm text-white text-sm sm:text-[15px] tracking-[1px] px-2"
              />
            </div>
            {/* first div */}
            <div className="flex flex-col">
              <h1 className="text-sm sm:text-[16px] font-bold tracking-[1.5px] sm:tracking-[2px] text-[#CECAC3] mb-2">
                Category
              </h1>
              <div className="grid  grid-cols-2 lg:grid-cols-1 gap-1 lg:gap-0">
                {[
                  "All",
                  "Office",
                  "Living Room",
                  "Kitchen",
                  "Bedroom",
                  "Dining",
                  "Kids",
                ].map((item, i) => (
                  <button
                    type="button"
                    onClick={() => setActiveCategory(item)}
                    key={i}
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className={`category-link text-left py-1 px-2 lg:px-0 rounded lg:rounded-none text-sm sm:text-base ${
                      activeCategory === item
                        ? "text-[#FF5733] font-bold"
                        : "text-[#CECAC3]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            {/* second div */}
            <div>
              <h1 className="text-sm sm:text-[16px] font-bold tracking-[1.5px] sm:tracking-[2px] text-[#CECAC3] mb-2">
                Company
              </h1>
              <select
                value={selectedCompany}
                onChange={(e) => {
                  setSelectedCompany(e.target.value);
                }}
                id="category"
                className="bg-black text-sm sm:text-[15px] text-[#CECAC3] w-full max-w-xs lg:w-auto px-2 py-1 rounded"
              >
                <option value="all">All</option>
                <option value="marcos">marcos</option>
                <option value="liddy">liddy</option>
                <option value="ikea">ikea</option>
                <option value="caressa">caressa</option>
              </select>
            </div>
            {/* section three */}
            <div className="text-white flex flex-col gap-2">
              <h1 className="text-sm sm:text-[16px] font-bold tracking-[1.5px] sm:tracking-[2px] text-[#CECAC3]">
                Colors
              </h1>
              <div className="flex flex-wrap gap-2 sm:gap-[6px] items-center">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSelectedColor(c.value)}
                    className={`${
                      c.value === "all"
                        ? "text-sm sm:text-[15px] text-[#CECAC3]" 
                        : "w-4 h-4 sm:w-4 sm:h-4 rounded-full"
                    } ${
                      selectedColor === c.value ? "":""
                    }`}
                    style={{ backgroundColor: c.color }}
                  >
                    {c.value === "all" ? "All" : ""}
                  </button>
                ))}
              </div>
            </div>
            {/* section four */}
            <div className="text-[#99C8FF] flex flex-col gap-2 text-sm sm:text-[16px]">
              <h1 className="text-sm sm:text-[16px] font-bold tracking-[1.5px] sm:tracking-[2px] text-[#CECAC3]">
                Price
              </h1>
              <div>
                <p className="pb-2">${price}.00</p>
                <input
                  onChange={changeHandler}
                  type="range"
                  id="priceRange"
                  min="0"
                  max="4500"
                  step="100"
                  value={price}
                  className="w-full max-w-xs lg:w-full outline-none"
                />
              </div>
            </div>
            {/* section fiv */}
            <div className="flex flex-row gap-3 sm:gap-5 items-center">
              <h1 className="text-xs sm:text-[14px] whitespace-nowrap tracking-[1.5px] sm:tracking-[2px] text-[#CECAC3]">
                Free Shipping
              </h1>
              <input
                type="checkbox"
                className="text-sm sm:text-[16px] font-bold tracking-[2px] text-[#CECAC3]"
              />
            </div>
            {/* section six */}
            <div>
              <button 
              type="button"
              onClick={()=>{
                setActiveCategory("All");
                setSelectedCompany("all");
                setSelectedColor("all");
                setprice(5000);
              }}
              className="px-4 sm:px-5 py-[3px] sm:py-[4px] whitespace-nowrap rounded-sm bg-[#961E1E] text-[#fff] text-sm sm:text-base">
                Clear Filter
              </button>
            </div>
          </div>
        </form>
        {/* right-container  */}
        <div className="w-full lg:w-[80%] min-h-screen text-white px-4 sm:px-6 lg:px-0">
          {/* section first......................... */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 px-1 items-start sm:items-center mb-4">
            <div className="flex flex-row gap-2">
              <button onClick={()=>{setstate(false)}} className="text-white px-[1.5px] py-[1.5px] rounded-sm border-1 border-white">
                <PiSquaresFourFill />
              </button>
              <button 
                 onClick={()=>{setstate(true)}}
              className="text-white px-[1.5px] py-[1.5px] rounded-sm border-1 border-white">
                <CiMenuBurger />
              </button>
            </div>
            <div>
              <h1 className="text-sm sm:text-[16px] text-[#9FBAD0] font-medium">
                {Cardvalue} Products Found
              </h1>
            </div>
            <div className="hidden sm:block flex-1">
              <p className="w-full max-w-[420px] lg:w-120 h-[1px] bg-[#9FBAD0]"></p>
            </div>
            <div className="flex gap-2 items-center">
              <h1 className="text-sm sm:text-[16px] tracking-[1.5px] sm:tracking-[2px] text-[#CECAC3] whitespace-nowrap">
                Sort by
              </h1>
              <select
                id="section"
                className="bg-black text-sm sm:text-[15px] text-[#CECAC3] rounded px-2 py-1"
              >
                <option value="Lowest">Price (Lowest)</option>
                <option value="Highest">Price (Highest) </option>
                <option value="A-Z">Name (A-Z)</option>
                <option value="Z-A">Name (Z-A)</option>
              </select>
            </div>
          </div>
          {/* section second....................... */}
          <div className="w-full min-h-[70vh] sm:min-h-[70vh] lg:h-[100vh] overflow-y-auto scrollbar-hidden">
            {/* starting for flex-row sume */}
           {
            state ? (
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
               {filterdata.map((item,key)=>{
                return <div key={key} className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6  sm:bg-transparent p-3 sm:p-0 rounded-sm sm:rounded-none">
                      <div className={`w-full sm:w-[40%] lg:w-[35%] xl:w-[30%] rounded-sm h-[30vh] sm:h-[28vh] md:h-[32vh] lg:h-[35vh] flex-shrink-0 ${ishover=== key  ? "bg-black bg-opacity-70":""}`}>
                      <img
                        className="w-full h-full rounded-sm object-cover object-center overflow-hidden"
                        src={item.mainImg}
                        alt="sorry the image not avalabel"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2 sm:gap-2.5 lg:gap-3 sm:pl-4 lg:pl-6 xl:pl-10 pt-0 sm:pt-2 lg:pt-3 flex-1">
                         <h1 className="text-lg xs:text-xl sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] font-bold tracking-[1px] text-[#CECAC3] leading-tight">{item.h1}</h1>
                         <p className="text-[#815A44] text-base sm:text-[0.95rem] md:text-[1rem] font-bold">{item.price}</p>
                         <p className="line-clamp-2 sm:line-clamp-3 text-balance text-sm sm:text-[14px] md:text-[15px] text-[#9FBAD0] leading-relaxed">{item.pere}</p>
                         <button className="text-xs sm:text-[12px] md:text-[13px] px-4 sm:px-5 py-1.5 sm:py-1.5 md:py-2 rounded-sm bg-amber-700 hover:bg-amber-800 transition-colors mt-1 sm:mt-0">Details</button>
                    </div>
                </div>
               })}          
            </div>):( <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 px-1 sm:px-2 pt-4 sm:pt-6 lg:pt-7">
              {/* second filterration  */}
              {filterdata.map((item, key) => { 
                return (
                  <div 
                  onMouseEnter={()=>EnterHandle(key)}
                  onMouseLeave={()=>LeaveHanlder(null)}
                  key={key} className="w-full">
                    <div className={`w-full rounded-sm h-[25vh] sm:h-[28vh] lg:h-[30vh] ${ishover=== key  ? "bg-black bg-opacity-70":""}`}>
                      <img
                        className="w-full h-full rounded-sm object-cover object-center overflow-hidden"
                        src={item.mainImg}
                        alt="sorry the image not avalabel"
                      />
                    </div>
                    <div className="flex justify-between it ems-center px-1 sm:px-2 pt-2 sm:pt-3">
                      <h4 className="text-[#999183] text-sm sm:text-base truncate pr-2">
                        {item.h1}
                      </h4>
                      <p className="text-[#B3866E] text-sm sm:text-base whitespace-nowrap">
                        {item.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>)
           }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
