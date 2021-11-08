import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';


const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(52, 59, 80,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}

const AppointmentBanner = () => {
    return (
        <Container>
            <Box style={appointmentBg} sx={{ flexGrow: 1, px: 2 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ padding: 0, margin: 0 }} item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: "-100px", position: 'bottom' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" style={{ color: '#30E1CB', fontSize: 18, textAlign: 'start', marginTop: '15px' }}>
                            APPOINTMENT
                        </Typography>
                        <Typography sx={{ mt: 2, lineHeight: 1.2 }} variant="h4" style={{ color: 'white', fontSize: 40, textAlign: 'start' }}>
                            Make an appoinment <br />
                            Today
                        </Typography>
                        <Box style={{ textAlign: "start" }}>
                            <Typography sx={{ mt: 2 }} variant="h4" style={{ color: 'white', fontSize: 14, textAlign: 'start', lineHeight: 2 }}>
                                It is a long establish fact that a reader will be distractedby the raddable content of a page when looking at its
                            </Typography>
                            <Button sx={{ mt: 2, backgroundColor: '#2FD6C2' }} variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        </Container>
    );
};

export default AppointmentBanner;