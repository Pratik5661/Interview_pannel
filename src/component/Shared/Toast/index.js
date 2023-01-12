import { Toast, ToastContainer } from 'react-bootstrap'


const CustomToast = ({ variant, message}) => {
    return (
        <ToastContainer position={'top-end'}>
            <Toast
                className="d-inline-block m-1"
                bg={variant.toLowerCase()}
                autohide
            >
                <Toast.Body className={variant === 'Dark' && 'text-white'}>
                    {message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default CustomToast;