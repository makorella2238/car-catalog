import Layout from "@/components/layout/Layout";
import CarFilter from "@/components/ui/CarFilter/CarFilter";
import type {ICarData} from "@/interfaces/car.interface";
import React, {FC, useEffect, useState} from "react";
import CarItem from "@/components/ui/car/CarItem/CarItem";

export const Home: FC<ICarData> = ({cars}) => {
    const [filteredCars, setFilteredCars] = useState(cars);
    const [searchText, setSearchText] = useState("");
    const [selectedFilters, setSelectedFilters] = useState<{
        brand: string;
        price: number;
    }>({
        brand: "",
        price: 0,
    });

    useEffect(() => {
        // Применяем фильтры к исходному списку машин
        let updatedFilteredCars = cars;

        if (searchText) {
            updatedFilteredCars = cars.filter(
                (car) =>
                    car.title.toLowerCase().includes(searchText.toLowerCase()) ||
                    car.title.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        if (selectedFilters.brand) {
            updatedFilteredCars = updatedFilteredCars.filter(
                (car) => car.brand === selectedFilters.brand
            );
        }

        if (selectedFilters.price > 0) {
            updatedFilteredCars = updatedFilteredCars.filter(
                (car) => car.price <= selectedFilters.price
            );
        }

        setFilteredCars(updatedFilteredCars);
    }, [selectedFilters, cars, searchText]);

    const handleFilterChange = (filters: {
        brand: string;
        price: number;
    }) => {
        setSelectedFilters(filters);
        setSearchText(""); // Сброс значения поисковой строки
    };

    const handleCancelFilters = () => {
        setSelectedFilters({brand: "", price: 0});
    };

    const carData =
        filteredCars.length > 0 ? (
            filteredCars.map((car) => <CarItem key={ car._id } car={ car }/>)
        ) : (
            <div className="mt-5 text-xl font-bold">No data found</div>
        );

    return (
        <Layout>
            <main>
                <CarFilter
                    onFilterChange={ handleFilterChange }
                    handleCancelFilters={ handleCancelFilters }
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
                <div className='mb-5'>
                    { searchText && (
                        <div className="m-2 text-center">
                            <p className="text-text-center">
                                Here's what was found on request:{" "}
                                <span className="font-semibold">{ searchText }</span>
                            </p>
                        </div>
                    ) }
                    { selectedFilters.brand && (
                        <div className="m-2  text-center">
                            <p className="text-text-center">
                                Brand:{ " " }
                                <span className="font-semibold">{ selectedFilters.brand }</span>
                            </p>
                        </div>
                    ) }
                    { selectedFilters.price > 0 && (
                        <div className="m-2  text-center">
                            <p className="text-center">
                                Price:{ " " }
                                <span className="font-semibold">{ selectedFilters.price } $</span>
                            </p>
                        </div>
                    ) }
                </div>
                <div className="flex flex-wrap mx-11 justify-center max-w-screen gap-2">
                    { carData }
                </div>
            </main>
        </Layout>
    );
};

export default Home;