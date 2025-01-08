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


export const InvestingGuideComponent =()=>{
    const router = useRouter()
    const onClick =()=>{
        router.push("/auth/register")
    }

    return(
        <main className="w-full flex flex-col h-[5190px]">
            <div className=" w-full h-[1000px] flex flex-col">
                <div className="flex items-center justify-center flex-col w-full h-[350px] mt-[30px]">
                    <div className={cn(
                    "w-[140px] h-[60px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                    font.className
                    )}>
                        Education
                    </div>
                    <p className={cn(
                        "text-[60px] w-[1000px] text-center",
                        font.className
                    )}>
                        We provide powerful & insightful investment knowledge
                    </p>
                    <p className={cn(
                        "w-[900px] mt-[10px] text-gray-600 text-[14px] text-center",
                        font2.className
                    )}>
                        Sinza Bank has been a leader in the online retail banking space since  its founding in 2009 thanks to its responsive, round-the-clock customer  service, no minimum deposits or monthly maintenance fees, and  interactive AI digital banking assistant, Sinza Assist.
                    </p>
                </div>
                <div className="w-full h-[510px] mt-[35px] flex flex-row justify-center space-x-[30px]">
                    <div className="h-[500px] w-[230px] bg-white rounded-md border-[0.2px] shadow-md border-gray-300">

                    </div>
                    <div className="w-[470px] h-[500px]  flex flex-col space-y-[30px]">
                        <div className="w-[470px] bg-white rounded-md border-[0.2px] shadow-md h-[300px] border-gray-300">

                        </div>
                        <div className="bg-white rounded-md w-[470px] h-[170px] shadow-md border-[0.2px] border-gray-300">

                        </div>
                    </div>
                    <div className="w-[470px] h-[500px]  flex flex-col space-y-[30px]">
                        <div className="bg-white rounded-md w-[470px] h-[170px] shadow-md border-[0.2px] border-gray-300">

                        </div>
                        <div className="w-[470px] bg-white rounded-md border-[0.2px] shadow-md h-[300px] border-gray-300">

                        </div>   
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 w-full h-[950px] mt-[130px] flex flex-row items-center justify-center">
                <div className="bg-white rounded-xl border-gray-300 border-[0.2px] shadow-md w-[500px] h-[600px]">

                </div>
                <div className="h-[430px]  ml-[60px] w-[640px]">
                    <div className={cn(
                    "w-[150px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                    font2.className
                    )}>
                        Knowledge
                    </div>
                    <p className={cn(
                        "text-[45px] w-[650px]",
                        font.className
                    )}>
                        Established with the clear vision of <span className="text-green-600">investing</span>
                    </p>
                    <p className={cn(
                        "w-[620px] mt-[10px] text-gray-600 text-[16px]",
                        font2.className
                    )}>
                        Our mission is to eliminate the need for multiple systems, we offering a unified solution that simplifies business management. 
                    </p>
                    <p className={cn(
                        "w-[620px] mt-[20px] text-gray-600 text-[16px] ",
                        font2.className
                    )}>
                        Whether you're a startup, freelancer, or enterprise, Visvo is built to grow  with your business, ensuring you always have the tools you need to  succeed.
                    </p>
                    <button className={cn(
                        "w-[150px] mt-[30px] py-[16px] bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                        font2.className
                    )} onClick={onClick}>
                            Get started
                    </button>
                </div>
            </div>
            <div className=" w-full h-[950px] mt-[190px]">
                <div className="w-full h-[160px] flex justify-center">
                    <p className={cn(
                            "text-[53px] w-[1000px] text-center",
                            font.className
                        )}>
                            Our aim is to conduct <span className="text-green-600">investment</span> education in a new way
                    </p>
                </div>
                <div className="w-full h-[750px] mt-[30px] flex flex-col items-center space-y-[30px]">
                    <div className="h-[250px] w-full flex items-center justify-center flex-row space-x-[30px]">
                        <div className="h-[250px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">

                        </div>
                        <div className="h-[250px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">

                        </div>
                        <div className="h-[250px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">

                        </div>
                    </div>
                    <div className="h-[250px] w-full flex items-center justify-center flex-row space-x-[30px]">
                        <div className="h-[250px] bg-white border-[0.2px] shadow-md w-[615px] rounded-md">

                        </div>
                        <div className="h-[250px] bg-white border-[0.2px] shadow-md w-[615px] rounded-md">

                        </div>
                    </div>
                    <div className="h-[170px] bg-white border-[0.2px] shadow-md w-[1260px] rounded-md">

                    </div>
                </div>
            </div>
            <div className=" w-full h-[1220px] mt-[190px]">
                <div className="flex items-center flex-col w-full h-[170px]">
                    <div className={cn(
                    "w-[140px] h-[60px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                    font.className
                    )}>
                        Solutions
                    </div>
                    <p className={cn(
                        "text-[55px] w-[1000px] text-center",
                        font.className
                    )}>
                        Fast. Safe. Simple.
                    </p>
                </div>
                <div className="flex flex-col w-full h-[1050px] mt-[20px] space-y-[30px]">
                    <div className="w-full h-[500px]  flex flex-row justify-center space-x-[50px]">
                        <div className="w-[460px] h-[500px] flex flex-col items-start">
                            <div className="h-[350px] w-[400px] rounded-md bg-white border-[0.2px] border-gray-300 shadow-md">

                            </div>
                            <p className={cn(
                                "text-[22px] mt-[10px]",
                                font2.className
                            )}>
                                Onboarding
                            </p>
                            <p className={cn(
                                "text-[16px] text-gray-600 w-[450px]",
                                font3.className
                            )}>
                                Users enjoy 49% faster transections processing times compared to other traditional banks.
                            </p>
                        </div>
                        <div className="w-[450px] h-[500px] flex flex-col items-start">
                            <div className="h-[350px] w-[400px] rounded-md bg-white border-[0.2px] border-gray-300 shadow-md">

                            </div>
                            <p className={cn(
                                "text-[22px] mt-[10px]",
                                font2.className
                            )}>
                                Payments
                            </p>
                            <p className={cn(
                                "text-[16px] text-gray-600 w-[450px]",
                                font3.className
                            )}>
                                Users enjoy 49% faster transections processing times compared to other traditional banks.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[500px]  flex flex-row justify-center space-x-[50px]">
                        <div className="w-[450px] h-[500px]  flex flex-col items-start">
                            <div className="h-[350px] w-[400px] rounded-md bg-white border-[0.2px] border-gray-300 shadow-md">

                            </div>
                            <p className={cn(
                                "text-[22px] mt-[10px]",
                                font2.className
                            )}>
                                Fraud prevention
                            </p>
                            <p className={cn(
                                "text-[16px] text-gray-600 w-[450px]",
                                font3.className
                            )}>
                                Users enjoy 49% faster transections processing times compared to other traditional banks.
                            </p>
                        </div>
                        <div className="w-[450px] h-[500px]  flex flex-col items-start">
                            <div className="h-[350px] w-[400px] rounded-md bg-white border-[0.2px] border-gray-300 shadow-md">

                            </div>
                            <p className={cn(
                                "text-[22px] mt-[10px]",
                                font2.className
                            )}>
                                Credit underwritting
                            </p>
                            <p className={cn(
                                "text-[16px] text-gray-600 w-[450px]",
                                font3.className
                            )}>
                                Users enjoy 49% faster transections processing times compared to other traditional banks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[400px] mt-[90px] flex justify-center">
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
        </main>
    )
}