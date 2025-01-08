"use client"
import { useWindowSize } from "@uidotdev/usehooks"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { FaCheckSquare, FaPlus } from "react-icons/fa"

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


export const YourPortfolioPageComponent =()=>{
    const router = useRouter()
    const onClick =()=>{
        router.push("/auth/register")
    }

    const onClick2 =()=>{
        router.push("/demo")
    }

    return(
        <main className="50 w-full h-[5600px] flex flex-col items-center">
            <div className="bg-gray-800 w-[1450px] h-[1400px] rounded-[70px] flex flex-row items-center mt-[40px] shadow-xl">
                <div className=" w-full h-[680px] flex flex-row">
                    <div className="h-[670px] justify-center items-center flex flex-col w-1/2">
                        <div className="h-[600px] w-[500px] flex flex-col justify-center">
                            <div className={cn(
                            "w-[180px] h-[55px] text-green-500 text-[25px] flex items-center justify-start rounded-md",
                            font2.className
                            )}>
                                Your portfolio
                            </div>
                            <p className={cn(
                                "text-[65px] text-white w-[700px]",
                                font.className
                            )}>
                                Smart Finance Solutions for Your Business
                            </p>
                            <p className={cn(
                                " mt-[10px] text-white text-[16px] w-[400px]",
                                font2.className
                            )}>
                                Connecting thousands of companies to millions of customers for faster, safer, and more seamless financial experiences.
                            </p>
                            <div className="flex flex-row space-x-[20px] mt-[10px]">
                                <button className={cn(
                                    "w-[160px] mt-[25px] py-[15px] bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                                    font2.className
                                )} onClick={onClick}>
                                        Register now
                                </button>
                                <button className={cn(
                                "w-[160px] mt-[25px] py-[15px] bg-gray-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                                font2.className
                                )} onClick={onClick2}>
                                    View demo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-[670px] flex relative items-center justify-center">
                        <div className="bg-white w-[490px] h-[610px] rounded-2xl border-[0.2px] shadow-md border-gray-300">
    
                        </div>
                        <div className="bg-white rounded-2xl w-[350px] h-[200px] border-[0.2px] border-gray-300 shadow-md absolute top-[490px] left-[10px]">
    
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 w-full h-[130px] mt-[120px] flex flex-row">
                <div className={cn(
                    "h-[130px] w-[400px] items-center justify-end flex text-2xl text-white",
                    font.className
                )}>
                    <p className="ml-[100px] w-[300px] ">
                        Available exchanges
                    </p>
                </div>
                <div className="h-[130px] w-[1100px] bg-gray-800 flex items-center justify-center">
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
            <div className="bg-gray-50 w-full flex flex-col h-[2350px]">
                <div className="flex items-center justify-center flex-col w-full h-[290px] mt-[130px]">
                    <p className={cn(
                        "text-[55px] w-[830px] text-center",
                        font.className
                    )}>
                        A Journey That  Started With a Belief to Invest Differently
                    </p>
                    <p className={cn(
                        "w-[950px] mt-[10px] text-gray-600 text-[16px] text-center",
                        font2.className
                    )}>
                        Sinza Bank has been a leader in the online retail banking space since  its founding in 2009 thanks to its responsive, round-the-clock customer  service, no minimum deposits or monthly maintenance fees, and  interactive AI digital banking assistant, Sinza Assist.
                    </p>
                </div>
                <div className="w-full h-[650px] mt-[20px] flex flex-row space-x-[30px]">
                    <div className="flex flex-col items-end h-[900px] w-1/2 space-y-[30px]">
                        <div className="bg-white rounded-xl border-[0.2px] border-gray-300 shadow-md h-[300px] w-[600px]">

                        </div>
                        <div className="bg-white rounded-xl border-[0.2px] border-gray-300 shadow-md h-[300px] w-[660px]">

                        </div>
                    </div>
                        <div className="flex flex-col items-start h-[900px] w-1/2 space-y-[30px]">
                            <div className="bg-white rounded-xl border-[0.2px] border-gray-300 shadow-md h-[330px] w-[600px]">

                            </div>
                        <div className="flex flex-row h-[170px] w-[660px] space-x-[30px]">
                            <div className="bg-white rounded-xl border-[0.2px] border-gray-300 shadow-md h-[270px] w-[250px]">
                                    
                            </div>
                            <div className="bg-white rounded-xl border-[0.2px] border-gray-300 shadow-md h-[270px] w-[380px]">
                                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col w-full h-[160px] mt-[200px]">
                    <p className={cn(
                        "text-[52px] w-[900px] text-center",
                        font.className
                    )}>
                        Test your <span className="text-green-600">investment</span> strategies with our portfolio builder
                    </p>
                </div>
                <div className=" w-full h-[700px] mt-[70px] flex flex-row">
                    <div className="w-1/2 h-[700px] flex items-end justify-end">
                        <div className="flex flex-col items-start justify-center w-[650px] h-[700px]">
                            <div className={cn(
                            "w-[130px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[20px]",
                            font.className
                            )}>
                                Portfolio
                            </div>
                            <p className={cn(
                                "text-[50px] w-[550px]",
                                font.className
                            )}>
                                Building your portfolio in just a second
                            </p>
                            <p className={cn(
                                "w-[440px] mt-[10px] text-gray-600 text-[18px]",
                                font2.className
                            )}>
                                Achieve smarter investing with our intuitive portfolio builder
                            </p>
                            <p className={cn(
                                "w-[520px] mt-[20px] text-gray-600 text-[16px] flex flex-row",
                                font2.className
                            )}>
                                <FaCheckSquare className="text-[20px] mr-[8px]"/> Your financial roadmap designed.
                            </p>
                            <p className={cn(
                                "w-[520px] mt-[10px] text-gray-600 text-[16px] flex flex-row",
                                font2.className
                            )}>
                                <FaCheckSquare className="text-[20px] mr-[8px]"/> Customized financial strategy plans.
                            </p>
                            <p className={cn(
                                "w-[520px] mt-[10px] text-gray-600 text-[16px] flex flex-row",
                                font2.className
                            )}>
                                <FaCheckSquare className="text-[20px] mr-[8px]"/> Tailored wealth management solutions.
                            </p>
                            <p className={cn(
                                "w-[520px] mt-[10px] text-gray-600 text-[16px] flex flex-row",
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
                    <div className="w-1/2 h-[700px] flex items-center justify-center">
                        <div className="bg-gray-600 border-[0.2px] w-[700px] h-[590px] mr-[90px] shadow-md rounded-md border-gray-200">
    
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[350px] mt-[150px] flex flex-row justify-center items-center space-x-[80px]">
                <div className="bg-white w-[550px] h-[330px] rounded-xl border-[0.2px] shadow-md border-gray-300">

                </div>
                <div className="h-[350px] flex flex-col  justify-center w-[600px]">
                    <div className={cn(
                    "w-[130px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                    font.className
                    )}>
                        Try now
                    </div>
                    <p className={cn(
                        "text-[45px] w-[550px]",
                        font.className
                    )}>
                        Try the demo for free
                    </p>
                    <p className={cn(
                        "w-[600px] mt-[10px] text-gray-600 text-[14px]",
                        font2.className
                    )}>
                        At Osiris, we’re committed to empowering investors, institutions, and  entrepreneurs with robust investment analysis solutions. Our platform is  trusted by top industry leaders who rely on us to streamline their portfolio  management and drive investment growth.
                    </p>
                </div>
            </div>
            <div className="w-full h-[350px] mt-[150px] flex flex-row justify-center items-center">
                <div className="h-[350px] flex flex-col  justify-center w-[660px]">
                    <div className={cn(
                    "w-[130px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                    font.className
                    )}>
                        Try now
                    </div>
                    <p className={cn(
                        "text-[45px] w-[550px]",
                        font.className
                    )}>
                        Try the demo for free
                    </p>
                    <p className={cn(
                        "w-[600px] mt-[10px] text-gray-600 text-[14px]",
                        font2.className
                    )}>
                        At Osiris, we’re committed to empowering investors, institutions, and  entrepreneurs with robust investment analysis solutions. Our platform is  trusted by top industry leaders who rely on us to streamline their portfolio  management and drive investment growth.
                    </p>
                </div>
                <div className="bg-white w-[550px] h-[330px] rounded-xl border-[0.2px] shadow-md border-gray-300">

                </div>
            </div>
            <div className="w-full h-[350px] mt-[150px] flex flex-row justify-center items-center space-x-[80px]">
                <div className="bg-white w-[550px] h-[330px] rounded-xl border-[0.2px] shadow-md border-gray-300">

                </div>
                <div className="h-[350px] flex flex-col  justify-center w-[600px]">
                    <div className={cn(
                    "w-[130px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                    font.className
                    )}>
                        Try now
                    </div>
                    <p className={cn(
                        "text-[45px] w-[550px]",
                        font.className
                    )}>
                        Try the demo for free
                    </p>
                    <p className={cn(
                        "w-[600px] mt-[10px] text-gray-600 text-[14px]",
                        font2.className
                    )}>
                        At Osiris, we’re committed to empowering investors, institutions, and  entrepreneurs with robust investment analysis solutions. Our platform is  trusted by top industry leaders who rely on us to streamline their portfolio  management and drive investment growth.
                    </p>
                </div>
            </div>
            <div className="w-full h-[900px] mt-[180px] flex  justify-center">
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