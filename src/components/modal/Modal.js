import './Modal.css';

const PopUp = ({ children, title, showModal, setShowModal }) => {
    return (
        <>
            { showModal &&
                <div className='container-backgorund'>
                    <div className='container-modal'>
                        <div className='container-modal__div'>
                            <p className='container-modal__p'>{title}</p>
                            <button className='container-modal__button' onClick= {() => setShowModal(false)}>X</button>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default PopUp;