import { FaStar } from "react-icons/fa";
import { TbSearch } from "react-icons/tb";

// https://react-course-comfy-sloth-store.netlify.app/products
// export const colors [= [
//     { value: "all", color: "", label: "All" },
//     { value: "red", color: "#720D0D" },
//     { value: "green", color: "#26730D" },
//     { value: "blue", color: "#0C0D73" },
//     { value: "black", color: "#0C0D0D" },
//     { value: "brown", color: "#59450D" },
//   ];
   
const data = [
  {
    id: 1,
    category: "Living Room",
    hoverImg:(<TbSearch />),
    colors:['blue'],
     company: "marcos",
    mainImg: "https://www.course-api.com/images/store/product-12.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Modern Poster",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$30.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id: 2,
    category: "Office",
    hoverImg:(<TbSearch />),
    colors:['red'],
     company: "marcos",
    mainImg: "https://www.course-api.com/images/store/product-4.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Armchair",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$125.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id: 3,
    category: "Kitchen",
    hoverImg:(<TbSearch />),
    colors:['brown'],
     company: "marcos",
    company: "marcos",
    mainImg: "https://www.course-api.com/images/store/product-16.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Suede Armchair",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$235.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id: 4,
    category: "Bedroom",
    hoverImg:(<TbSearch />),
    colors:['red'],
     company: "marcos",
    company: "marcos",
    mainImg: "https://www.course-api.com/images/store/product-9.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Leather Chair",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$215.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id: 5,
    category: "Living Room",
    hoverImg:(<TbSearch />),
    colors:['blue'],
     company: "caressa",
    company: "liddy",
    mainImg: "https://www.course-api.com/images/store/product-6.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "emperor bed",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$315.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id: 6,
    category: "Living Room",
    hoverImg:(<TbSearch />),
    colors:['brown'],
     company: "marcos",
    company: "ikea",
    mainImg: "https://www.course-api.com/images/store/product-1.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Accent Chair",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$255.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id:7 ,
    category: "Kitchen",
    hoverImg:(<TbSearch />),
    colors:['green'],
     company: "caressa",
     
    mainImg: "https://www.course-api.com/images/store/product-6.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "S  helf",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$305.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id: 8,
    category: "Kids",
    hoverImg:(<TbSearch />),
    colors:['green'],
     company: "caressa",
    mainImg: "https://www.course-api.com/images/store/product-11.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Modern Bookshelf",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$405.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id:9 ,
    category: "Office",
    hoverImg:(<TbSearch />),
    colors:['blue'],
     company: "liddy",
    mainImg: "https://www.course-api.com/images/store/product-8.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "High-Back Bench",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$1205.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id: 10,
    category: "Living Room",
    hoverImg:(<TbSearch />),
    colors:['red'],
     company: "liddy",
    mainImg: "https://www.course-api.com/images/store/product-21.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Wooden Desk",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$420.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id: 11,
    category: "Dining",
    hoverImg:(<TbSearch />),
    colors:['brown'],
     company: "liddy",
    mainImg: "https://www.course-api.com/images/store/product-5.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Dining Table",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$525.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id:12 ,
    category: "Living Room",
    hoverImg:(<TbSearch />),
    colors:['black'],
     company: "ikea",
    mainImg: "https://www.course-api.com/images/store/product-8.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "High-Back Bench",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$353.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id: 13,
    category: "Office",
    hoverImg:(<TbSearch />),
    colors:['brown'],
     company: "ikea",
    mainImg: "https://www.course-api.com/images/store/product-7.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Entertainment Center",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$1,225.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id: 14,
    category: "Living Room",
    hoverImg:(<TbSearch />),
    colors:['red'],
     company: "ikea",
    mainImg: "https://www.course-api.com/images/store/product-17.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Utopia Sofa",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$1,205.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id:15 ,
    category: "Kitchen",
    hoverImg:(<TbSearch />),
    colors:['black'],
     company: "caressa",
    mainImg: "https://www.course-api.com/images/store/product-10.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Leather Sofa",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$725.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id:16 ,
    category: "Bedroom",
    hoverImg:(<TbSearch />),
    colors:['brown'],
     company: "caressa",
    mainImg: "https://www.course-api.com/images/store/product-2.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Albany Sectional",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$950.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id: 17,
    category: "Office",
    hoverImg:(<TbSearch />),
    colors:['blue'],
     company: "liddy",
    mainImg: "https://www.course-api.com/images/store/product-14.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Simple Chair",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$1,125.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id:18 ,
    category: "Office",
    hoverImg:(<TbSearch />),
    colors:['green'],
     company: "liddy",
    mainImg: "https://www.course-api.com/images/store/product-18.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Vase Table",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$1,025.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id:19 ,
    category: "Bedroom",
    hoverImg:(<TbSearch />),
    colors:['black'],
     company: "ikea",
    mainImg: "https://www.course-api.com/images/store/product-15.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Sofa Set",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$2,325.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id:20 ,
    category: "Office",
    hoverImg:(<TbSearch />),
    colors:['red'],
     company: "caressa",
    mainImg: "https://www.course-api.com/images/store/product-20.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Wooden Desk",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$3,000.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id:21 ,
    category: "Kitchen",
    hoverImg:(<TbSearch />),
    colors:['black'],
     company: "caressa",
    mainImg: "https://www.course-api.com/images/store/product-22.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Wooden Table",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$2,325.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id: 22,
    category: "Office",
    hoverImg:(<TbSearch />),
    colors:['blue'],
     company: "marcos",
    mainImg: "https://www.course-api.com/images/store/product-19.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Wooden Bed",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$3,425.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
  {
    id:23 ,
    category: "Office",
    hoverImg:(<TbSearch />),
    colors:['green'],
     company: "marcos",
    mainImg: "https://www.course-api.com/images/store/product-3.jpeg",
    sideImge1: "https://www.course-api.com/images/store/extra-product-1.jpeg",
    sideImge2: "https://www.course-api.com/images/store/extra-product-2.jpeg",
    sideImge3: "https://www.course-api.com/images/store/extra-product-3.jpeg",
    sideImge4: "https://www.course-api.com/images/store/extra-product-4.jpeg",
    h1: "Albany Table",
    starIcon: (
      <div style={{ color: "gold", fontSize: "24px" }}>
        {" "}
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}{" "}
      </div>
    ),

    price: "$4,325.99",
    pere: "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  },
];

export default data ;
