'use client'
import { useWindowSize } from "@uidotdev/usehooks"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { FaCheckSquare } from "react-icons/fa"


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

export const CryptoPagePublic =()=>{
    const router = useRouter()
    const onClick =()=>{
        router.push("/auth/register")
    }

    return(
        <main className="w-full h-[5150px]">
            <div className="w-full h-[300px] mt-[35px] flex items-center justify-center flex-col">
                <div className={cn(
                "w-[130px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[20px]",
                font.className
                )}>
                    Crypto
                </div>
                <div className={cn(
                        "text-[65px] text-center w-[1300px]",
                        font2.className
                    )}>
                        Building cryptocurrency learning platform for everyone
                </div>
            </div>
            <div className="w-full h-[550px] justify-center flex">
                <div className="h-[550px] w-[1270px] bg-white border-[0.2px] border-gray-200  rounded-md shadow-md">

                </div>
            </div>
            <div className="w-full h-[250px] flex justify-center mt-[50px]">
                <div className="h-[250px] w-[1270px]  flex flex-row">
                    <div className="h-[245px] w-[600px]">
                        <div className={cn(
                                "text-[50px] text-start w-[1100px]",
                                font2.className
                            )}>
                                Our mission
                        </div>
                        <p className={cn(
                            "w-[540px] text-start mt-[5px] text-gray-600 text-[15px]",
                            font3.className
                        )}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet  sint. Velit officia consequat duis enim velit mollit. Exercitation  veniam consequat sunt nostrud amet. Amet minim mollit non deserunt  ullamco est sit aliqua dolor.
                        </p>
                        <button className={cn(
                            "px-8 mt-[20px] py-3.5 bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                            font2.className
                        )} onClick={onClick}>
                            Get started
                        </button>
                    </div>
                    <div className="flex flex-col w-[670px]  h-[245px] space-y-[22px] justify-start items-end">
                        <div className="bg-white border-[0.2px] border-gray-200 shadow-md w-[620px] h-[110px] rounded-xl">

                        </div>
                        <div className="bg-white border-[0.2px] border-gray-200 shadow-md w-[620px] h-[110px] rounded-xl">

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-50 h-[1290px] mt-[190px] flex flex-col items-center">
                <div className="w-full h-[300px] flex items-center justify-center flex-col mt-[75px]">
                    <div className={cn(
                    "w-[130px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[20px]",
                    font.className
                    )}>
                        Features
                    </div>
                    <div className={cn(
                            "text-[55px] text-center w-[900px]",
                            font2.className
                        )}>
                        Features that you might be interested in
                    </div>
                </div>
                <div className=" w-full h-[700px] space-y-[45px]">
                    <div className="h-[350px] w-full flex items-center justify-center flex-row space-x-[50px]">
                        <div className="h-[350px] bg-white border-[0.2px] shadow-md w-[850px] rounded-md">

                        </div>
                        <div className="h-[350px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">

                        </div>
                    </div>
                    <div className="h-[350px] w-full flex flex-row items-center justify-center space-x-[50px]">
                        <div className="h-[350px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">

                        </div>
                        <div className="h-[350px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">

                        </div>
                        <div className="h-[350px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">

                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full h-[700px] mt-[180px] flex flex-row">
                <div className="w-1/2 h-[700px] flex items-end justify-end">
                    <div className="flex flex-col items-start justify-center w-[635px]  h-[700px]">
                        <div className={cn(
                        "w-[130px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[20px]",
                        font.className
                        )}>
                            Benefits
                        </div>
                        <p className={cn(
                            "text-[40px]",
                            font.className
                        )}>
                            A crypto wallet from the future
                        </p>
                        <p className={cn(
                            "w-[550px] mt-[10px] text-gray-600 text-[16px]",
                            font2.className
                        )}>
                            Dictum fusce ut placerat orci nulla pellentesque nulla facilisi nullam vehicula ipsum eu volutpat odio facilisis.
                        </p>
                        <p className={cn(
                            "w-[520px] mt-[20px] text-gray-600 text-[14px] flex flex-row",
                            font2.className
                        )}>
                            <FaCheckSquare className="text-[20px] mr-[8px]"/> Easily connect all your tools and platforms for seamless data flow.
                        </p>
                        <p className={cn(
                            "w-[520px] mt-[10px] text-gray-600 text-[14px] flex flex-row",
                            font2.className
                        )}>
                            <FaCheckSquare className="text-[20px] mr-[8px]"/> Access up-to-date crypto related news.
                        </p>
                        <p className={cn(
                            "w-[520px] mt-[10px] text-gray-600 text-[14px] flex flex-row",
                            font2.className
                        )}>
                            <FaCheckSquare className="text-[20px] mr-[8px]"/> Streamline and interactive crypto currency historical data.
                        </p>
                        <button className={cn(
                            "w-[140px] mt-[30px] py-[15px] bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                            font2.className
                        )} onClick={onClick}>
                                Register now
                        </button>
                    </div>
                </div>
                <div className="w-1/2 h-[700px] relative flex items-center justify-center">
                    <div className="bg-white border-[0.2px] w-[500px] h-[620px] shadow-md rounded-md border-gray-200">

                    </div>
                    <div className="absolute w-[300px] h-[210px] bg-white rounded-md shadow-md border-gray-200 border-[0.2px] top-[360px] right-[410px]">

                    </div>
                </div>
            </div>
            <div className="w-[full] h-[750px] flex flex-row mt-[130px]">
                <div className="w-1/2 h-[700px] relative flex items-center justify-center">
                    <div className="bg-white border-[0.2px] w-[500px] h-[620px] shadow-md rounded-md border-gray-200">

                    </div>
                    <div className="absolute w-[260px] h-[240px] bg-white rounded-md shadow-md border-gray-200 border-[0.2px] top-[340px] left-[440px]">
                        
                    </div>
                </div>
                <div className="w-1/2 h-[700px]">
                    <div className="flex flex-col items-start justify-center w-[635px] h-[700px] mt-[25px] ml-[40px]">
                        <div className={cn(
                        "w-[130px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[20px]",
                        font.className
                        )}>
                            Benefits
                        </div>
                        <p className={cn(
                            "text-[40px] w-[370px]",
                            font.className
                        )}>
                            Bulletproof security by design
                        </p>
                        <p className={cn(
                            "w-[580px] mt-[10px] text-gray-600 text-[16px]",
                            font2.className
                        )}>
                            Dictum fusce ut placerat orci nulla pellentesque nulla facilisi nullam vehicula ipsum eu volutpat odio facilisis.
                        </p>
                        <div className="w-full h-[300px]  mt-[25px] flex flex-col space-y-[30px]">
                            <div className=" w-full h-[110px] flex flex-row space-x-[40px]">
                                <div className="bg-white w-[250px] h-[110px] border-[0.2px] shadow-md rounded-md">

                                </div>
                                <div className="bg-white w-[250px] h-[110px] border-[0.2px] shadow-md rounded-md">

                                </div>
                            </div>
                            <div className=" w-full h-[110px] flex flex-row space-x-[40px]">
                                <div className="bg-white w-[250px] h-[110px] border-[0.2px] shadow-md rounded-md">

                                </div>
                                <div className="bg-white w-[250px] h-[110px] border-[0.2px] shadow-md rounded-md">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[900px] mt-[190px] flex  justify-center">
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
