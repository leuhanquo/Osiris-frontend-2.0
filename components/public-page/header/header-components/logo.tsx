'use client'
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Inter } from 'next/font/google'

const font = Inter({
    weight:['500'],
    subsets:["latin"]
})

export const Logo =()=>{
    const router = useRouter()

    const onClick =()=>{
        router.push('/')
    }

    return(
        <div className={cn(
            "flex items-center justify-start 2xl:ml-[70px] xl:ml-[50px] md:ml-[40px] sm:ml-[30px] ml-[30px] h-80px w-1/4 cursor-pointer",
            font.className
        )} onClick={onClick}>
            Osiris
        </div>
    )
}