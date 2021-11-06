import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ open, handleClose, booking, date, time }) => {
    console.log(time);
    const { name } = booking;
    const { user } = useAuth();

    const handleSubmit = e => {
        alert('submiting')
        handleClose()
        e.preventDefault()
    }

    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField type="text" defaultValue={time} fullWidth disabled id="fullWidth" sx={{ my: 1 }} />
                            <TextField type="text" defaultValue={user?.displayName} fullWidth id="fullWidth" sx={{ my: 1 }} />
                            <TextField type="email" defaultValue={user?.email} fullWidth id="fullWidth" sx={{ my: 1 }} />
                            <TextField defaultValue='Phone Number' fullWidth id="fullWidth" sx={{ my: 1 }} />
                            <TextField defaultValue={date.toDateString()} fullWidth disabled id="fullWidth" sx={{ my: 1 }} />

                            <Button type="submit" variant="contained" color="success">
                                Submit
                            </Button>

                        </form>
                    </Box>
                </Fade>
            </Modal>

        </div>
    );
};

export default BookingModal;