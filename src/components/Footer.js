"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import { Instagram, Facebook, Twitter } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#F9F7F5] text-gray-800 py-20 px-6"
      // variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        
        {/* Logo */}
        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            {/* SVG stays same */}
           <Image src={"/kalena.jpg"} alt="mammia " width={300} height={300} className="w-[120px] rounded-full"/>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Savor every sip. Our coffee is crafted with love, roasted with care,
            and served with passion.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4 uppercase text-sm">Explore</h3>
          <ul className="flex flex-col gap-3">
            {["Home", "About", "Menu", "Gallery", "Blog", "Contact"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link
                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className="hover:text-[#F5977E] transition"
                  >
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Hours */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4 uppercase text-sm">Hours</h3>
          <ul className="text-gray-600 text-sm flex flex-col gap-1">
            <li>Mon - Fri: 7am - 8pm</li>
            <li>Sat: 8am - 9pm</li>
            <li>Sun: 8am - 6pm</li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div variants={itemVariants}>
          <h3 className="font-semibold mb-4 uppercase text-sm">Connect</h3>

          {/* <div className="flex gap-4 mb-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-[#c77f4c] transition text-lg"
              >
                <Icon />
              </motion.a>
            ))}
          </div> */}

          <p className="text-gray-600 text-sm">
            Email:{" "}
            <a
              href="mailto:hello@brewhaven.com"
              className="hover:text-[#F5977E]"
            >
              hello@brewhaven.com
            </a>
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Phone: +123 456 7890
          </p>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        variants={itemVariants}
        className="border-t border-gray-200 mt-16 pt-6 text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} Brew Haven. Crafted with passion ☕
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

