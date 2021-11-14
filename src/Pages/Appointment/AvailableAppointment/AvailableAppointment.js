import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price: 65
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
        price: 45
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
        price: 98
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
        price: 17
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
        price: 45
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
        price: 25
    },
]

const AvailableAppointment = ({ date }) => {
    const [booking, setBooking] = useState(false)
    return (
        <Container>
            <Typography variant='h4' sx={{ color: 'info.main', my: 3 }}>Available Appointments on {date.toDateString()}</Typography>
            {booking &&
                <Alert severity="success">Appointment success</Alert>
            }

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBooking={setBooking}
                    >

                    </Booking>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableAppointment;