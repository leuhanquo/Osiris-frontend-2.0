"use client"
import { useWindowSize } from "@uidotdev/usehooks"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { FaCheckSquare, FaPlus } from "react-icons/fa"
import { FaCircleCheck } from "react-icons/fa6";

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


export const StockPageComponent =()=>{
    const router = useRouter()
    const onClick =()=>{
        router.push("/auth/register")
    }

    const onClick2 =()=>{
        router.push("/demo")
    }
    
    return(
        <main className="w-full h-[6150px]">
            <div className=" w-full h-[680px] flex flex-row">
                <div className="h-[670px] justify-center items-center flex flex-col w-1/2">
                    <div className="h-[600px] w-[500px] flex flex-col justify-center">
                        <div className={cn(
                        "w-[180px] h-[55px] text-green-500 text-[25px] flex items-center justify-start rounded-md",
                        font2.className
                        )}>
                            Stock market
                        </div>
                        <p className={cn(
                            "text-[65px] w-[450px]",
                            font.className
                        )}>
                            The most trusted digital finance platform
                        </p>
                        <p className={cn(
                            " mt-[10px] text-gray-600 text-[16px] w-[580px]",
                            font2.className
                        )}>
                            Connecting thousands of companies to millions of customers for faster, safer, and more seamless financial experiences.
                        </p>
                        <button className={cn(
                            "w-[160px] mt-[25px] py-[15px] bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                            font2.className
                        )} onClick={onClick}>
                                Register now
                        </button>
                    </div>
                </div>
                <div className="w-1/2 h-[670px] flex relative items-center justify-center">
                    <div className="bg-white w-[520px] h-[610px] rounded-xl border-[0.2px] shadow-md border-gray-300">

                    </div>
                    <div className="bg-white rounded-md w-[230px] h-[250px] border-[0.2px] border-gray-300 shadow-md absolute top-[330px] left-[50px]">

                    </div>
                </div>
            </div>
            <div className="bg-gray-600 w-full h-[130px] mt-[50px] flex flex-row">
                <div className={cn(
                    "h-[130px] w-[400px] items-center justify-end flex text-2xl text-white",
                    font.className
                )}>
                    <p className="ml-[100px] w-[300px] ">
                        Available exchanges
                    </p>
                </div>
                <div className="h-[130px] w-[1100px] bg-gray-600 flex items-center justify-center">
                    <div
                        x-data="{}"
                        x-init="$nextTick(() => {
                            let ul = $refs.logos;
                            ul.insertAdjacentHTML('afterend', ul.outerHTML);
                            ul.nextSibling.setAttribute('aria-hidden', 'true');
                        })"
                        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                    >
                        <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                            <li>
                                <img src="/images/facebook.svg" alt="Facebook" />
                            </li>
                            <li>
                                <img src="/images/disney.svg" alt="Disney" />
                            </li>
                            <li>
                                <img src="/images/airbnb.svg" alt="Airbnb" />
                            </li>
                            <li>
                                <img src="/images/apple.svg" alt="Apple" />
                            </li>
                            <li>
                                <img src="/images/spark.svg" alt="Spark" />
                            </li>
                            <li>
                                <img src="/images/samsung.svg" alt="Samsung" />
                            </li>
                            <li>
                                <img src="/images/quora.svg" alt="Quora" />
                            </li>
                            <li>
                                <img src="/images/sass.svg" alt="Sass" />
                            </li>
                        </ul>
                        <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                            <li>
                                <img src="/images/facebook.svg" alt="Facebook" />
                            </li>
                            <li>
                                <img src="/images/disney.svg" alt="Disney" />
                            </li>
                            <li>
                                <img src="/images/airbnb.svg" alt="Airbnb" />
                            </li>
                            <li>
                                <img src="/images/apple.svg" alt="Apple" />
                            </li>
                            <li>
                                <img src="/images/spark.svg" alt="Spark" />
                            </li>
                            <li>
                                <img src="/images/samsung.svg" alt="Samsung" />
                            </li>
                            <li>
                                <img src="/images/quora.svg" alt="Quora" />
                            </li>
                            <li>
                                <img src="/images/sass.svg" alt="Sass" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-50 h-[2400px] flex flex-col">
                <div className="flex items-center justify-center flex-col w-full h-[350px] mt-[120px]">
                    <div className={cn(
                    "w-[140px] h-[60px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                    font.className
                    )}>
                        Features
                    </div>
                    <p className={cn(
                        "text-[52px] w-[1200px] text-center",
                        font.className
                    )}>
                        Enhance business success with comprehensive financial planning assistance
                    </p>
                    <p className={cn(
                        "w-[1000px] mt-[20px] text-gray-600 text-[19px] text-center",
                        font2.className
                    )}>
                        Achieve lasting business success with our comprehensive financial  planning assistance, tailored to optimize growth, manage risk, and  maximize profitability for sustained excellence.
                    </p>
                </div>
                <div className="w-full h-[1670px] mt-[40px] flex-row flex justify-center space-x-[70px]">
                    <div className="w-[520px] h-[1670px] flex-col flex items-center space-y-[30px]">
                        <div className="w-[545px] h-[400px] bg-white rounded-md border-[0.2px] border-gray-300 shadow-md">

                        </div>
                        <div className="w-[545px] h-[800px] bg-white rounded-md border-[0.2px] border-gray-300 shadow-md">

                        </div>
                        <div className="w-[545px] h-[400px] bg-white rounded-md border-[0.2px] border-gray-300 shadow-md">

                        </div>
                    </div>
                    <div className="w-[520px] h-[1670px] flex-col flex items-center space-y-[30px]">
                        <div className="w-[545px] h-[600px] bg-white rounded-md border-[0.2px] border-gray-300 shadow-md">

                        </div>
                        <div className="w-[545px] h-[400px] bg-white rounded-md border-[0.2px] border-gray-300 shadow-md">

                        </div>
                        <div className="w-[545px] h-[600px] bg-white rounded-md border-[0.2px] border-gray-300 shadow-md">

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[170px] flex flex-row justify-center space-x-[330px] mt-[150px]">
                <div className="h-[170px] w-[400px] flex flex-col">
                    <p className={cn(
                        "text-[40px] w-[450px]",
                        font2.className
                    )}>
                        Explore Our Platform With 1M Users
                    </p>
                    <p className={cn(
                        "text-[18px] w-[380px] mt-[10px]",
                        font3.className
                    )}>
                        Discover and explore our platform, trusted by over 1 million users.
                    </p>
                </div>
                <div className={cn(
                    "w-[500px] h-[170px] flex flex-row space-x-[60px]",
                    font.className
                )}>
                    <p className="flex flex-col text-[40px]">
                        <span className="flex flex-row">50,000<FaPlus className="w-[30px] h-[30px] mt-[15px] text-green-600"/></span>
                        <span className="text-[15px] text-gray-500">Stocks data</span>
                    </p>
                    <p className="flex flex-col text-[40px]">
                        <span className="flex flex-row">1,250 <FaPlus className="w-[30px] h-[30px] mt-[15px] text-green-600"/></span>
                        <span className="text-[15px] text-gray-500">Crypto data</span>
                    </p>
                    <p className="flex flex-col text-[40px]">
                        <span className="flex flex-row">500 <FaPlus className="w-[30px] h-[30px] mt-[15px] text-green-600"/></span>
                        <span className="text-[15px] text-gray-500">Fundamentals</span>
                    </p>
                </div>
            </div>
            <div className=" w-full h-[700px] mt-[120px] flex flex-row">
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
                            What awaits you?
                        </p>
                        <p className={cn(
                            "w-[500px] mt-[10px] text-gray-600 text-[16px]",
                            font2.className
                        )}>
                            Streamline your data management and boost your marketing strategy with Osiris.
                        </p>
                        <p className={cn(
                            "w-[520px] mt-[20px] text-gray-600 text-[14px] flex flex-row",
                            font2.className
                        )}>
                            <FaCheckSquare className="text-[20px] mr-[8px]"/> Your financial roadmap designed.
                        </p>
                        <p className={cn(
                            "w-[520px] mt-[10px] text-gray-600 text-[14px] flex flex-row",
                            font2.className
                        )}>
                            <FaCheckSquare className="text-[20px] mr-[8px]"/> Customized financial strategy plans.
                        </p>
                        <p className={cn(
                            "w-[520px] mt-[10px] text-gray-600 text-[14px] flex flex-row",
                            font2.className
                        )}>
                            <FaCheckSquare className="text-[20px] mr-[8px]"/> Tailored wealth management solutions.
                        </p>
                        <p className={cn(
                            "w-[520px] mt-[10px] text-gray-600 text-[14px] flex flex-row",
                            font2.className
                        )}>
                            <FaCheckSquare className="text-[20px] mr-[8px]"/> Strategic financial planning solutions.
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
                    <div className="bg-gray-600 border-[0.2px] w-[500px] h-[590px] shadow-md rounded-md border-gray-200">

                    </div>
                    <div className="absolute w-[500px] h-[590px] bg-white rounded-md shadow-md border-gray-200 border-[0.2px] top-[80px] right-[180px]">

                    </div>
                </div>
            </div>
            <div className=" w-full h-[700px] mt-[160px] flex flex-row">
                <div className="w-1/2 h-[700px] relative flex items-center justify-center">
                    <div className="bg-gray-600 border-[0.2px] w-[540px] h-[590px] shadow-md rounded-md border-gray-200">

                    </div>
                    <div className="absolute w-[540px] h-[590px] bg-white rounded-md shadow-md border-gray-200 border-[0.2px] top-[80px] left-[160px]">

                    </div>
                </div>
                <div className="w-1/2 h-[700px] flex items-end ml-[50px]">
                    <div className="flex flex-col items-start justify-center w-[635px] h-[700px]">
                        <p className={cn(
                            "text-[48px]",
                            font2.className
                        )}>
                            Why <span className="text-green-600">choose</span> us
                        </p>
                        <p className={cn(
                            "w-[520px] mt-[20px] text-gray-600 text-[24px] flex flex-row",
                            font2.className
                        )}>
                            <FaCircleCheck className="text-[28px] mr-[8px] mt-[3px]"/> Your financial roadmap designed.
                        </p>
                        <p className={cn(
                            "text-[14px] ml-[38px] text-gray-700 w-[550px] mt-[5px]",
                            font2.className
                        )}>
                            Navigate complex financial landscapes with confidence using our expert  guidance tailored to your unique optimization goals and challenges.
                        </p>
                        <p className={cn(
                            "w-[520px] mt-[20px] text-gray-600 text-[24px] flex flex-row",
                            font2.className
                        )}>
                            <FaCircleCheck className="text-[28px] mr-[8px] mt-[3px]"/> Customized financial strategy plans.
                        </p>
                        <p className={cn(
                            "text-[14px] ml-[38px] text-gray-700 w-[550px] mt-[5px]",
                            font2.className
                        )}>
                            Our track record of ongoing, shown achievement via strategic planning  and rigorous execution will help you achieve your financial goals.
                        </p>
                        <p className={cn(
                            "w-[520px] mt-[20px] text-gray-600 text-[24px] flex flex-row",
                            font2.className
                        )}>
                            <FaCircleCheck className="text-[28px] mr-[8px] mt-[3px]"/> Tailored wealth management solutions.
                        </p>
                        <p className={cn(
                            "text-[14px] ml-[38px] text-gray-700 w-[550px] mt-[5px]",
                            font2.className
                        )}>
                            Trusted advisors committed to guiding your financial decisions with integrity, expertise, and personalized service.
                        </p>
                        <button className={cn(
                            "w-[140px] mt-[30px] py-[15px] bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                            font2.className
                        )} onClick={onClick2}>
                                View demo
                        </button>
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