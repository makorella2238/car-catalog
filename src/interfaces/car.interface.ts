export interface ICar {
    brand: string;
    model: string;
    _id: string,
    img: string,
    title: string,
    price: number
}

export interface ICarSinge {
    car: ICar
}
export interface ICarData {
    cars: ICar[]
}
