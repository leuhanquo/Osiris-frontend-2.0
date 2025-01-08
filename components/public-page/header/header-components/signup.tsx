'use client'
import { cn } from "@/lib/utils"
import { Inter } from 'next/font/google'
import { useRouter } from "next/navigation"

const font = Inter({
    weight:['600'],
    subsets:["latin"]
})

export const SignUpPart =()=>{
    const router = useRouter()
    
    const homeSignin=()=>{
        router.push('/auth/login')
    }

    const homeSignup=()=>{
        router.push('/auth/register')
    }

    return(
        <div className="flex items-center justify-center h-80px w-1/3 flex-row space-x-7">
            <button className={cn(
                "text-gray-900 px-4 py-2 font-medium text-[15px] transition hover:text-blue-700",
                font.className
            )} onClick={homeSignin}>
                Sign in
            </button>
            <button className={cn(
                "bg-[#363636] text-white px-8 py-3 font-medium text-[15px] rounded-md transition hover:bg-gray-400 hover:text-gray-800",
                font.className
            )} onClick={homeSignup}>
                Sign up
            </button>
        </div>
    )
}