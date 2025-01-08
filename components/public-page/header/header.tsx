'use client'
import { BurgerMenuComponent } from "./header-components/burgerMenu"
import { DropDown } from "./header-components/dropdown"
import { Logo } from "./header-components/logo"
import { SignUpPart } from "./header-components/signup"
import { useWindowSize } from "@uidotdev/usehooks"


export const Header =()=>{
    const size = useWindowSize()

    if(size.width < 1200){
        return(
            <div className="flex flex-row w-full h-[75px] border-b-[0.1px] border-gray-300 sticky top-0 bg-white z-20">
                <Logo/>
                <BurgerMenuComponent/>
            </div>
        )
    }

    return(
        <div className="flex flex-row w-full h-[80px] shadow-sm sticky top-0 bg-white z-20">
            <Logo/>
            <DropDown/>
            <SignUpPart/>
        </div>
    )
}