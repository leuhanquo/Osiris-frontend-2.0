'use client'
import { PublicPageFooter } from "@/components/public-page/footer/footer"
import { Header } from "@/components/public-page/header/header"
import { HeaderMenuComponent } from "@/components/public-page/header/header-components/headerMenu";
import { WhyOsirisContent } from "@/components/public-page/why-osiris-page/why-osiris-content"
import { useBurgerMenuContext } from "@/lib/context/publicPageContext/burgerMenuContext";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect } from "react";


const WhyOsirisPage =()=>{
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
                      <WhyOsirisContent/>
                      <PublicPageFooter />
                  </div>
              )
          ) : (
              <div>
                  <Header />
                  <WhyOsirisContent/>
                  <PublicPageFooter />
              </div>
          )}
      </main>
    )
}

export default WhyOsirisPage