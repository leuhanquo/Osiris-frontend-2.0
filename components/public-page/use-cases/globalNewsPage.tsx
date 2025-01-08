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

export const GlobalNewsPageComponent =()=>{
    const router = useRouter()
    const onClick =()=>{
        router.push("/auth/register")
    }


    return(
        <main className="w-full  h-[3530px]">
            <div className=" w-full h-[630px] flex flex-row  items-center">
                <div className="h-[430px] ml-[60px] w-[640px]">
                    <div className={cn(
                    "w-[130px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[20px]",
                    font2.className
                    )}>
                        News
                    </div>
                    <p className={cn(
                        "text-[45px] w-[650px]",
                        font.className
                    )}>
                        Stay informed with real-time global news, impacting markets worldwide.
                    </p>
                    <p className={cn(
                        "w-[620px] mt-[10px] text-gray-600 text-[14px]",
                        font2.className
                    )}>
                        Lorem ipsum dolor sit amet consectetur. Platea et felis lacus sapien eget et enim. Velit aliquam morbi.
                    </p>
                    <button className={cn(
                        "w-[160px] mt-[30px] py-[12px] bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                        font2.className
                    )} onClick={onClick}>
                            Register now
                    </button>
                </div>
                <div className="w-full h-[500px] flex justify-end">
                    <div className="bg-white w-[800px] h-[500px] rounded-xl border-[0.2px] shadow-md border-gray-300">

                    </div>
                </div>
            </div>
            <div className="bg-gray-600 w-full h-[130px] mt-[30px] flex flex-row">
                <div className={cn(
                    "h-[130px] w-[400px] items-center justify-end flex text-2xl text-white",
                    font.className
                )}>
                    <p className="ml-[100px] w-[300px] ">
                        Global insight
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
            <div className="bg-gray-100 w-full h-[1930px] flex flex-col">
                <div className=" w-full h-[600px] mt-[150px] flex flex-row">
                    <div className="w-[700px] h-[600px]  relative flex flex-row space-x-[50px] justify-center">
                        <div className="bg-white w-[230px] h-[470px] rounded-xl border-[0.2px] shadow-md absolute left-[90px]">

                        </div>
                        <div className="bg-white w-[230px] h-[470px] rounded-xl border-[0.2px] shadow-md absolute right-[90px] top-[110px]">

                        </div>
                    </div>
                    <div className="h-[430px]  ml-[60px] w-[640px] mt-[110px]">
                        <div className={cn(
                        "w-[130px] h-[55px] bg-green-600 text-gray-100 text-[20px] flex items-center justify-center rounded-md mb-[10px]",
                        font2.className
                        )}>
                            Alerts
                        </div>
                        <p className={cn(
                            "text-[45px] w-[650px]",
                            font.className
                        )}>
                            Stay updated with breaking news trends insights and analysis.
                        </p>
                        <p className={cn(
                            "w-[620px] mt-[10px] text-gray-600 text-[14px]",
                            font2.className
                        )}>
                            Our mission is to eliminate the need for multiple systems, we offering a unified solution that simplifies business management.
                        </p>
                        <button className={cn(
                            "w-[150px] mt-[30px] py-[16px] bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800",
                            font2.className
                        )} onClick={onClick}>
                                Get started
                        </button>
                    </div>
                </div>
                <div className="w-full h-[1290px] mt-[110px] flex flex-col items-center">
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
                            Guiding global information for exceptional investment growth
                        </div>
                    </div>
                    <div className=" w-full h-[700px] space-y-[45px]">
                        <div className="h-[250px] w-full flex items-center justify-center flex-row space-x-[50px]">
                            <div className="h-[250px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">
    
                            </div>
                            <div className="h-[250px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">

                            </div>
                            <div className="h-[250px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">

                            </div>
                        </div>
                        <div className="h-[250px] w-full flex flex-row items-center justify-center space-x-[50px]">
                            <div className="h-[250px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">
    
                            </div>
                            <div className="h-[250px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">
    
                            </div>
                            <div className="h-[250px] bg-white border-[0.2px] shadow-md w-[400px] rounded-md">
    
                            </div>
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