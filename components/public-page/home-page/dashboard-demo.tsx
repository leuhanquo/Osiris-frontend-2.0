'use client'
import { useWindowSize } from "@uidotdev/usehooks"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"



const font = Inter({
    weight:["700"],
    subsets:["latin"]
});

const font2 = Inter({
    weight:["600"],
    subsets:["latin"]
})

export const DashboardDemo=()=>{
    const size = useWindowSize()
    const router = useRouter()

    const onClick =()=>{
        router.push("/auth/register")
    }

    const onClick2 =()=>{
        router.push("/demo")
    }

    if(size.width < 1200){
        return(
            <div className="w-full h-[900px] mt-[70px]"> 
                
            </div>
        )
    }

    return(
        <div className={cn(
            "w-full  h-[1500px] mt-[95px] flex flex-col items-center",
            font.className
        )}> 
            <div className=" w-[1200px] h-[250px] flex flex-col items-center">
                <p className="items-center text-[75px]">
                    Bringing your <span className="text-green-600">investment</span> to Life
                </p>
                <p className={cn(
                    "w-[950px] text-center mt-[13px] text-gray-600 text-[15px]",
                    font2.className
                )}>
                    Discover a smarter way to analyze, collaborate, and present your investment portfolio with Osiris. No coding, no spreadsheets, just effortless insights. Transform your investment into clear, actionable visuals without the hassle.
                </p>
                <div className="flex space-x-8 mt-[30px]">
                    {/* Get Started Button */}
                    <button className="px-8 py-3.5 bg-green-600 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800" onClick={onClick}>
                        Get started
                    </button>

                    {/* View Demo Button */}
                    <button className="px-8 py-3.5 bg-gray-700 text-gray-100 font-medium rounded-md transition hover:bg-gray-300 hover:text-gray-800" onClick={onClick2}>
                        View demo
                    </button>
                </div>
            </div>
            <div className="w-[1400px] h-[740px]  flex items-center justify-center mt-[60px] relative">
                <div className="w-[1250px] flex h-[640px] bg-gray-700 items-center justify-center text-white rounded-md">
                    Dashboard
                </div>
                <div className="w-[300px] absolute h-[250px] bg-gray-400 top-0 right-[1100px] flex items-center justify-center text-white rounded-md">
                    Profitability chart
                </div>
                <div className="w-[300px] absolute h-[250px] bg-gray-400 top-[490px] right-[0px] flex items-center justify-center text-white rounded-md">
                    Growth chart
                </div>
            </div>
            <div className="bg-gray-600 w-full h-[130px] mt-[180px] flex flex-row">
                <div className={cn(
                    "h-[130px] w-[400px] items-center justify-end flex text-2xl text-white",
                    font.className
                )}>
                    <p className="ml-[100px] w-[200px] ">
                        Trusted by
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
        </div>
    )
}