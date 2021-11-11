import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../images/login.png';


const Login = () => {
    const [loginData, setLoginData] = useState({})

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.vaule;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ my: 'auto' }} xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        Login
                    </Typography>
                    <from onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", mb: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", mb: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type='password'
                            name='password'
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button
                            sx={{ width: '75%', mt: 5 }}
                            type="submit"
                            variant='contained' >
                            Login
                        </Button>
                    </from>
                    <Link to="/register">
                        <Button variant="text">New User? Create an account</Button>
                    </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;