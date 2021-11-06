import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LogImg from '../../../images/login.png'



const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginWithEmailPass, isLoading, authError, singInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        loginWithEmailPass(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    // google singIn
    const handleGoogleSingIn = () => {
        singInUsingGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>
                        Please Login
                    </Typography>

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            type="email"
                            name="email"
                            onBlur={handleOnChange}
                            label="Email"
                            variant="standard"
                            sx={{ my: 1, width: '75%' }}
                        />

                        <TextField
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            label="Password"
                            variant="standard"
                            sx={{ my: 1, width: '75%' }}
                        />

                        <Button
                            variant='contained'
                            sx={{ my: 1, width: '75%' }}
                            type="submit">
                            Login
                        </Button>
                        <br />
                        <NavLink
                            to='/register'
                            style={{ textDecoration: 'none' }}>
                            New User? Go To Register
                        </NavLink>
                        <br />
                        {isLoading &&
                            <CircularProgress color="success" />
                        }
                        {user?.email &&
                            <Alert severity="success">User Login successful</Alert>
                        }
                        {
                            authError &&
                            <Alert severity="error">{authError}</Alert>
                        }

                    </form>

                    <p>-------------------</p>
                    <Button onClick={handleGoogleSingIn} variant='contained'>Google Sing In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={LogImg} alt="" />

                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;