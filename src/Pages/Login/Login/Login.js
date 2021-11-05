import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogImg from '../../../images/login.png'



const Login = () => {

    const [loginData, setLoginData] = useState({});


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        alert('submit login')
        e.preventDefault();
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
                            onChange={handleOnChange}
                            id="standard-basic"
                            label="Email"
                            variant="standard"
                            sx={{ my: 1, width: '75%' }}
                        />

                        <TextField
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            id="standard-basic"
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
                    </form>
                    <NavLink
                        to='/register'
                        style={{ textDecoration: 'none' }}>
                        New User? Go To Register
                    </NavLink>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={LogImg} alt="" />

                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;