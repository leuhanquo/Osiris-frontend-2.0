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

export const WhyOsirisContent =()=>{
    const router = useRouter();

    const onClick =()=>{
        router.push('/auth/register')
    }

    return(
        <main className="w-full h-[3700px]  flex flex-col items-center">
            <div className="flex items-center justify-center mt-[50px] flex-col">
                <div className={cn(
                        "text-[65px] text-center w-[1100px]",
                        font2.className
                    )}>
                        Empowering people with reliable investment solutions
                </div>
                <p className={cn(
                    "w-[1000px] text-center mt-[10px] text-gray-600 text-[18px]",
                    font3.className
                )}>
                    At Osiris, our mission is to make investment management straightforward and stress-free for individual of all sizes.
                </p>
            </div>
            <div className="bg-gray-700 flex items-center justify-center text-white rounded-xl w-[1150px] h-[530px] mt-[40px]">
                Team picture
            </div>
            <div className="w-[1150px] h-[300px]  mt-[30px] flex flex-row">
                <div className="w-1/3 h-full  flex justify-start">
                    <p className={cn(
                        "text-[50px]",
                        font2.className
                    )}>
                        Our mission
                    </p>
                </div>
                <div className="w-2/3 h-full">
                    <div className="w-full h-[170px] flex flex-row">
                        <p className={cn(
                            "text-gray-500 text-[16px] w-[740px] mt-[8px]",
                            font3.className
                        )}>
                            Osiris was founded by a team of experienced financial professionals  who recognized the need for an intuitive, comprehensive accounting  solution. Frustrated by the complexity and inefficiency of existing  software, we set out to create a platform that addresses the unique  challenges faced by businesses in managing their finances. Since our  launch, we have grown into a trusted partner for companies around the  world, helping them to streamline their accounting processes and achieve financial clarity.
                        </p>
                    </div>
                    <div className={cn(
                        "w-full h-1/3  flex flex-row",
                        font.className
                    )}>
                        <p className="flex flex-col text-[35px]">
                            <span className="flex flex-row">50,000<FaPlus className="w-[25px] h-[25px] mt-[15px] text-green-600"/></span>
                            <span className="text-[12px] text-gray-500">Stocks data</span>
                        </p>
                        <p className="flex flex-col text-[35px] ml-[45px]">
                            <span className="flex flex-row">1,250 <FaPlus className="w-[25px] h-[25px] mt-[15px] text-green-600"/></span>
                            <span className="text-[12px] text-gray-500">Crypto data</span>
                        </p>
                        <p className="flex flex-col text-[35px] ml-[45px]">
                            <span className="flex flex-row">500 <FaPlus className="w-[25px] h-[25px] mt-[15px] text-green-600"/></span>
                            <span className="text-[12px] text-gray-500">Investment data</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className=" w-full h-[400px] mt-[100px] flex justify-center space-x-[60px]">
                <div className="w-[350px] h-[500px]  flex flex-col">
                    <div className="w-full bg-gray-600 h-[200px] rounded-xl">

                    </div>
                    <div className="w-[350px] mt-[25px]">
                        <p className={cn(
                            "text-[23px]",
                            font2.className
                        )}>
                            Easy as cards
                        </p>
                        <p className={cn(
                            "text-gray-600 w-[300px]",
                            font3.className
                        )}>
                            Increase conversion with a 3-click payment  experience powered by the Plaid Network.
                        </p>
                    </div>
                </div>
                <div className="w-[350px] h-[500px]  flex flex-col">
                    <div className="w-full bg-gray-600 h-[200px] rounded-xl">

                    </div>
                    <div className="w-[350px] mt-[25px]">
                        <p className={cn(
                            "text-[23px]",
                            font2.className
                        )}>
                            Global coverage
                        </p>
                        <p className={cn(
                            "text-gray-600 w-[300px]",
                            font3.className
                        )}>
                            Access global bank rails while preventing losses with real-time insights from Plaid’s risk engine.
                        </p>
                    </div>
                </div>
                <div className="w-[350px] h-[500px] flex flex-col">
                    <div className="w-full bg-gray-600 h-[200px] rounded-xl">

                    </div>
                    <div className="w-[350px] mt-[25px]">
                        <p className={cn(
                            "text-[23px]",
                            font2.className
                        )}>
                            Lower transaction fees
                        </p>
                        <p className={cn(
                            "text-gray-600 w-[300px]",
                            font3.className
                        )}>
                            Reduce payment costs and lower your processing fees by an average of 40%.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[400px] mt-[100px] flex justify-center">
                <div className="bg-green-500 border-[1.5px] shadow-lg w-[1300px] h-[360px] rounded-[20px] flex flex-row">
                    <div className="w-[600px] h-[370px] flex flex-col justify-start mt-[80px] ml-[40px] space-y-8">
                        <p className={cn(
                            "text-[40px] text-white w-[500px]",
                            font2.className
                        )}>
                            Partner with us for your investment growth
                        </p>
                        <button className={cn(
                            "px-8 py-3.5 bg-gray-600 w-[170px] text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                            font2.className
                        )} onClick={onClick}>
                            Get started
                        </button>
                    </div>
                    <div className="flex items-end justify-end w-full">
                        <div className="bg-gray-500 rounded-[20px] w-[550px] h-[310px]">

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[370px]  flex items-center flex-col mt-[150px]">
                <div className=" w-[1200px] h-[350px]">
                    <div className="flex flex-row items-center justify-center space-x-[60px] p-6 bg-white">
                        {/* Placeholder for image or graphic */}
                        <div className="w-1/2 bg-white flex items-center justify-center">
                            <div className="bg-gray-600 w-[500px] h-[280px] rounded-lg">

                            </div>
                        </div>

                        {/* Text content */}
                        <div className="w-1/2">
                            <h2 className={cn(
                                "text-[40px] font-bold text-black mb-2",
                                font2.className
                            )}>Easy one-click checkout</h2>
                            <p className={cn(
                                "text-gray-600 w-[600px]",
                                font3.className
                            )}>
                                Make payments as quick as a click. Get access to the largest network of recognized pay-by-bank users so you can offer the fastest payment experience every time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[500px] flex flex-row justify-center">
                <div className="w-[570px] h-[360px]  border-t-[1px] border-black flex flex-col items-center">
                    <p className={cn(
                        "text-[50px] mt-[40px]",
                        font2.className
                    )}>
                        1 in 3
                    </p>
                    <p className={cn(
                        "mt-[20px] text-[15px] text-gray-500 w-[300px]",
                        font3.className
                    )}>
                       U.S. adults with a bank account has used Plaid to connect to an app or service 
                    </p>
                </div>
                <div className="w-[570px] h-[360px]  border-t-[1px] border-l-[1px] border-black flex flex-col items-center">
                <p className={cn(
                        "text-[50px] mt-[40px]",
                        font2.className
                    )}>
                        23%
                    </p>
                    <p className={cn(
                        "mt-[20px] text-[15px] text-gray-500 w-[300px]",
                        font3.className
                    )}>
                       U.S. adults with a bank account has used Plaid to connect to an app or service 
                    </p>
                </div>
            </div>
            <div className="p-6 bg-white flex flex-row justify-center w-full mt-[30px]">
                <h2 className={cn(
                    "text-[50px] w-[500px] text-black mb-6",
                    font2.className
                )}>Meet the amazing team</h2>
                <div className="flex items-center justify-center w-[780px] space-x-[50px]">
                    <div className="flex flex-col items-center">
                        <div className="w-[250px] h-[300px] bg-gray-300 rounded-lg mb-4"></div>
                        <h3 className="text-lg font-semibold text-black">Alfa Lionel Lofan</h3>
                        <p className="text-gray-600 text-sm">CEO & Founder</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[250px] h-[300px] bg-gray-300 rounded-lg mb-4"></div>
                        <h3 className="text-lg font-semibold text-black">Kistosi Algifari</h3>
                        <p className="text-gray-600 text-sm">COO & Co-Founder</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[250px] h-[300px] bg-gray-300 rounded-lg mb-4"></div>
                        <h3 className="text-lg font-semibold text-black">Joe Geraldo</h3>
                        <p className="text-gray-600 text-sm">CTO & Co-Founder</p>
                    </div>
                </div>
            </div>
        </main>
    )
}