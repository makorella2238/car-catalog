'use client'

import { Home } from '@/components/screens/Home/Home';
import { useGetCars} from "@/hooks/car/car";
import Preloader from "@/components/Preloader/Preloader";

export const revalidate = 3600
const HomePage = () => {
    const { data, isLoading } = useGetCars()

    if (isLoading || !data) {
        return <Preloader/>;
    }
    return (
        <div>
            <Home cars={data} />
        </div>
    );
};

export default HomePage;