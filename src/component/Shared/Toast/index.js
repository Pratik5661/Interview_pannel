import { Toast, ToastContainer } from 'react-bootstrap'
import './style.scss';

const CustomToast = ({ variant, message, handleClose }) => {
    return (
            <ToastContainer position={'top-end'}>
                <Toast
                    className="d-inline-block m-1"
                    bg={variant.toLowerCase()}
                    autohide
                    show
                    
                >
                    <Toast.Body className='text-white'>
                        <div className='d-flex justify-content-end'>
                            <div>{message}</div>
                            <button type='button' className='toast_close' onClick={handleClose}>&times;</button>
                        </div>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
    )
}

export default CustomToast;