import {ICar, ICarSinge} from "@/interfaces/car.interface";
import Link from "next/link";
import s from '@/components/ui/car/CarItem/CarItem.module.scss'
import styles from '@/components/ui/genetal-css/general.module.scss'
import {FC} from "react";

const CarItem: FC<ICarSinge> = ({car}) => {
    return (
        <div className={ ` ${ s.center } p-8 border border-slate-300 text-center relative rounded-lg shadow-md shadow-slate-300/50` }>
            <h2 className={ ` ${ styles.gradientText } absolute top-3 text-2xl text-center border border-b-2 border-blue-800 px-1 mx-2 rounded-l` }>{ car.title }</h2>
            <div className='text-center'>
                <Link href={ `/car/${ car._id }` }>
                    <img className='w-64 h-auto rounded-xl my-14' src={ car.img } alt={ car.title }/>
                </Link>
            </div>
            <div className='absolute bottom-3'>
                <i className='text-xl font-semibold'>{ car.price }$</i>

                <Link className='ml-8' href={ `/car/${ car._id }` }>
                    <button className={ styles.baseButton }>Read more</button>
                </Link>
            </div>

        </div>
    );
};

export default CarItem;
