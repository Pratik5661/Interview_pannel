import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomToast({ variant, message, handleClose }) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open autoHideDuration={3000} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal:'center'}}>
        <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}





// import { Toast, ToastContainer } from 'react-bootstrap'
// import './style.scss';

// const CustomToast = ({ variant, message, handleClose }) => {
//     return (
//             <ToastContainer position={'top-end'}>
//                 <Toast
//                     className="d-inline-block m-1"
//                     bg={variant.toLowerCase()}
//                     autohide
//                     show
                    
//                 >
//                     <Toast.Body className='text-white'>
//                         <div className='d-flex justify-content-end'>
//                             <div>{message}</div>
//                             <button type='button' className='toast_close' onClick={handleClose}>&times;</button>
//                         </div>
//                     </Toast.Body>
//                 </Toast>
//             </ToastContainer>
//     )
// }

// export default CustomToast;