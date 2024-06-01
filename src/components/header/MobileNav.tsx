"use client";

import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span className="absolute z-50 top-3 right-4 md:hidden">
        <Hamburger toggled={open} toggle={setOpen} />
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            animate={{
              scaleY: 1,
              transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
              },
            }}
            initial={{ scaleY: 0 }}
            exit={{
              scaleY: 0,
              transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
              },
            }}
            className="h-screen absolute origin-top top-0 w-full flex items-center 
            justify-center bg-black text-white flex-col space-y-4"
          >
            <motion.span
              initial={{ y: "30vh" }}
              animate={{ y: 0, transition: { duration: 0.7 } }}
              exit={{ y: "-30vh", transition: { duration: 0.5 } }}
            >
              SomeWhere
            </motion.span>

            <motion.span
              initial={{ y: "30vh" }}
              animate={{ y: 0, transition: { duration: 0.7 } }}
              exit={{ y: "-30vh", transition: { duration: 0.5 } }}
            >
              SomeWhere
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
