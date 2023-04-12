import React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Slide,
    Typography
} from '@mui/material'


import Form from './Form';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const EventDialog = () => {



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Typography align='center'>
            <Button variant="contained" size="large"style={{
                borderRadius: 15,
                backgroundColor: "#FEC64F",
                padding: "14px 55px",
                fontSize: "18px"
                }} onClick={handleClickOpen}>
                Add Event
            </Button>
            </Typography>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle  sx={{fontSize:"30px" ,textAlign:"center",fontWeight:"00",color:"#FEC64F"}}>{"Add Event"}</DialogTitle>
                <DialogContent>

                    <Form />
                </DialogContent>
              
            </Dialog>
        </div>

    )
}

export default EventDialog