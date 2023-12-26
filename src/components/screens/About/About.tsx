import React from 'react';
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import s  from './About.module.scss'

const AboutUsPage = () => {
    return (
        <Layout>
            <div className={`${s.content} container mx-auto px-4 `}>
                <h1 className="text-4xl font-bold text-center my-8">О нас</h1>
                <div className="flex flex-wrap justify-center">
                    <div className={s.teamEl}>
                        <Image
                            src="/team/1.png"
                            alt="Участник команды 1"
                            className="rounded-lg mb-4"
                            width={150}
                            height={150}
                        />
                        <h2 className="text-2xl font-bold mb-2 text-blue-500">Анастасия</h2>
                        <p className="text-sm text-gray-300">Финансовый аналитик</p>
                    </div>
                    <div className={s.teamEl}>
                        <Image
                            src="/team/2.png"
                            alt="Участник команды 2"
                            className="rounded-lg mb-4"
                            width={150}
                            height={150}
                        />
                        <h2 className="text-2xl font-bold mb-2 text-blue-500">Кирилл</h2>
                        <p className="text-center text-sm text-gray-300">Главный разработчик программного обеспечения</p>
                    </div>
                    <div className={s.teamEl}>
                        <Image
                            src="/team/3.png"
                            alt="Участник команды 3"
                            className="rounded-lg mb-4"
                            width={150}
                            height={150}
                        />
                        <h2 className="text-2xl font-bold mb-2 text-blue-500">Екатерина</h2>
                        <p className="text-sm text-gray-300">Менеджер по маркетингу</p>
                    </div>
                </div>
                <div className="mt-4 p-4 sm:mt-8 bg-gray-900 rounded-lg sm:p-8">
                    <h2 className="text-2xl font-bold mb-4 text-center text-white">О нашей компании</h2>
                    <Image className='w-1/2 lg:w-64 float-right rounded-2xl' src='/car-1.jpeg' alt='car-img' width={ 200} height={150} />
                    <p className="text-sm sm:text-base text-center text-gray-700">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                        est Lorem ipsum dolor sit amet.

                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                        illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                        blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                        dolor sit amet,
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default AboutUsPage;