"use client"
import { useWindowSize } from "@uidotdev/usehooks"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { FaPlus } from "react-icons/fa"

const font = Inter({
    weight:["700"],
    subsets:["latin"]
});

const font2 = Inter({
    weight:["600"],
    subsets:["latin"]
})

const font3 = Inter({
    weight:["400"],
    subsets:["latin"]
})


export const FundamentalsPageComponent =()=>{
    const router = useRouter()
    const onClick =()=>{
        router.push("/auth/register")
    }

    return(
        <main className="w-full h-[5750px]  flex flex-col items-center">
            <div className="flex items-center justify-center mt-[60px] flex-col">
                <div className={cn(
                        "text-[70px] text-center w-[1100px]",
                        font2.className
                    )}>
                        Join us and discover stock fundamentals today
                </div>
                <p className={cn(
                    "w-[840px] text-center mt-[10px] text-gray-600 text-[16px]",
                    font3.className
                )}>
                    We understand that selecting the right stocks for your investment  portfolio is a critical decision. Here's why institutions worldwide  trust us.
                </p>
            </div>
            <div className="w-full h-[700px] flex flex-row justify-center space-x-[70px] mt-[65px]">
                <div className="bg-gray-500 w-[380px] h-[650px]">

                </div>
                <div className="bg-gray-500 w-[380px] h-[650px]">

                </div>
                <div className="bg-gray-500 w-[380px] h-[650px]">

                </div>
            </div>
            <div className=" w-full h-[600px] mt-[170px] flex flex-row justify-center space-x-[100px]">
                <div className="bg-gray-500 w-[500px] h-[600px] rounded-md">

                </div>
                <div className="w-[800px] h-[600px]  flex flex-col justify-center mt-[20px]">
                    <div className={cn(
                    "w-[130px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[20px]",
                    font.className
                    )}>
                        Growth
                    </div>
                    <p className={cn(
                        "text-[50px] w-[700px]",
                        font.className
                    )}>
                        Optimize growth with strategic stock insights
                    </p>
                    <p className={cn(
                        "w-[760px] mt-[10px] text-gray-600 text-[14px]",
                        font2.className
                    )}>
                        Maximize your investment growth by strategically identifying undervalued stocks, diversifying across sectors, and leveraging AI-powered insights for data-driven decisions
                    </p>
                    <div className={cn(
                        "h-[130px] mt-[15px] w-full flex flex-row",
                        font.className
                    )}>
                        <p className="flex flex-col text-[40px]">
                            <span className="flex flex-row">50,000<FaPlus className="w-[30px] h-[30px] mt-[15px] text-green-600"/></span>
                            <span className="text-[19px]">Stocks data</span>
                        </p>
                        <p className="flex flex-col text-[40px] ml-[30px]">
                            <span className="flex flex-row">500 <FaPlus className="w-[30px] h-[30px] mt-[15px] text-green-600"/></span>
                            <span className="text-[19px]">Company data</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 w-full h-[950px] mt-[200px] flex flex-col items-center justify-center">
            <div className="flex items-center justify-center mt-[50px] flex-col mb-[20px]">
                    <div className={cn(
                            "text-[55px] text-center w-[1300px]",
                            font2.className
                        )}>
                            Enhancing your investment decisions
                    </div>
                    <p className={cn(
                        "w-[850px] text-center mt-[10px] text-gray-600 text-[16px]",
                        font3.className
                    )}>
                        Empower investment decisions with comprehensive company data, advanced stock screening, and in-depth stock analysis for strategic growth.
                    </p>
                </div>
                <div className=" h-[440px] w-full flex flex-row justify-center space-x-[50px]">
                    <div className=" w-[550px] h-full flex flex-col space-y-[50px] justify-center">
                        <div className="bg-white shadow-md border-gray-500 w-full h-[130px] rounded-md">

                        </div>
                        <div className="bg-white shadow-md border-gray-500 w-full h-[130px] rounded-md">

                        </div>
                    </div>
                    <div className=" w-[550px] h-full flex flex-col space-y-[50px] justify-center">
                        <div className="bg-white shadow-md border-gray-500 w-full h-[130px] rounded-md">

                        </div>
                        <div className="bg-white shadow-md border-gray-500 w-full h-[130px] rounded-md">

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[2060px] mt-[200px] flex flex-col items-center">
                <div className="w-[1300px] h-[300px]  flex flex-row mb-[50px]">
                    <div className="w-[1000px] h-[300px]  flex flex-col items-start justify-end">
                        <div className={cn(
                        "w-[130px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[20px]",
                        font.className
                        )}>
                            Solution
                        </div>
                        <div className={cn(
                            "text-[50px] text-start w-[550px]",
                            font2.className
                        )}>
                            Our comprehensive solution encompasses 
                        </div>
                        <p className={cn(
                            "w-[650px] text-start mt-[10px] text-gray-600 text-[14.5px]",
                            font3.className
                        )}>
                            Empower your lending institution with our revolutionary technology,  meticulously designed to elevate your operations and drive unparalleled  success.
                        </p>
                    </div>
                    <div className="w-[300px] h-[300px] flex items-end justify-end">
                        <button className={cn(
                            "px-8 py-3.5 bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                            font2.className
                        )} onClick={onClick}>
                            Get started
                        </button>
                    </div>
                </div>
                <div className="space-y-[100px]">
                    <div className=" flex flex-row justify-center relative">
                        <div className="bg-gray-700 w-[800px] h-[500px] flex flex-col">
                        
                        </div>
                        <div className="absolute w-[260px] h-[180px] rounded-md border-gray-500 shadow-md bg-white right-[310px] top-[280px]">

                        </div>
                        <div className="bg-gray-200 w-[500px] h-[500px]">
        
                        </div>
                    </div>
                    <div className=" flex flex-row justify-center relative">
                        <div className="bg-gray-200 w-[500px] h-[500px] flex flex-col">
                        
                        </div>
                        <div className="absolute w-[260px] h-[180px] rounded-md border-gray-500 shadow-md bg-white left-[310px] top-[280px]">

                        </div>
                        <div className="bg-green-500 w-[800px] h-[500px]">
        
                        </div>
                    </div>
                    <div className=" flex flex-row justify-center relative">
                        <div className="bg-blue-900 w-[800px] h-[500px] flex flex-col">
                        
                        </div>
                        <div className="absolute w-[260px] h-[180px] rounded-md border-gray-500 shadow-md bg-white right-[310px] top-[280px]">

                        </div>
                        <div className="bg-gray-200 w-[500px] h-[500px]">
        
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[900px] mt-[210px] flex  justify-center">
                <div className="w-[1400px] h-[520px] bg-white flex-row flex rounded-xl border-[2px] shadow-xl">
                    <div className="flex flex-col w-[650px] h-[520px] items-start justify-center ml-[80px]">
                        <div className={cn(
                        "w-[210px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[20px]",
                        font.className
                        )}>
                            Get Started for Free
                        </div>
                        <p className={cn(
                            "text-[50px] w-[700px]",
                            font.className
                        )}>
                            Level up your Investment Game Today!
                        </p>
                        <p className={cn(
                            "w-[620px] mt-[10px] text-gray-600 text-[14px]",
                            font2.className
                        )}>
                            Try SaaBee risk-free with our free trial and experience the power of unified investment analysis.
                        </p>
                        <button className={cn(
                            "w-[120px] mt-[30px] py-[12px] bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                            font2.className
                        )} onClick={onClick}>
                                Get started
                        </button>
                    </div>
                    <div className="w-full h-full items-end justify-end flex">
                        <div className="w-[600px] bg-gray-700 rounded-xl h-[420px] items-end justify-end flex">
                        
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}