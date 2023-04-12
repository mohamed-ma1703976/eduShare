import React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Slide,
    Typography
} from '@mui/material'


import UpdateForm from "../component/UpdateForm"
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const UpdateDialog = ({id,title,InstructorName,SesionType,CourseDescription}) => {

console.log(id);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Typography align='center' onClick={handleClickOpen}>

                Update
            </Typography>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{ fontSize: "30px", textAlign: "center", fontWeight: "750", color: "#1ABC9C" }}>{"Update Course"}</DialogTitle>
                <DialogContent>

                    <UpdateForm ids={id} titles={title} InstructorNames={InstructorName}
                    SesionTypes={SesionType}
                    CourseDescriptions={CourseDescription}
                    />
                </DialogContent>

            </Dialog>
        </div>

    )
}

export default UpdateDialog