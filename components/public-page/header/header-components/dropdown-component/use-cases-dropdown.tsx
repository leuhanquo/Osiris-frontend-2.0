"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

const font = Inter({
  weight: ["600"],
  subsets: ["latin"],
});

export const UseCasesDropDown = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onClick1 = () => {
    router.push("/use-cases/stock");
  };

  const onClick2 = () => {
    router.push("/use-cases/crypto");
  };

  const onClick3 = () => {
    router.push("/use-cases/fundamentals");
  };

  const onClick4 = () => {
    router.push("/use-cases/Investing-guide");
  };

  const onClick5 = () => {
    router.push("/use-cases/global-news");
  };

  const onClick6 = () => {
    router.push("/use-cases/your-portfolio");
  };

  return (
    <div
      className={cn(
        "relative flex h-[80px] items-center justify-center text-[15px] cursor-pointer w-1/5",
        font.className
      )}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown Trigger */}
      <div className="flex items-center">
        <div>Use cases</div>
        <IoIosArrowDown
          size="16"
          className={cn(
            "ml-[4.5px] mt-[2px] transition-transform duration-200",
            isOpen ? "rotate-[-180deg]" : "rotate-0"
          )}
        />
      </div>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute left-[40px] top-full mt-[-15px] w-[200px] rounded-lg bg-white border border-gray-300 shadow-sm",
          "transition-all duration-300 transform-gpu",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
        style={{
          maxHeight: isOpen ? "500px" : "0px", // Smooth height change
          overflow: "hidden", // Prevent overflow when closed
        }}
      >
        {/* Dropdown Content */}
        <div className="flex flex-col space-y-2 justify-center pt-5 pb-5">
          <div
            className="flex flex-row items-center px-4 py-2 group cursor-pointer transition-all duration-100 hover:text-blue-700"
            onClick={onClick1}
          >
            <div>Stock</div>
            <IoIosArrowForward
              size="16"
              className="ml-auto group-hover:translate-x-1 transition-transform duration-200"
            />
          </div>
          <div
            className="flex flex-row items-center px-4 py-2 group cursor-pointer transition-all duration-100 hover:text-blue-700"
            onClick={onClick2}
          >
            <div>Crypto</div>
            <IoIosArrowForward
              size="16"
              className="ml-auto group-hover:translate-x-1 transition-transform duration-200"
            />
          </div>
          <div
            className="flex flex-row items-center px-4 py-2 group cursor-pointer transition-all duration-100 hover:text-blue-700"
            onClick={onClick3}
          >
            <div>Fundamentals</div>
            <IoIosArrowForward
              size="16"
              className="ml-auto group-hover:translate-x-1 transition-transform duration-200"
            />
          </div>
          <div
            className="flex flex-row items-center px-4 py-2 group cursor-pointer transition-all duration-100 hover:text-blue-700"
            onClick={onClick4}
          >
            <div>Investing guide</div>
            <IoIosArrowForward
              size="16"
              className="ml-auto group-hover:translate-x-1 transition-transform duration-200"
            />
          </div>
          <div
            className="flex flex-row items-center px-4 py-2 group cursor-pointer transition-all duration-100 hover:text-blue-700"
            onClick={onClick5}
          >
            <div>Global news</div>
            <IoIosArrowForward
              size="16"
              className="ml-auto group-hover:translate-x-1 transition-transform duration-200"
            />
          </div>
          <div
            className="flex flex-row items-center px-4 py-2 group cursor-pointer transition-all duration-100 hover:text-blue-700"
            onClick={onClick6}
          >
            <div>Your portfolio</div>
            <IoIosArrowForward
              size="16"
              className="ml-auto group-hover:translate-x-1 transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};




