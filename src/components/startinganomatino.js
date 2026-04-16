"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function OpeningAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FEFEFE]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* IMAGE CONTAINER */}
          <div className="relative md:w-[220px] md:h-[220px] h-[160px] w-[160px] overflow-hidden rounded-2xl">
            
            {/* IMAGE */}
            <Image
              src="/kalena.jpg"
              alt="coffee"
              width={120}
              height={120}
              loading="eager"
              className="object-cover rounded-full md:h-[220px] h-[160px] w-[160px] md:w-[220px]"
            />

            {/* OVERLAY (moves up) */}
            <motion.div
              initial={{ y: "0%" }}
              animate={{ y: "-100%" }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute inset-0 bg-[#FEFEFE]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}