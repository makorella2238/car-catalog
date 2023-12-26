import Layout from "@/components/layout/Layout";
import Image from "next/image";
import s from './NotFound.module.scss';
import Head from "next/dist/shared/lib/head";

const NotFound = () => {
    return (
        <Layout>
            <div className={ s.center }>
                <h1 className='text-4xl font-bold mt-5'>Not Found</h1>
                <div className='text-center'>
                    <Image src='/404.png' alt='notFound' width={ 650 } height={ 550 }/>
                </div>
            </div>
        </Layout>
    );
};

export default NotFound;