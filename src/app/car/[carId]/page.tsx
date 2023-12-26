'use client'

import CarDetail from "@/components/screens/Car-datail/Car-detail";
import { useGetSingleCar} from "@/hooks/car/car";
import Preloader from "@/components/Preloader/Preloader";

export const revalidate = 3600

const CarItemPage = ({params: {carId},}: {
    params: { carId: string }
}) => {
    const {data , isLoading } = useGetSingleCar(carId)
    if (!data || isLoading ) {
        return <Preloader/>
    }

    return <CarDetail car={ data }/>
}
export default CarItemPage