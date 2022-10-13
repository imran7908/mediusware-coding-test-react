import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '40%',
        left: '50%',
        minHeight: '75%',
        height: 'auto',
        width: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        marginTop: '5rem',
        overflow: 'scroll',
    },
};

Modal.setAppElement('#root');

const ModalComp = (props) => {
    const { modalIsOpen = false, setIsOpen, children } = props;

    let subtitle;
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {children}
            </Modal>
        </div>
    );
};

export default ModalComp;
