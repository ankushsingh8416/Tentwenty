"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import image1 from "/public/assets/images/Hero-Image.png";
import image2 from "/public/assets/images/Hero-Image.png";
import image3 from "/public/assets/images/Hero-Image.png";
import image4 from "/public/assets/images/Hero-Image.png";
import image5 from "/public/assets/images/Hero-Image.png";

// Add all images and content
const slidesData = [
  { image: image1, title: "Fresh Produce", description: "High-quality fresh fruits and vegetables." },
  { image: image2, title: "Sustainable Farming", description: "Eco-friendly farming practices for a better future." },
  { image: image3, title: "Quality Products", description: "Our products meet the highest standards." },
  { image: image4, title: "Expert Farmers", description: "Experienced farmers bringing you the best." },
  { image: image5, title: "Natural Growth", description: "100% organic and naturally grown products." },
];

const ThreeDSlider = () => {
  return (

 <>
 <div className='mx-auto w-[20rem] pb-5 text-center mt-40 mb- md:w-[28rem]  lg:w-[35rem]'>

 <h2 className='h2-title mb-16' >Quality Products</h2>
 <p className='captions'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
 <div className="relative w-full py-10">
   <h2 className="text-center text-3xl font-bold mb-6">Our Products</h2>
   <Swiper
     effect={"coverflow"}
     grabCursor={true}
     centeredSlides={true}
     slidesPerView={3} // Show 3 slides at once
     spaceBetween={30} // Adjust space between slides if needed
     coverflowEffect={{
       rotate: 30,
       stretch: 0,
       depth: 200,
       modifier: 1,
       slideShadows: true,
     }}
     pagination={{
       clickable: true,
     }}
     modules={[EffectCoverflow, Pagination]}
     className="mySwiper"
   >
     {slidesData.map((slide, index) => (
       <SwiperSlide key={index}>
         <div className="relative w-[300px] h-[400px] group">
           <img
             src={slide.image.src}
             alt={slide.title}
             className="w-full h-full object-cover rounded-lg shadow-lg"
           />
           {/* Content overlay */}
           <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
             <h3 className="text-white text-xl font-semibold">{slide.title}</h3>
             <p className="text-white text-sm mt-2 px-4 text-center">{slide.description}</p>
           </div>
         </div>
       </SwiperSlide>
     ))}
   </Swiper>
 </div>
 </>
  );
};

export default ThreeDSlider;