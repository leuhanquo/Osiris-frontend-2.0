'use client'
import { PublicPageFooter } from "@/components/public-page/footer/footer"
import { Header } from "@/components/public-page/header/header"
import { HeaderMenuComponent } from "@/components/public-page/header/header-components/headerMenu"
import { GlobalNewsPageComponent } from "@/components/public-page/use-cases/globalNewsPage"
import { useBurgerMenuContext } from "@/lib/context/publicPageContext/burgerMenuContext"
import { useWindowSize } from "@uidotdev/usehooks"
import { useEffect } from "react"

const GlobalNewsPage =()=>{
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
                      <GlobalNewsPageComponent/>
                      <PublicPageFooter />
                  </div>
              )
          ) : (
              <div>
                  <Header />
                  <GlobalNewsPageComponent/>
                  <PublicPageFooter />
              </div>
          )}
      </main>
    )
}

export default GlobalNewsPage