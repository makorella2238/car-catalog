'use client'

import {FC} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";

type NavLink = {
    path: string;
    label: string;
};

const navLinks: NavLink[] = [
    {path: "/", label: "Home"},
    {path: "/about", label: "About"},
    {path: "/contact", label: "Contact"},
];

const Header: FC = () => {
    const pathname = usePathname();

    return (
        <>
            <div className="p-1 sm:p-4 flex justify-around w-full bg-slate-800 text-2xl shadow-md items-center">
                <div className='w-2/5'>
                    <Link href='/' className='flex scale-8'>
                        <Image priority src='/car_icon.png' alt='Logo' width={ 50 } height={ 50 }/>
                    </Link>
                </div>
                { navLinks.map((link) => (
                    <Link
                        key={ link.path }
                        href={ link.path }
                        className={ `${
                            pathname === link.path ? "text-sky-300 border-b-2" : "text-sky-600"
                        } text-sm sm:text-2xl transition-color .4s ease-in-out hover:text-sky-500` }
                    >
                        { link.label }
                    </Link>
                )) }
            </div>


        </>
    );
};

export default Header;