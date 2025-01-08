'use client'
import { cn } from "@/lib/utils"
import { Inter } from 'next/font/google'
import { useRouter } from "next/navigation"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const font = Inter({
    weight:['500'],
    subsets:["latin"]
})

export const HeaderMenuComponent =()=>{
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const router = useRouter();

    const onClick =()=>{
        router.push("/why-osiris")
    }

    const onClick2 =()=>{
        router.push("/pricing")
    }

    const onClick3 =()=>{
        router.push("/blog")
    }

    const onClick4 =()=>{
        router.push("/demo")
    }

    const onClick5 = () => {
        router.push("/use-cases/stock");
    };

    const onClick6 = () => {
        router.push("/use-cases/crypto");
    };

    const onClick7 = () => {
        router.push("/use-cases/fundamentals");
    };

    const onClick8 = () => {
        router.push("/use-cases/Investing-guide");
    };

    const onClick9 = () => {
        router.push("/use-cases/global-news");
    };

    const onClick10 = () => {
        router.push("/use-cases/your-portfolio");
    };

    return(
        <main className="w-full h-full flex flex-col">
            <div className="bg-white border-b-[0.1px] border-gray-300 w-full h-[75px] flex flex-row items-center justify-start hover:text-blue-500 transition cursor-pointer" onClick={onClick}>
                <p className={cn(
                    "text-[16px] ml-[39px]",
                    font.className
                )}>
                    Why Osiris
                </p>
            </div>
            <div 
                className="bg-white border-b-[0.1px] border-gray-300 w-full h-[75px] flex flex-row items-center justify-start cursor-pointer shadow-md"
                onClick={()=> setIsDropDownOpen(!isDropDownOpen)}
            >
                <p className={cn(
                    "text-[16px] ml-[39px]",
                    font.className
                )}>
                    Use cases
                </p>
                <IoIosArrowDown
                    size="18"
                    className={`ml-auto group-hover:translate-x-1 transition-transform duration-200 mr-[39px] ${isDropDownOpen ? 'rotate-[-180deg]' : 'rotate-0'}`}
                />
            </div>
            {isDropDownOpen && (
                <div className="h-[450px] w-full">
                    <div className="bg-gray-100 border-b-[0.1px] border-gray-100 w-full h-[75px] flex flex-row items-center justify-start cursor-pointer transition hover:text-blue-700" onClick={onClick5}>
                        <p className={cn(
                            "text-[16px] ml-[39px]",
                            font.className
                        )}>
                            Stock
                        </p>
                        <IoIosArrowForward
                            size="18"
                            className="ml-auto group-hover:translate-x-1 transition-transform duration-200 mr-[39px]"
                        />
                    </div>
                    <div className="bg-gray-100 border-b-[0.1px] border-gray-100 w-full h-[75px] flex flex-row items-center justify-start cursor-pointer transition hover:text-blue-700" onClick={onClick6}>
                        <p className={cn(
                            "text-[16px] ml-[39px]",
                            font.className
                        )}>
                            Crypto
                        </p>
                        <IoIosArrowForward
                            size="18"
                            className="ml-auto group-hover:translate-x-1 transition-transform duration-200 mr-[39px]"
                        />
                    </div>
                    <div className="bg-gray-100 border-b-[0.1px] border-gray-100 w-full h-[75px] flex flex-row items-center justify-start cursor-pointer transition hover:text-blue-700" onClick={onClick7}>
                        <p className={cn(
                            "text-[16px] ml-[39px]",
                            font.className
                        )}>
                            Fundamentals
                        </p>
                        <IoIosArrowForward
                            size="18"
                            className="ml-auto group-hover:translate-x-1 transition-transform duration-200 mr-[39px]"
                        />
                    </div>
                    <div className="bg-gray-100 border-b-[0.1px] border-gray-100 w-full h-[75px] flex flex-row items-center justify-start cursor-pointer transition hover:text-blue-700" onClick={onClick8}>
                        <p className={cn(
                            "text-[16px] ml-[39px]",
                            font.className
                        )}>
                            Investing guide
                        </p>
                        <IoIosArrowForward
                            size="18"
                            className="ml-auto group-hover:translate-x-1 transition-transform duration-200 mr-[39px]"
                        />
                    </div>
                    <div className="bg-gray-100 border-b-[0.1px] border-gray-100 w-full h-[75px] flex flex-row items-center justify-start cursor-pointer transition hover:text-blue-700" onClick={onClick9}>
                        <p className={cn(
                            "text-[16px] ml-[39px]",
                            font.className
                        )}>
                            Global news
                        </p>
                        <IoIosArrowForward
                            size="18"
                            className="ml-auto group-hover:translate-x-1 transition-transform duration-200 mr-[39px]"
                        />
                    </div>
                    <div className="bg-gray-100 border-b-[0.1px] border-gray-100 w-full h-[75px] flex flex-row items-center justify-start cursor-pointer transition hover:text-blue-700" onClick={onClick10}>
                        <p className={cn(
                            "text-[16px] ml-[39px]",
                            font.className
                        )}>
                            Your portfolio
                        </p>
                        <IoIosArrowForward
                            size="18"
                            className="ml-auto group-hover:translate-x-1 transition-transform duration-200 mr-[39px]"
                        />
                    </div>
                </div>
            )}
            <div className="bg-white border-b-[0.1px] border-gray-300 w-full h-[75px] flex flex-row items-center justify-start hover:text-blue-500 transition cursor-pointer" onClick={onClick2}>
                <p className={cn(
                    "text-[16px] ml-[39px]",
                    font.className
                )}>
                    Pricing
                </p>
            </div>
            <div className="bg-white border-b-[0.1px] border-gray-300 w-full h-[75px] flex flex-row items-center justify-start hover:text-blue-500 transition cursor-pointer" onClick={onClick4}>
                <p className={cn(
                    "text-[16px] ml-[39px]",
                    font.className
                )}>
                    View demo
                </p>
            </div>
            <div className="bg-white border-b-[0.1px] border-gray-300 w-full h-[75px] flex flex-row items-center justify-start hover:text-blue-500 transition cursor-pointer" onClick={onClick3}>
                <p className={cn(
                    "text-[16px] ml-[39px]",
                    font.className
                )}>
                    Blog
                </p>
            </div>
            <div className="bg-white border-[0.5px] border-gray-500 hover:border-blue-700 transition hover:text-blue-700 shadow-sm h-[55px] mt-[50px] ml-[39px] mr-[39px] flex items-center justify-start cursor-pointer">
                <p className={cn(
                    "text-[16px] ml-[24px]",
                    font.className
                )}>
                    Sign in
                </p>
            </div>
            <div className="bg-green-500 hover:bg-gray-400 text-white hover:border-blue-700 transition hover:text-gray-800 shadow-sm h-[55px] mt-[20px] ml-[39px] mr-[39px] flex items-center justify-start cursor-pointer mb-[50px]">
                <p className={cn(
                    "text-[16px] ml-[24px]",
                    font.className
                )}>
                    Sign up
                </p>
                <IoIosArrowForward
                    size="18"
                    className="ml-auto group-hover:translate-x-1 transition-transform duration-200 mr-[39px]"
                />
            </div>
        </main>
    )
}