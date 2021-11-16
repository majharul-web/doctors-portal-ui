import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, email, image } = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <h3>{name}</h3>
            <img src={`data:image/jpeg;base64,${image}`} alt="" />
        </Grid>
    );
};

export default Doctor;