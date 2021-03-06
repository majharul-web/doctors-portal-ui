import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Appointments = ({ date }) => {

    const { user, idToken } = useAuth();

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const dateString = date.toLocaleDateString();
        const url = `https://mighty-lowlands-10966.herokuapp.com/appointments?email=${user?.email}&date=${dateString}`;

        fetch(url, {
            headers: {
                'authorization': `Bearer ${idToken}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [date]);

    return (
        <div>
            <h3>Appointments : {appointments.length}</h3>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">
                                    {row.payment ? 'Paid' :
                                        <Link to={`/dashboard/payment/${row._id}`}>
                                            <Button variant='contained'>Pay</Button>
                                        </Link>
                                    }
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;