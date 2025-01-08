'use client'
import { BlogPageContent } from "@/components/public-page/blog-page/blogPageComponent"
import { PublicPageFooter } from "@/components/public-page/footer/footer"
import { Header } from "@/components/public-page/header/header"
import { HeaderMenuComponent } from "@/components/public-page/header/header-components/headerMenu"
import { useBurgerMenuContext } from "@/lib/context/publicPageContext/burgerMenuContext"
import { useWindowSize } from "@uidotdev/usehooks"
import { useEffect } from "react"

const BlogPage =()=>{
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
                      <BlogPageContent/>
                      <PublicPageFooter />
                  </div>
              )
          ) : (
              <div>
                  <Header />
                  <BlogPageContent/>
                  <PublicPageFooter />
              </div>
          )}
      </main>
    )
}

export default BlogPage