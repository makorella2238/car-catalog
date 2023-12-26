import axios from 'axios';
import {ICar, ICarData} from '@/interfaces/car.interface';

axios.defaults.baseURL = process.env.API_URL;

export const CarService = {
    async getAll(): Promise<ICar[]> {
        const { data } = await axios.get<ICar[]>('cars');
        return data;
    },

    async getById(carId: string): Promise<ICar> {
        const { data } = await axios.get<ICar>(`cars/${carId}`);
        return data;
    },
    async getBrands(): Promise<string[]> {
        const { data } = await axios.get<string[]>('cars/brand');
        return data;
    },
};