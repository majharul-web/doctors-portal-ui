import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LogImg from '../../../images/login.png'

const Register = () => {
    const [registerData, setRegisterData] = useState({});

    const { user, userRegister, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData)
    }

    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('paswword did not matched');
            return;
        }
        userRegister(registerData.email, registerData.password)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>
                        Please Register
                    </Typography>

                    {
                        !isLoading &&
                        <form onSubmit={handleRegisterSubmit}>
                            <TextField
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                label="Email"
                                variant="standard"
                                sx={{ my: 1, width: '75%' }}
                            />

                            <TextField
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                label="Password"
                                variant="standard"
                                sx={{ my: 1, width: '75%' }}
                            />
                            <TextField
                                type="password"
                                name="password2"
                                onChange={handleOnChange}
                                label="Retype Password"
                                variant="standard"
                                sx={{ my: 1, width: '75%' }}
                            />

                            <Button
                                variant='contained'
                                sx={{ my: 1, width: '75%' }}
                                type="submit">
                                Register
                            </Button>
                        </form>
                    }

                    {isLoading &&
                        <CircularProgress color="success" />
                    }
                    {user?.email &&
                        <Alert severity="success">User Register successful</Alert>
                    }
                    {
                        authError &&
                        <Alert severity="error">{authError}</Alert>
                    }

                    <NavLink
                        to='/login'
                        style={{ textDecoration: 'none' }}>
                        Already Register? Go To Login
                    </NavLink>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={LogImg} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;