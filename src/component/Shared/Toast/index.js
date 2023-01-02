import { Toast, ToastContainer } from 'react-bootstrap'


const CustomToast = ({ variant }) => {
    return (
        <ToastContainer position={'top-end'}>
            <Toast
                className="d-inline-block m-1"
                bg={variant.toLowerCase()}
                autohide

            >
                <Toast.Body className={variant === 'Dark' && 'text-white'}>
                    Hello, world! This is a toast message.
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default CustomToast;