import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { idToken } = useAuth();


    const handleBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminAdd = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${idToken}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSuccess(true)
            });
        e.preventDefault()
    }
    return (
        <div>
            <h3>Make An Admin</h3>
            <form onSubmit={handleAdminAdd} >
                <TextField style={{ width: '50%' }} onBlur={handleBlur} type='email' label="Email" variant="standard" />
                <Button type='submit' variant='contained'>Add</Button>
            </form>
            {success &&
                <Alert severity="success">create admin successful</Alert>
            }
        </div>
    );
};

export default MakeAdmin;