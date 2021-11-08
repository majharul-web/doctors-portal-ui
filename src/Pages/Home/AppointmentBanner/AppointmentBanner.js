import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const AppointmentBanner = () => {
    const bgAppointment = {
        background: `url(${bg})`,
        backgroundColor: 'rgba(45,58,74,0.9)',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: '150px',

    }
    return (
        <Box style={bgAppointment} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '400px', marginTop: '-120px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'start' }}>
                    <Box>
                        <Typography sx={{ color: 'info.main', mb: 5 }} variant='h6'>
                            Appointment
                        </Typography>
                        <Typography sx={{ my: 3 }} style={{ color: 'white' }} variant='h3'>
                            Make An Appointment Today
                        </Typography>
                        <Typography sx={{ my: 3 }} style={{ color: 'white' }} variant='h6'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque aspernatur culpa recusandae
                        </Typography>
                        <Button variant='contained'>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;