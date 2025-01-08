"use client"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Inter } from 'next/font/google'

const font = Inter({
    weight:['600'],
    subsets:["latin"]
});

export const WhyOsiris =()=>{
    const router = useRouter();

    const onClick =()=>{
        router.push("/why-osiris")
    }

    return(
        <div className={cn(
            "flex h-[80px] w-1/5 items-center justify-center text-[15px] ml-[30px]",
            font.className
        )}>
            <p className="hover:text-blue-700 cursor-pointer" onClick={onClick}>
                Why Osiris
            </p>
        </div>
    );
};