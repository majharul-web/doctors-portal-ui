import { Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '6em', color: 'gray' }}>
                        <p>Emergency Dental Care</p>
                        <p>Checkup</p>
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>Checkup</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '2em', color: 'gray' }}>
                        <h3 className='footer-title'>Service</h3>
                        <p>Emergency Dental Care</p>
                        <p>Checkup</p>
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>Checkup</p>
                        <p>Checkup</p>
                        <p>Checkup</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '2em', color: 'gray' }}>
                        <h3 className='footer-title'>Oral Health</h3>
                        <p>Emergency Dental Care</p>
                        <p>Checkup</p>
                        <p>Treatment of Personal Diseases</p>
                        <p>Tooth Extraction</p>
                        <p>Checkup</p>
                        <p>Checkup</p>
                        <p>Checkup</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ marginTop: '2em', color: 'gray' }}>
                        <h3 className='footer-title'>Our Address</h3>
                        <p>MogorPara-5280 Dinajpur,<br />Bangladesh</p>
                        <div style={{ marginTop: '3em' }}>
                            <p>Call Now</p>
                            <Button variant="contained" >
                                +222222222208
                            </Button>

                        </div>
                    </Grid>

                </Grid>
                <p style={{ textAlign: 'center', color: 'gray' }}>Copyright @2021 All Right Reserved</p>
            </Container>
        </div>
    );
};

export default Footer;