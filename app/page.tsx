'use client'

import { PublicPageFooter } from "@/components/public-page/footer/footer";
import { Header } from "@/components/public-page/header/header";
import { HeaderMenuComponent } from "@/components/public-page/header/header-components/headerMenu";
import { DashboardDemo } from "@/components/public-page/home-page/dashboard-demo";
import { MainPageContent } from "@/components/public-page/home-page/main-content";
import { useBurgerMenuContext } from "@/lib/context/publicPageContext/burgerMenuContext";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect } from "react";

export default function Home() {
    const size = useWindowSize();
    const { isOpen, resetMenu } = useBurgerMenuContext(); 


    useEffect(() => {
        resetMenu(); 
    }, [resetMenu]);


    return (
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
                        <DashboardDemo />
                        <MainPageContent />
                        <PublicPageFooter />
                    </div>
                )
            ) : (
                <div>
                    <Header />
                    <DashboardDemo />
                    <MainPageContent />
                    <PublicPageFooter />
                </div>
            )}
        </main>
    );
}
