'use client'
import { PublicPageFooter } from "@/components/public-page/footer/footer"
import { Header } from "@/components/public-page/header/header"
import { HeaderMenuComponent } from "@/components/public-page/header/header-components/headerMenu"
import { PricingPageContent } from "@/components/public-page/pricing-page/pricing-page-content"
import { useBurgerMenuContext } from "@/lib/context/publicPageContext/burgerMenuContext"
import { useWindowSize } from "@uidotdev/usehooks"
import { useEffect } from "react"

const PricingPage =()=>{
    const size = useWindowSize()
    const { isOpen, resetMenu } = useBurgerMenuContext(); 


    useEffect(() => {
        resetMenu(); 
    }, [resetMenu]);

    
    return(
      <main>
          {isOpen ? (
              size.width < 1200 ? (
                  <div>
                      <Header />
                      <HeaderMenuComponent />
                  </div>
              ) : (
                  <div>
                      <Header />
                      <PricingPageContent/>
                      <PublicPageFooter />
                  </div>
              )
          ) : (
              <div>
                  <Header />
                  <PricingPageContent/>
                  <PublicPageFooter />
              </div>
          )}
      </main>
    )
}

export default PricingPage