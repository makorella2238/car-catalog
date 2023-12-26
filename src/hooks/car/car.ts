"use client"

import {CarService} from "@/services/car.service";
import {useQuery} from "@tanstack/react-query";
export const useGetCars = () => {
     return useQuery({queryKey:['car'], queryFn: CarService.getAll});
}
export const useGetSingleCar = (carId: string) => {
     return useQuery({queryKey:['car', carId], queryFn: () => CarService.getById(carId)});
}
export const getBrands = () => {
     return useQuery({queryKey:['carBrand'], queryFn: () => CarService.getBrands});
}