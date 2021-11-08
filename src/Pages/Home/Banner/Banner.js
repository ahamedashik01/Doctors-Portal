import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    height: 450,
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} style={verticalCenter}>
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: 14, color: 'gray', my: 3 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </Typography>
                            <Button sx={{ mt: 2, backgroundColor: '#2FD6C2' }} variant="contained">Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} style={verticalCenter}>
                        <img style={{ width: '500px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;