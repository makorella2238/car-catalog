'use client'

import React, {useState} from 'react';
import Layout from "@/components/layout/Layout";
import s from './Contact.module.scss'
import styles from '@/components/ui/genetal-css/general.module.scss'


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Ваша логика обработки формы здесь
        console.log('Отправлено!');
    };

    return (
        <Layout>
            <div className={`${styles.fadeIn} flex justify-center mt-10`}>
                <div className="p-8 rounded shadow-md max-w-md container lg">
                    <h1 className="text-2xl font-bold mb-4 text-center text-slate-100 ">Свяжитесь с нами</h1>
                    <form onSubmit={ handleSubmit }>
                        <div className="mb-4">
                            <label className={s.label} htmlFor="name">
                                Имя
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Введите ваше имя"
                                value={ name }
                                onChange={ (e) => setName(e.target.value) }
                            />
                        </div>
                        <div className="mb-4">
                            <label className={s.label} htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Введите ваш email"
                                value={ email }
                                onChange={ (e) => setEmail(e.target.value) }
                            />
                        </div>
                        <div className="mb-4">
                            <label className={s.label} htmlFor="message">
                                Сообщение
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-4 focus:border-cyan-300"
                                id="message"
                                placeholder="Введите ваше сообщение"
                                value={ message }
                                onChange={ (e) => setMessage(e.target.value) }
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;