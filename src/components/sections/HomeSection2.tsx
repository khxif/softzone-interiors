"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function HomeSection2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);
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

      <div className="flex max-w-md flex-col space-y-4 pb-16">
        <h1 className="text-xl text-green-600 md:text-2xl">Our Mission</h1>
        <p>
          For us at SoftZone, designing environments that uplift, soothe, and
          delight comes naturally. We collaborate closely with you to fully
          understand your requirements and preferences, and then our team of
          skilled designers and artisans creates custom solutions that go above
          and beyond. In every project, we are your dependable partner since we
          are dedicated to quality, innovation, and client satisfaction.
        </p>
      </div>
    </section>
  );
}
