
import { Alert, Button, Input, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://mighty-lowlands-10966.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('doctor added success');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <Box sx={{ textAlign: 'center' }}>
            <h3>Add Doctor</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    type="text"
                    label="Name"
                    variant="standard"
                    required
                    onChange={e => setName(e.target.value)}
                />
                <br />
                <TextField
                    sx={{ width: '50%', mb: 2 }}
                    type="email"
                    label="Email"
                    variant="standard"
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <br />

                <Input accept="image/*"
                    multiple type="file"
                    onChange={e => setImage(e.target.files[0])}
                />

                <Button sx={{ mx: 2 }} variant="contained" type="submit">
                    Add Doctor
                </Button>

            </form>
            {
                success &&
                <Alert severity="success">{success}</Alert>
            }
        </Box>
    );
};

export default AddDoctor;