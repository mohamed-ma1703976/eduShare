import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
    },
    heading: {
        marginBottom: theme.spacing(2),
        color: theme.palette.text.primary,
    },
    subheading: {
        marginBottom: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const Pending = () => {
    const classes = useStyles();
    const router = useRouter()
    return (
        <div className={classes.container}>
            <Typography variant="h4" className={classes.heading}>
                Your Request under Processing
            </Typography>
            <Typography variant="h4" className={classes.subheading}>
                Try Again Later
            </Typography>
            <Typography variant="body1" className={classes.subheading}>
                The page you are looking for is pending.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => router.push('/')
                }
            >
                Go Back
            </Button>
        </div>
    );
};

export default Pending;
