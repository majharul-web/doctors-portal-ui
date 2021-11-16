import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LogImg from '../../../images/login.png'

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { user, userRegister, isLoading, authError } = useAuth();

    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setRegisterData(newLoginData)
    }

    const handleRegisterSubmit = e => {
        if (registerData.password !== registerData.password2) {
            alert('password did not matched');
            return;
        }
        userRegister(registerData.email, registerData.password, registerData.name, navigate)
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
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                label="Your Name"
                                variant="standard"
                                sx={{ my: 1, width: '75%' }}
                            />
                            <TextField
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                label="Email"
                                variant="standard"
                                sx={{ my: 1, width: '75%' }}
                            />

                            <TextField
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                label="Password"
                                variant="standard"
                                sx={{ my: 1, width: '75%' }}
                            />
                            <TextField
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
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

                            <br />
                            <NavLink
                                to='/login'
                                style={{ textDecoration: 'none' }}>
                                Already Register? Go To Login
                            </NavLink>
                            <br />
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
                        </form>
                    }



                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={LogImg} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;