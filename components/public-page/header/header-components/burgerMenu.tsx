'use client'
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useBurgerMenuContext } from "@/lib/context/publicPageContext/burgerMenuContext"

export const BurgerMenuComponent =()=>{
    const {isOpen, toggleMenu} = useBurgerMenuContext();

    return(
        <div className="flex justify-end h-80px w-3/4 cursor-pointer">
            <button onClick={toggleMenu} className="xl:mr-[50px] md:mr-[40px] sm:mr-[30px] mr-[30px] transition-all">
                {!isOpen ? <RxHamburgerMenu className="size-[30px] duration-1000"/> : <MdClose className="size-[30px] duration-1000"/>}
            </button>
        </div>
    )
}