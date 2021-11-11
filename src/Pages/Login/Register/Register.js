import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.vaule;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert(`password didn't match`)
        }
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ my: 'auto' }} xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        Register
                    </Typography>
                    <from onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: "75%", mb: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type='email'
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
                        <TextField
                            sx={{ width: "75%", mb: 1 }}
                            id="standard-basic"
                            label="Retype Your Password"
                            type='password'
                            name='password2'
                            onChange={handleOnChange}
                            variant="standard" />
                        <Button
                            sx={{ width: '75%', mt: 5 }}
                            type="submit"
                            variant='contained' >
                            Register
                        </Button>
                        <Link to="/Login">
                            <Button variant="text">Already have a account?Log in here</Button>
                        </Link>
                    </from>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;