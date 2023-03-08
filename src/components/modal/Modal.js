import './Modal.css';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ children, title, showModal, cleanForm }) => {
    return (
        <>
            { showModal &&
                <div className='container-backgorund'>
                    <div className='container-modal'>
                        <div className='container-modal__div'>
                            <p className='container-modal__p'>{title}</p>
                            <CloseIcon className='container-modal__button' onClick= {() => cleanForm()}>X</CloseIcon>
                        </div>
                        <div className='container-modal__chidren'>
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;