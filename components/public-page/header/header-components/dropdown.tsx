import { BlogDropDown } from "./dropdown-component/blog"
import { PricingDropDown } from "./dropdown-component/pricing"
import { UseCasesDropDown } from "./dropdown-component/use-cases-dropdown"
import { WhyOsiris } from "./dropdown-component/why-osiris"

export const DropDown =()=>{
    return(
        <div className="flex items-center justify-center h-80px w-full flex-row">
            <WhyOsiris/>
            <UseCasesDropDown/>
            <BlogDropDown/>
            <PricingDropDown/>
        </div>
    )
}