"use client"
import { useWindowSize } from "@uidotdev/usehooks"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useState } from "react";

const font = Inter({
    weight:["700"],
    subsets:["latin"]
});

const font2 = Inter({
    weight:["600"],
    subsets:["latin"]
})

export const BlogPageContent=()=>{
    return(
        <div className="w-full h-[3500px]">
            <div className="flex items-center justify-center flex-col w-full h-[350px] mt-[40px] ">
                <div className={cn(
                "w-[120px] h-[50px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                font.className
                )}>
                    Blog
                </div>
                <p className={cn(
                    "text-[60px] w-[750px] text-center",
                    font.className
                )}>
                    Insights & Trends from Experts
                </p>
                <p className={cn(
                    "w-[700px] mt-[10px] text-gray-600 text-[14px] text-center",
                    font2.className
                )}>
                    Discover valuable insights, trends, and expert advice in our blog, tailored to help you make data-driven decisions.
                </p>
            </div>
            <div className=" w-full h-[700px] flex flex-row justify-center space-x-[90px]">
                <div className="bg-white border-[1px] shadow-md h-[650px] w-[500px] rounded-[20px] flex justify-center">
                    <div className="bg-gray-300 w-[430px] h-[330px] rounded-[20px] mt-[40px]">
                        
                    </div>
                </div>
                <div className="flex flex-col w-[500px] h-[650px] items-center space-y-[40px]">
                    <div className="w-[600px] h-[200px] rounded-[20px] bg-white border-[1px] shadow-md flex items-center">
                        <div className="bg-gray-500  ml-[30px] w-[180px] h-[160px] rounded-[20px]">

                        </div>
                    </div>
                    <div className="w-[600px] h-[200px] rounded-[20px] bg-white border-[1px] shadow-md flex items-center">
                        <div className="bg-gray-500  ml-[30px] w-[180px] h-[160px] rounded-[20px]">

                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full h-[100px] mt-[130px]">
                <p className={cn(
                        "text-[62px] text-center",
                        font.className
                    )}>
                        Articles for <span className="text-green-600">you</span>
                </p>
            </div>
            <div className=" w-full h-[520px] flex flex-row justify-center space-x-[50px] mt-[40px]">
                <div className="bg-white border-[1px] shadow-md h-[500px] w-[400px] rounded-[15px] flex justify-center">
                    <div className="bg-gray-300 w-[330px] h-[230px] rounded-[15px] mt-[40px]">
                        
                    </div>
                </div>
                <div className="bg-white border-[1px] shadow-md h-[500px] w-[400px] rounded-[15px] flex justify-center">
                    <div className="bg-gray-300 w-[330px] h-[230px] rounded-[15px] mt-[40px]">
                        
                    </div>
                </div>
                <div className="bg-white border-[1px] shadow-md h-[500px] w-[400px] rounded-[15px] flex justify-center">
                    <div className="bg-gray-300 w-[330px] h-[230px] rounded-[15px] mt-[40px]">
                        
                    </div>
                </div>
            </div>
            <div className=" w-full h-[520px] flex flex-row justify-center space-x-[50px] mt-[40px]">
                <div className="bg-white border-[1px] shadow-md h-[500px] w-[400px] rounded-[15px] flex justify-center">
                    <div className="bg-gray-300 w-[330px] h-[230px] rounded-[15px] mt-[40px]">
                        
                    </div>
                </div>
                <div className="bg-white border-[1px] shadow-md h-[500px] w-[400px] rounded-[15px] flex justify-center">
                    <div className="bg-gray-300 w-[330px] h-[230px] rounded-[15px] mt-[40px]">
                        
                    </div>
                </div>
                <div className="bg-white border-[1px] shadow-md h-[500px] w-[400px] rounded-[15px] flex justify-center">
                    <div className="bg-gray-300 w-[330px] h-[230px] rounded-[15px] mt-[40px]">
                        
                    </div>
                </div>
            </div>
            <div className=" w-full h-[520px] flex flex-row justify-center space-x-[50px] mt-[40px]">
                <div className="bg-white border-[1px] shadow-md h-[500px] w-[400px] rounded-[15px] flex justify-center">
                    <div className="bg-gray-300 w-[330px] h-[230px] rounded-[15px] mt-[40px]">
                        
                    </div>
                </div>
                <div className="bg-white border-[1px] shadow-md h-[500px] w-[400px] rounded-[15px] flex justify-center">
                    <div className="bg-gray-300 w-[330px] h-[230px] rounded-[15px] mt-[40px]">
                        
                    </div>
                </div>
                <div className="bg-white border-[1px] shadow-md h-[500px] w-[400px] rounded-[15px] flex justify-center">
                    <div className="bg-gray-300 w-[330px] h-[230px] rounded-[15px] mt-[40px]">
                        
                    </div>
                </div>
            </div>
            <div className="w-full h-[400px] flex items-center justify-center mt-[70px]">
                <div className="w-[1300px] h-[340px] bg-white shadow-xl border-[1px] rounded-[15px]">

                </div>
            </div>
        </div>
    )
}