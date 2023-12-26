import {FC, PropsWithChildren, Suspense} from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            <Suspense fallback={<div>Loading...</div>}>
                <main className='mb-28'>
                    { children }
                </main>
            </Suspense>
            <Footer/>
        </div>
    );
}

export default Layout;