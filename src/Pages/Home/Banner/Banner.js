import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Box } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';

const Banner = () => {
    const bgBanner = {
        background: `url(${bg})`,
        height: 450
    }

    const centerAlign = {
        display: 'flex',
        alignItems: 'center'
    }
    return (

        <Container style={bgBanner} sx={{ mt: 5, flexGrow: 1 }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={5} style={{ ...centerAlign, textAlign: 'start' }}>
                    <Box>
                        <Typography variant='h3'>
                            Your New Smile <br />
                            Start Here
                        </Typography>
                        <Typography sx={{ my: 3, fontSize: 14, fontWeight: 300, color: 'gray' }} variant='h6'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus error blanditiis natus similique quasi architecto asperiores. Dolorem, sequi earum?
                        </Typography>
                        <Button variant='contained'>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7} style={centerAlign}>
                    <img style={{ width: '400px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>


    );
};

export default Banner;