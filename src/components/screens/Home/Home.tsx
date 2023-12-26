import Layout from "@/components/layout/Layout";
import CarFilter from "@/components/ui/CarFilter/CarFilter";
import type {ICarData} from "@/interfaces/car.interface";
import React, {FC, useEffect, useState} from "react";
import styles from '@/components/ui/genetal-css/general.module.scss'
import CarItem from "@/components/ui/car/CarItem/CarItem";

export const Home: FC<ICarData> = ({ cars }) => {
    const [filteredCars, setFilteredCars] = useState(cars);
    const [selectedFilters, setSelectedFilters] = useState<{ search: string; brand: string; price: number }>({
        search: '',
        brand: '',
        price: 0,
    });

    useEffect(() => {
        // Применяем фильтры к исходному списку машин
        let updatedFilteredCars = cars;

        if (selectedFilters.search) {
            updatedFilteredCars = updatedFilteredCars.filter(
                car =>
                    car.title.toLowerCase().includes(selectedFilters.search.toLowerCase()) ||
                    car.title.toLowerCase().includes(selectedFilters.search.toLowerCase())
            );
        }

        if (selectedFilters.brand) {
            updatedFilteredCars = updatedFilteredCars.filter(car => car.brand === selectedFilters.brand);
        }

        if (selectedFilters.price) {
            updatedFilteredCars = updatedFilteredCars.filter(car => car.price <= selectedFilters.price);
        }

        setFilteredCars(updatedFilteredCars);
    }, [selectedFilters, cars]);

    const handleFilterChange = (filters: { search: string; brand: string; price: number }) => {
        setSelectedFilters(filters);
    };

    const handleCancelFilters = () => {
        setSelectedFilters({ search: '', brand: '', price: 0 });
    };

    const carData =
        filteredCars.length > 0 ? (
            filteredCars.map((car) => <CarItem key={car._id} car={car} />)
        ) : (
            <div className='mt-5 text-xl font-bold'>No data found</div>
        );

    return (
        <Layout>
            <main>
                <CarFilter onFilterChange={handleFilterChange} handleCancelFilters={handleCancelFilters}/>
                {selectedFilters.brand && (
                    <div className="m-2">
                        <p className='text-text-center'>Brand: <span className="font-semibold">{selectedFilters.brand}</span></p>
                    </div>
                )}
                {selectedFilters.price > 0 && (
                    <div className="m-2">
                        <p className='text-center'>Price: <span className="font-semibold">{selectedFilters.price}</span></p>
                    </div>
                )}
                <div className="flex flex-wrap mx-11 justify-center max-w-screen gap-2">
                    {carData}
                </div>
            </main>
        </Layout>
    );
};

export default Home;