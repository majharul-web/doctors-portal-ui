import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBooking }) => {
    const { name, time, space, price } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 3, textAlign: 'center' }}>
                    <Typography variant='h5' sx={{ color: 'info.main' }}>
                        {name}
                    </Typography>
                    <Typography variant='h6' >
                        {time}
                    </Typography>
                    <Typography variant='caption' sx={{ mb: 2 }} >
                        Price: ${price}
                    </Typography>
                    <br />
                    <Typography variant='caption' sx={{ mb: 2 }} >
                        {space} Space Available
                    </Typography>
                    <br />
                    <Button onClick={handleOpen} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                open={open}
                handleClose={handleClose}
                date={date}
                time={time}
                setBooking={setBooking}
            >

            </BookingModal>

        </>
    );
};

export default Booking;