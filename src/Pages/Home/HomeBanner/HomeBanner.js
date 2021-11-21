import { Button, Typography } from '@mui/material';
import React from 'react';
import {  NavLink } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div style={{ background: "url('https://images.unsplash.com/photo-1515725715471-901a7c17cd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1070&q=80')", minHeight: '550px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

            <Typography variant='h4' style={{ fontWeight: 'bold', color:'white', padding: '150px 0px' }} >
                TechLand is a multipurpose website for hotel management

                <br />

                <NavLink style={{textDecoration:'none', color:'white'}} to='/explore'>
                    <Button variant='contained' style={{color:'black', fontWeight:'bold'}}> Explore techLand</Button>
                </NavLink>



            </Typography>

        </div>
    );
};

export default HomeBanner;