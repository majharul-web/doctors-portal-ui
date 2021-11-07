import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const AppointmentHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Calender
                    date={date}
                    setDate={setDate}
                >

                </Calender>
            </Grid>
            <Grid item xs={12} md={6}>
                <Appointments date={date}></Appointments>
            </Grid>

        </Grid>
    );
};

export default AppointmentHome;