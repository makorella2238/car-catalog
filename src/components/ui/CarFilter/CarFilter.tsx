import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import styles from '@/components/ui/genetal-css/general.module.scss';
import Modal from '@/components/ui/Modal/Modal';

interface CarFilterProps {
    handleCancelFilters: () => void

    onFilterChange(filters: { search: string; brand: string; price: number }): void;
}

const CarFilter: React.FC<CarFilterProps> = ({onFilterChange, handleCancelFilters}) => {
    const inputRef = useRef(null);
    const modalRef = useRef(null);

    const [isFiltrationModal, setIsFiltrationModal] = useState(false);

    const [search, setSearch] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState(0);
    const [brands, setBrands] = useState<string[]>([]);

    useEffect(() => {
        // Получаем список марок машин с сервера
        fetch('https://tiny-gold-pigeon-boot.cyclic.app/api/cars/brand')
            .then((response) => response.json())
            .then((data) => setBrands(data))
            .catch((error) => console.error(error));
    }, []);

    const handleSearchIconClick = () => {
        handleFilterClick();
        if (inputRef.current) {
            // @ts-ignore
            inputRef.current.focus();
        }
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleBrandChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBrand(event.target.value);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value));
    };

    const handleFilterClick = () => {
        onFilterChange({search, brand, price});
        setIsFiltrationModal(false);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleFilterClick();
        }
    };

    const handleCancel = () => {
        setIsFiltrationModal(false)
        handleCancelFilters()
    }

    return (
        <div>
            <div className="block md:flex md:items-center md:justify-center my-10">
                <div className="block md:flex-1">
                    <h1 className="mx-1 sm:mx-0 md:text-xl lg:text-3xl text-center font-bold">Here you can view our
                        catalog of cars</h1>
                </div>
                <div className="mt-5 mx-10 sm:mx-auto sm:w-2/5 md:mt-0 md:w-1/5 relative md:mr-36 md:items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="shadow-md w-full h-7 pl-9 rounded-2xl text-slate-500 shadow-current lg:shadow-xl"
                        value={ search }
                        onChange={ handleSearchChange }
                        onKeyPress={ handleKeyPress }
                        ref={ inputRef }
                    />
                    <Image
                        src="/search.svg"
                        alt="search"
                        width={ 20 }
                        height={ 15 }
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={ handleSearchIconClick }
                    />
                    <Image
                        src="/filter.svg"
                        alt="settings"
                        width={ 20 }
                        height={ 15 }
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={ () => setIsFiltrationModal(true) }
                    />
                </div>
            </div>
            { isFiltrationModal && (
                <Modal>
                    <div
                        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
                        <div className="bg-black rounded-lg p-8 text-white relative">
                                <h2 className={ `${ styles.gradientText } text-2xl font-bold mb-6` }>Filtration</h2>
                                <button className='absolute top-2 right-2' onClick={handleCancel}><Image src='/x-mark.svg' alt='x' width={25} height={25}/> </button>
                            <select
                                value={ brand }
                                onChange={ handleBrandChange }
                                className="w-full py-2 px-4 mb-4 rounded-lg bg-slate-700 text-slate-200"
                            >
                                <option value="">All Brands</option>
                                { brands.map((brand) => (
                                    <option key={ brand } value={ brand } className="text-slate-200">
                                        { brand }
                                    </option>
                                )) }
                            </select>
                            <p className={ `${ styles.gradientText } text-slate-300 text-center` }>{ price }</p>
                            <input
                                type="range"
                                min="0"
                                max="1000000"
                                value={ price }
                                onChange={ handlePriceChange }
                                className="w-full mb-4"
                            />

                            <button
                                className={ styles.buttonGreen }
                                onClick={ handleFilterClick }
                            >
                                Apply Filters
                            </button>
                            <button className={ styles.buttonYel }
                                    onClick={ () => setIsFiltrationModal(false) }>
                                Cancel
                            </button>
                            <button className={ styles.buttonRed }
                                    onClick={ handleCancel }>
                                Cancel filters
                            </button>
                        </div>
                    </div>
                </Modal>) }
        </div>
    );
};

export default CarFilter;