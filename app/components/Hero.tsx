"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Heroimage from "../../public/assets/images/Hero-Image.png";
import Heroimage1 from "../../public/assets/images/Hero-Image1.png";
import Heroimage2 from "../../public/assets/images/Hero-Image2.png";
import Heroimage3 from "../../public/assets/images/Hero-Image3.png";
import Navbar from "./Navbar";
import Slider from "react-slick";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images: string[] = [Heroimage, Heroimage1, Heroimage2, Heroimage3];
  const content: { h3: string; h1: string }[] = [
    { h3: "Welcome to TenTwenty Farms", h1: "From our Farms to your hands" },
    { h3: "Experience fresh and organic produce", h1: "Healthy food, healthy life" },
    { h3: "Sustainable farming practices", h1: "Growing with care for the future" },
    { h3: "Your local farm, delivering goodness", h1: "Support local, eat fresh" },
  ];

  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000, // Faster speed
    autoplaySpeed: 3000,
    slidesToShow: 1,
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next); // Update active slide index
    },
  };

  return (
    <div>
      <Navbar />

      {/* Hero Title Section */}
      <div className="absolute hero-title-container z-10 flex mt-[16rem] ml-[4rem] sm:mt-[19rem] md:mt-[19rem] lg:mt-[22rem] lg:ml-[9rem]">
        <div className="w-9/12 lg:w-3/5">
          {/* Animated Text Content */}
          <motion.h3
            key={content[activeSlide].h3}
            className="h3-title mb-6 opacity-0"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {content[activeSlide].h3}
          </motion.h3>

          <motion.h1
            key={content[activeSlide].h1}
            className="h1-m-title lg:h1-title opacity-0"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Delay for content appearance
          >
            {content[activeSlide].h1}
          </motion.h1>
        </div>
      </div>

      {/* Hero Button Section with Active Image */}
      <div
        onClick={() => sliderRef.current?.slickNext()}
        className="hero-button-container cursor-pointer absolute z-10 opacity-6 gap-5 flex mt-[35rem] ml-[4rem] lg:mt-[40rem] lg:ml-[9rem]"
      >
        <div className="absolute top-12 left-10">
          <p className="captions">Next</p>
        </div>

        {/* Active Image Display */}
        <div className="p-5 border border-[#EEF4F9]">
          <Image
            src={images[activeSlide]} // Dynamically display the active image
            alt={`Active hero image ${activeSlide}`}
            className="h-20 w-20 object-cover rounded-md"
          />
        </div>

        {/* Pagination Indicator */}
        <div className="flex number-muted items-center gap-4">
          <p>0{activeSlide + 1}</p>
          <hr className="w-20" />
          <p>0{images.length}</p>
        </div>
      </div>

      {/* Slider Section */}
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="h-screen w-screen p-0 m-0"
            initial={{ rotateX: 90 }}
            animate={{ rotateX: 0 }}
            exit={{ rotateX: 90 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div
              className="h-full w-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <Image
                className="h-screen w-screen p-0 m-0"
                src={image}
                alt={`hero image ${index}`}
              />
            </motion.div>
          </motion.div>
        ))}
      </Slider>

      {/* Responsive Styles */}
      <style jsx>{`
        @media only screen and (max-width: 1368px) and (max-height: 655px) {
          .hero-title-container {
            margin-top: 15rem;
          }
          .hero-button-container {
            margin-top: 30rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
