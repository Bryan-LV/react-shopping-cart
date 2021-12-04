import React from 'react';
import './modal.css';

interface ModalProps {
    modalState: boolean;
    toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<ModalProps> = (props) => {
    const modalCSS = props.modalState ? 'modal modal__wrapper' : 'modal modal__wrapper modal--closed';

    function handleBackgroundClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation();
        props.toggleModal(p => !p)
    }

    return (
        <div className={modalCSS} onClick={handleBackgroundClick}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}