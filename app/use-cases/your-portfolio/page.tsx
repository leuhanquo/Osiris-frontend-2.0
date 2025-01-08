'use client'
import { PublicPageFooter } from "@/components/public-page/footer/footer"
import { Header } from "@/components/public-page/header/header"
import { HeaderMenuComponent } from "@/components/public-page/header/header-components/headerMenu"
import { YourPortfolioPageComponent } from "@/components/public-page/use-cases/yourPortfolioPage"
import { useBurgerMenuContext } from "@/lib/context/publicPageContext/burgerMenuContext"
import { useWindowSize } from "@uidotdev/usehooks"
import { useEffect } from "react"

const YourPortfolioPage =()=>{
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
                      <YourPortfolioPageComponent/>
                      <PublicPageFooter />
                  </div>
              )
          ) : (
              <div>
                  <Header />
                  <YourPortfolioPageComponent/>
                  <PublicPageFooter />
              </div>
          )}
      </main>
    )
}

export default YourPortfolioPage