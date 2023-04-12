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
const CourseDialog = () => {



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div >
            <Typography align='center'>
            <Button variant="contained" size="large"style={{
                marginleft: "10px",
                borderRadius: 15,
                backgroundColor: "#1ABC9C",
                padding: "14px 55px",
                fontSize: "18px"
               
                }} onClick={handleClickOpen}>
                Add Course
            </Button>
            </Typography>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle  sx={{fontSize:"30px" ,textAlign:"center",fontWeight:"750",color:"#1ABC9C"}}>{"Add Course"}</DialogTitle>
                <DialogContent>

                    <Form />
                </DialogContent>
              
            </Dialog>
        </div>

    )
}

export default CourseDialog