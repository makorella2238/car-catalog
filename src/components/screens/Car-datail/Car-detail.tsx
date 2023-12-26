'use client'

import {ICarSinge} from "@/interfaces/car.interface";
import Layout from "@/components/layout/Layout";
import {FC} from "react";
import styles from "@/components/ui/genetal-css/general.module.scss";
import {useRouter} from "next/navigation";
import Image from "next/image";

const CarDetail: FC<ICarSinge> = ({car}) => {
    const router = useRouter()
    return (
        <Layout>
            <div className='mt-5 flex justify-center items-center'>
                <div className={`${styles.baseButton} p-2 flex ml-5 flex-none transition-colors`}  onClick={ () => router.back() }>
                    <Image className='sm:mr-3' src='/arrow_back.svg' alt='arrow_back' width={20} height={20}/>
                    <p className='hidden sm:block'>back</p>
                </div>
                <h2 className='mx-2 text-xl sm:text-2xl flex-1 text-center lg:text-4xl font-bold sm:p-5'>Подробные детали о { car.title }</h2>
            </div>
            <div className='block lg:flex lg:items-center xl:items-start lg:justify-center p-8 shadow-2xl'>
                <h2 className={ `${ styles.gradientText } sm:hidden text-2xl text-center border border-b-2 border-slate-800 p-1 shadow-2xl` }>{ car.title }</h2>
                <div className='w-full lg:w-2/5 lg:mr-28'>
                    <img className='rounded-xl my-14' src={ car.img } alt={ car.title }/>
                </div>
                <div className='w-full lg:w-2/5 mt-10'>
                    <h2 className={ `${ styles.gradientText } hidden sm:block text-2xl text-center border border-b-2 border-slate-800 p-1 shadow-2xl` }>{ car.title }</h2>
                    <p className='text-xl font-light my-8'>Lorem ipsum dolor sit amet, consecrate disciplining elite,
                        sed diam
                        noname usermod temper indent ut
                        abore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet</p>
                    <i className='text-xl font-semibold'>{ car.price }$</i>

                    <button className={ `${ styles.baseButton } p-2 w-1/3 ml-10 sm:w-1/5 sm:ml-14` }>By now</button>
                </div>
            </div>
        </Layout>
    );
};

export default CarDetail;
