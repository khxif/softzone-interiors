"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Award2023 from "../contents/Award2023";
import Award2024 from "../contents/Award2024";

export default function AwardsSection() {
  const [year, setYear] = useState<Year>("2024");

  const years: Year[] = ["2024", "2023"] as const;
  return (
    <section className="award-bg relative flex h-screen w-full flex-col 
    items-center justify-start bg-opacity-65 py-8 md:flex-row md:justify-center">
      
      <div className="w-full md:flex-1 md:pl-28 relative">
        <div className="transparent-bg flex h-full w-full flex-row items-center justify-center 
        space-x-5 p-5 md:flex-col md:space-x-0 md:space-y-8">
          {years.map((yr) => (
            <span
              key={yr}
              className={cn(
                yr === year && "text-green-400",
                `cursor-pointer text-lg font-semibold transition-all duration-200 ease-linear
                 hover:text-green-400 z-50`,
              )}
              onClick={() => setYear(yr)}
            >
              {yr}
            </span>
          ))}
        </div>
      </div>

      <div className="flex relative z-50 flex-col space-y-5 bg-black/70 px-6 py-8 md:h-3/4 md:flex-1">
        {year === "2024" && <Award2024 />}
        {year === "2023" && <Award2023 />}
      </div>
      
      <div className="absolute  text-6xl w-full h-full flex items-center justify-center opacity-60" >
       <div>
       <span className="highlight text-white">awa
        <span className="text-[#00ffff]">rds</span>
        </span>
       </div>
      </div>
    </section>
  );
}
