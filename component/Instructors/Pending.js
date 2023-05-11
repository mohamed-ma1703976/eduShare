import * as React from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
}));

const Heading = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: 'Black',
}));

const Subheading = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: 'Black',
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop:'2px',
}));

const Pending = () => {
    const router = useRouter();
    return (
        <Container>
            <Heading variant="h4">
                Your Request under Processing
            </Heading>
            <Subheading variant="h4">
                Try Again Later
            </Subheading>
            <Subheading variant="body1">
                The page you are looking for is pending.
            </Subheading>
            <StyledButton
                variant="contained"
                color="primary"
                onClick={() => router.push('/')}
            >
                Go Back
            </StyledButton>
        </Container>
    );
};

export default Pending;
