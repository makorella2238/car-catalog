import React from "react";
import s from './Modal.module.scss'

const Modal = ({children}: { children: React.ReactNode }) => {

    return (
        <div className={ s.Modal }>
            <div className={ s.ModalContent }>
                { children }
            </div>
        </div>
    );
};

export default Modal;
