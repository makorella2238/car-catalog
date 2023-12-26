import React from "react";
import s from './Modal.module.scss'
import styles from '@/components/ui/genetal-css/general.module.scss'


const Modal = ({children}: { children: React.ReactNode }) => {

    return (
        <div className={`${ s.Modal} ${styles.fadeIn} `}>
            <div className={ s.ModalContent }>
                { children }
            </div>
        </div>
    );
};

export default Modal;
