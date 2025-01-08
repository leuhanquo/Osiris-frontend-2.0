"use client"
import { useWindowSize } from "@uidotdev/usehooks"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useState } from "react";


//icons
import { FaPlus } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";



const font = Inter({
    weight:["700"],
    subsets:["latin"]
});

const font2 = Inter({
    weight:["600"],
    subsets:["latin"]
})


export const MainPageContent =()=>{
    const router = useRouter();
    const size = useWindowSize();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const onClick =()=>{
        router.push("/auth/register")
    }

    const onClick2 =()=>{
        router.push("/blog")
    }

    if(size.width < 1200){
        return(
            <div>

            </div>
        )
    }

    const accordions = [
        {
          title: "How does Osiris’s unified dashboard work?",
          content:
            "Osiris's unified dashboard consolidates all your data from various sources into one easy-to-use interface. It offers real-time insights and simplifies workflows.",
        },
        {
          title: "What kind of reports can I create with Osiris?",
          content:
            "With Osiris, you can create custom financial, operational, and analytical reports tailored to your business needs.",
        },
        {
          title: "What kind of support does Osiris offer?",
          content:
            "Osiris offers 24/7 customer support, including live chat, email, and phone assistance. Comprehensive documentation and tutorials are also available.",
        },
        {
          title: "Is there a free trial available?",
          content:
            "Yes, Osiris offers a 14-day free trial with access to all features so you can explore the platform's capabilities.",
        },
    ];

    return(
        <div className="w-full h-[7500px]  mt-[90px]">
            <div className="w-full h-[800px]  flex items-center flex-col">
                <div className={cn(
                    "w-[150px] h-[80px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[20px]",
                    font.className
                )}>
                    Assets
                </div>
                <p className={cn(
                    "items-center text-[55px]",
                    font.className
                )}>
                    Streamline all your investment data
                </p>
                <p className={cn(
                    "w-[800px] text-center mt-[10px] text-gray-600 text-[14px]",
                    font2.className
                )}>
                    Harness the full potential of your portfolio with Osiris's cutting-edge  features designed to simplify and enhance your Investing strategy.
                </p>
                <div className="w-full h-[900px]">
                    <div className="w-full h-[120px] mt-[50px] flex flex-row items-center justify-center space-x-[110px]">
                        <div className="w-[350px] h-full bg-gray-500 rounded-md">

                        </div>
                        <div className="w-[350px] h-full bg-gray-500 rounded-md">

                        </div>
                        <div className="w-[350px] h-full bg-gray-500 rounded-md">

                        </div>
                    </div>
                    <div className="w-full h-[120px] mt-[30px] flex flex-row items-center justify-center space-x-[110px]">
                        <div className="w-[350px] h-full bg-gray-500 rounded-md">

                        </div>
                        <div className="w-[350px] h-full bg-gray-500 rounded-md">

                        </div>
                        <div className="w-[350px] h-full bg-gray-500 rounded-md">

                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[2100px] bg-gray-100 pt-[120px]">
                <div className="h-[800px] w-full flex flex-row items-center">
                    <div className="relative">
                        <div className="h-[550px] w-[500px] rounded-md bg-gray-400 xl:ml-[130px] md:ml-[70px]">
                            
                        </div>
                        <div className="absolute h-[150px] w-[280px] bg-gray-700 top-[440px] xl:left-[70px] rounded-md md:left-[50px]">
                            
                        </div>
                    </div>
                    <div className="w-[800px] h-[600px] ml-[50px] flex flex-col justify-center">
                        <div className={cn(
                        "w-[170px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[20px]",
                        font.className
                        )}>
                            Global trust
                        </div>
                        <p className={cn(
                            "text-[50px]",
                            font.className
                        )}>
                            Trusted by Investment Leaders
                        </p>
                        <p className={cn(
                            "w-[760px] mt-[10px] text-gray-600 text-[14px]",
                            font2.className
                        )}>
                            At Osiris, we’re committed to empowering investors, institutions, and  entrepreneurs with robust investment analysis solutions. Our platform is  trusted by top industry leaders who rely on us to streamline their portfolio  management and drive investment growth.
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
                                <span className="flex flex-row">1,250 <FaPlus className="w-[30px] h-[30px] mt-[15px] text-green-600"/></span>
                                <span className="text-[19px]">Crypto data</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[900px] flex flex-col">
                    <div className="flex items-center justify-center flex-col w-full h-[200px] mt-[130px] ">
                        <div className={cn(
                        "w-[170px] h-[50px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                        font.className
                        )}>
                            Benefits
                        </div>
                        <p className={cn(
                            "text-[50px]",
                            font.className
                        )}>
                            Why choose Osiris?
                        </p>
                    </div>
                    <div className="w-full  h-[900px] flex flex-row mt-[20px]">
                        <div className="flex flex-col justify-center ml-[130px] w-1/2 h-[600px] mt-[30px]">
                            <p className={cn(
                                "text-[40px]",
                                font.className
                            )}>
                                Simplify Investment Analysis Today
                            </p>
                            <p className={cn(
                                "w-[550px] mt-[10px] text-gray-600 text-[16px]",
                                font2.className
                            )}>
                                Streamline your data management and boost your marketing strategy with Osiris.
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
                                <FaCheckSquare className="text-[20px] mr-[8px]"/> Access up-to-date analytics to make informed decisions quickly.
                            </p>
                            <p className={cn(
                                "w-[520px] mt-[10px] text-gray-600 text-[14px] flex flex-row",
                                font2.className
                            )}>
                                <FaCheckSquare className="text-[20px] mr-[8px]"/> Tailor reports to fit your specific needs, ensuring you have the exact data you need.
                            </p>
                            <button className={cn(
                                "w-[120px] mt-[20px] py-[12px] bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                                font2.className
                            )} onClick={onClick}>
                                 Get started
                            </button>
                        </div>
                    <div className="w-[750px] h-[680px] flex items-center justify-center relative">
                        <div className="w-[520px] h-[600px] bg-gray-600 rounded-md">

                        </div>
                        <div className="flex absolute w-[300px] h-[150px] bg-gray-800 rounded-md top-0 right-2 mr-[40px]">

                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[800px] flex flex-col items-center mt-[220px]">
                <div className="items-center flex flex-col space-y-2">
                    <div className={cn(
                        "w-[170px] h-[50px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                        font.className
                        )}>
                            Features
                    </div>
                    <p className={cn(
                        "text-[45px] w-[900px] text-center",
                        font.className
                    )}>
                        Discover Our Essential Investment Analysis Features
                    </p>
                    <p className={cn(
                                "w-[700px] mt-[10px] text-gray-600 text-[14px] text-center",
                                font2.className
                            )}>
                                Osiris provides powerful tools to simplify investment management, offering  real-time insights and customizable reports for informed  decision-making.
                    </p>
                </div>
                <div className="w-full h-[500px] justify-center mt-[60px] flex flexrow space-x-8">
                    <div className="h-[450px] w-[350px] rounded-md bg-gray-600">

                    </div>
                    <div className="h-[450px] w-[370px] flex-col flex space-y-8">
                        <div className="h-[210px] w-[370px] bg-gray-600 rounded-md">

                        </div>
                        <div className="h-[210px] w-[370px] bg-gray-600 rounded-md">

                        </div>
                    </div>
                    <div className="h-[450px] w-[370px]  flex-col flex space-y-8">
                        <div className="h-[210px] w-[360px] bg-gray-600 rounded-md">

                        </div>
                        <div className="h-[210px] w-[360px] flex flex-row rounded-md space-x-[25px]">
                            <div className="h-[210px] w-[185px] bg-gray-600 rounded-md">

                            </div>
                            <div className="h-[210px] w-[185px] bg-gray-600 rounded-md">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[850px]  mt-[150px]">
                <div className="flex flex-col items-center">
                    <div className={cn(
                        "w-[170px] h-[50px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                        font.className
                        )}>
                            Pricing plans
                    </div>
                    <p className={cn(
                        "text-[45px] w-[900px] text-center",
                        font.className
                    )}>
                        Choose the Right Plan for You
                    </p>
                    <p className={cn(
                        "w-[600px] mt-[10px] text-gray-600 text-[14px] text-center",
                        font2.className
                    )}>
                        At Osiris, we offer flexible pricing plans to fit your business needs.  Whether you're a beginner or an established investor, our plans provide the tools and features you need to succeed.
                    </p>
                </div>
                <div className="w-full h-[600px] flex-row flex justify-center space-x-7 items-center mt-[40px]">
                    <div className="bg-white border-[1.5px] shadow-md w-[400px] h-[500px] rounded-xl">

                    </div>
                    <div className="bg-white border-[1.5px] border-green-300 shadow-md w-[400px] h-[550px] rounded-xl">

                    </div>
                    <div className="bg-white border-[1.5px]  shadow-md w-[400px] h-[500px] rounded-xl">

                    </div>
                </div>
            </div>
            <div className="w-full  h-[950px] mt-[230px]">
                <div className="flex flex-row justify-center space-x-[245px]">
                    <div className="flex flex-col items-start w-1/2 h-[250px]">
                        <div className={cn(
                            "w-[150px] h-[50px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                            font.className
                            )}>
                                Blog
                        </div>
                        <p className={cn(
                            "text-[45px] w-[800px]",
                            font.className
                        )}>
                            Stay Informed with Our Latest Insights
                        </p>
                        <p className={cn(
                            "w-[800px] mt-[10px] text-gray-600 text-[14px]",
                            font2.className
                        )}>
                            Explore our latest articles and resources to stay ahead in investment analysis and marketing strategies.
                        </p>
                    </div>
                    <div className="flex items-end mb-[25px]">
                        <button className={cn(
                            "px-6 py-3.5 bg-gray-700 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                            font2.className
                        )} onClick={onClick2}>
                            Read more
                        </button>
                    </div>
                </div>
                <div className="w-full h-[500px] flex flex-row justify-center space-x-14 mt-[30px]">
                    <div className="w-[350px] h-[450px] bg-gray-700 rounded-md">
                        
                    </div>
                    <div className="w-[350px] h-[450px] bg-gray-700 rounded-md">
                        
                    </div>
                    <div className="w-[350px] h-[450px] bg-gray-700 rounded-md">
                        
                    </div>
                </div>
            </div>
            <div className="w-full h-[500px] flex flex-row justify-center space-x-8">
                <div className="mt-[45px]">
                    <div className={cn(
                    "w-[110px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[20px]",
                    font.className
                    )}>
                        FAQ
                    </div>
                    <p className={cn(
                        "text-[50px] w-[500px]",
                        font.className
                    )}>
                        Frequently Asked Questions
                    </p>
                    <p className={cn(
                        "w-[620px] mt-[10px] text-gray-600 text-[14px]",
                        font2.className
                    )}>
                        Find answers to your questions about Osiris and how our platform can help streamline your investment analysis.
                    </p>
                    <button className={cn(
                        "w-[120px] mt-[30px] py-[12px] bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                        font2.className
                    )} onClick={onClick}>
                            Get started
                    </button>
                </div>
                <div>
                    <div className="max-w-[650px] mx-auto space-y-5 mt-10">
                        {accordions.map((accordion, index) => (
                            <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow border transition-all duration-700 mb-4"
                            >
                            {/* Accordion Header */}
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h2 className="text-lg font-semibold truncate">{accordion.title}</h2>
                                <div
                                className={`transform transition-transform duration-500 ${
                                    activeIndex === index ? "rotate-45" : "rotate-0"
                                }`}
                                >
                                <FiPlus className="text-2xl text-gray-700" />
                                </div>
                            </div>

                            {/* Accordion Content */}
                            <div
                                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                                activeIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-gray-600">{accordion.content}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-[900px] mt-[200px] flex  justify-center">
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
        </div>
    )
}