import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51Jvkz6AiSFVCM6gapdezmEhRThDy92fuceXqqC5c6363UjCcjZp35DzTVl8QDq8m3dX5YYyPSI1xUgAx6U44A5cq0083TgHK0B');

const Payment = () => {
    const { appointmentId } = useParams();

    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/appointment/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [])
    return (
        <div>
            <h3>Please Pay Your Bill For :{appointment.patientName} </h3>
            <p>Price: ${appointment.price}</p>

            {appointment.price &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment}>
                    </CheckoutForm>
                </Elements>
            }
        </div>
    );
};

export default Payment;