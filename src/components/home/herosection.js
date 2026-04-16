"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Herosection = () => {
  return (
    <section className="w-full  bg-[#FEFEFE] flex items-center justify-center px-6 ">
      <div className="max-w-8xl w-full h-full  grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="  flex items-center justify-center mt-12 md:mt-0 overflow-hidden"
        >
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl Merriweather font-bold leading-tight text-[#2D1F1A]">
              Awaken Your Senses With a <br />
              <span className="text-[#F5977E]">Perfect Cup of Coffee</span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              Experience the aroma of freshly brewed coffee crafted with
              passion. From rich espresso to smooth lattes — every sip tells a
              story of quality and comfort.
            </p>

            <div>
              <Link href="/Menu">
                <button className="mt-6 px-8 py-3 cursor-pointer border-2 border-[#F5977E] text-[#F5977E] rounded-2xl font-medium hover:bg-[#F5977E] hover:text-white transition">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE GRID */}
        <div className=" md:h-[90vh] h-[50vh] flex items-center justify-center  w-full">
          <div className=" gap-3 relative md:max-h-[550px] md:max-w-[560px] max-h-[400px] w-[90%]  grid grid-cols-2 grid-rows-2 h-full ">
            <div className="absolute -bottom-15 z-10 w-56 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-gray-100">
  
  {/* Stars */}
  <div className="flex items-center gap-1 mb-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 fill-yellow-400"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927C9.349 2.006 10.651 2.006 10.951 2.927L12.3 6.81a1 1 0 00.95.69h4.084c.969 0 1.371 1.24.588 1.81l-3.305 2.4a1 1 0 00-.364 1.118l1.26 3.87c.3.92-.755 1.688-1.54 1.118l-3.305-2.4a1 1 0 00-1.176 0l-3.305 2.4c-.784.57-1.838-.197-1.539-1.118l1.26-3.87a1 1 0 00-.364-1.118l-3.305-2.4c-.783-.57-.38-1.81.588-1.81h4.084a1 1 0 00.95-.69l1.35-3.883z" />
      </svg>
    ))}
  </div>

  {/* Text */}
  <p className="text-sm text-gray-700 leading-tight">
    Loved by customers for quality coffee and cozy vibes.
  </p>
</div>

<div className="absolute -top-10 right-0 z-10 w-56 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-gray-100">
  
  {/* Stars */}
  <div className="flex items-center gap-1 mb-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 fill-yellow-400"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927C9.349 2.006 10.651 2.006 10.951 2.927L12.3 6.81a1 1 0 00.95.69h4.084c.969 0 1.371 1.24.588 1.81l-3.305 2.4a1 1 0 00-.364 1.118l1.26 3.87c.3.92-.755 1.688-1.54 1.118l-3.305-2.4a1 1 0 00-1.176 0l-3.305 2.4c-.784.57-1.838-.197-1.539-1.118l1.26-3.87a1 1 0 00-.364-1.118l-3.305-2.4c-.783-.57-.38-1.81.588-1.81h4.084a1 1 0 00.95-.69l1.35-3.883z" />
      </svg>
    ))}
  </div>

  {/* Text */}
  <p className="text-sm text-gray-700 leading-tight">
    Rated 5 stars by hundreds of happy customers.
  </p>
</div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src={`/gallery/3.jpg`}
                alt="coffee"
                width={500}
                height={500}
                className="w-[110%] h-[80%] absolute bottom-0  object-cover  transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src={`/gallery/1.jpg`}
                alt="coffee"
                width={500}
                height={500}
                className="w-[80%] h-full absolute  object-cover  transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {" "}
              <Image
                src={`/gallery/2.jpg`}
                alt="coffee"
                width={500}
                height={500}
                className="w-[80%] h-full right-0 object-cover absolute  transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src={`/gallery/4.jpg`}
                alt="coffee"
                width={500}
                height={500}
                className="w-full  absolute h-[80%] object-cover  transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
        {/* <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
              <Image
                src={`/gallery/1.jpg`}
                alt="coffee"
                width={500}
                height={500}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <Image
                src={`/gallery/2.jpg`}
                alt="coffee"
                width={500}
                height={500}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <Image
                src={`/gallery/3.jpg`}
                alt="coffee"
                width={500}
                height={500}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <Image
                src={`/gallery/4.jpg`}
                alt="coffee"
                width={500}
                height={500}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Herosection;
