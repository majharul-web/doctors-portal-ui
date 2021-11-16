import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://mighty-lowlands-10966.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <Box sx={{ textAlign: 'center' }}>
            <h3>Our Doctors : {doctors.length}</h3>
            <Grid container spacing={2}>
                {
                    doctors.map(doctor => <Doctor doctor={doctor} key={doctor._id}></Doctor>)
                }
            </Grid>
        </Box>
    );
};

export default Doctors;