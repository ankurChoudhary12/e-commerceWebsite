// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function AlertDialogSlide() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Slide in alert dialog
//       </Button>
//       <Dialog
//         open={open}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle>{"Use Google's location service?"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
//             Let Google help apps determine location. This means sending anonymous
//             location data to Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose}>Agree</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Slide from '@mui/material/Slide';
// import ShippingAddressForm from './AddressForm';
// import PaymentDetailsForm from './PaymentForm';
// import ReviewOrder from './Review';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function AlertDialogSlide({ open, onClose }) {
//   const handleClose = () => {
//     onClose(); // Call the onClose callback to close the dialog
//   };

//   const [address, setAddress] = useState(false)
//   const [payment, setPayment] = useState(false)

//   const handleNext = () => {    
//     setPayment(true)
//   };
//   const handleBack = () => {
//     setAddress(false)
//   }

  
//   return (
//     <div>
//       <Dialog
//         open={open}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle>{"Use Google's location service?"}</DialogTitle>
//         <DialogContent>
//           {address ? <ShippingAddressForm /> : null}

//           {payment == true ? <PaymentDetailsForm /> :null }
//           <ReviewOrder />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleBack}>Back</Button>
//           <Button onClick={handleNext}>Next</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }


import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
// import ShippingAddressForm from './ShippingAddressForm';
// import PaymentDetailsForm from './PaymentDetailsForm';
// import ReviewOrder from './ReviewOrder';
import ShippingAddressForm from './AddressForm';
import PaymentDetailsForm from './PaymentForm';
import Checkout from './Checkout';
import ReviewOrder from './Review';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, onClose, cart }) {
    console.log("cart",cart)
  const handleClose = () => {
    onClose(); // Call the onClose callback to close the dialog
  };

  const [step, setStep] = useState(0);

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handleBack = () => {
//     setStep(step - 1);
//   };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>{"Checkout"}</DialogTitle>
        <DialogContent>
          {/* {step === 0 && <ShippingAddressForm />}
          {step === 1 && <PaymentDetailsForm />}
          {step === 2 && <ReviewOrder cart={cart}/>}
          {step === 3 && <Checkout/> } */}
          <Checkout cart={cart}/>
        </DialogContent>
        {/* <DialogActions>
          {step > 0 && (
            <Button onClick={handleBack}>Back</Button>
          )}
          {step < 3 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Button onClick={handleClose}>Place Order</Button>
          )}
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
