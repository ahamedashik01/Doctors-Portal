import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpen = () => setOpenBooking(true);
    const handleClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" gutterBottom component="div">
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleOpen} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid >
            <BookingModal
                booking={booking}
                date={date}
                openBooking={openBooking}
                handleClose={handleClose}
            >

            </BookingModal>
        </>
    );
};

export default Booking;