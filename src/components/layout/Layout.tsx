import {FC, PropsWithChildren, Suspense} from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Preloader from "@/components/Preloader/Preloader";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            <Suspense fallback={<Preloader/>}>
                <main className='mb-28'>
                    { children }
                </main>
            </Suspense>
            <Footer/>
        </div>
    );
}

export default Layout;