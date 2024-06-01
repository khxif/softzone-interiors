"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HomeSection2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scale = useTransform(scrollYProgress, [0, 0.4], [1,0.8]);
  return (
    <section
      ref={ref}
      className="relative flex w-full flex-col items-center bg-black px-4 md:flex-row md:space-x-6"
    >
      <motion.div
        style={{ scale }}
        className="w-3/4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Image
          src="/world-map.png"
          alt="map"
          height={500}
          width={1000}
          priority
          className="size-full object-cover"
        />
      </motion.div>

      <div className="flex max-w-md flex-col space-y-4">
        <h1 className="text-xl text-green-600 md:text-2xl">We are global</h1>
        <p>
          The Pico Group is a world-wide network of agencies in 36 cities across
          the world, each providing local understanding to a global approach to
          activating brands. For over 50 years Pico has leveraged the platforms
          of its agencies and the expertise of the best people to become one of
          the most effective global, independent, agency networks in the world.
        </p>
      </div>
    </section>
  );
}
