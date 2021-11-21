import { Grid, Typography } from '@mui/material';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{backgroundColor:'#1a6cf0', marginTop:"50px"}}>
            <Grid container spacing={2} style={{fontWeight:'bold'}} >
                <Grid item xs={12} sm={4} style={{ textAlign: 'left', padding: '25px 40px' }}>
                    <div>
                        <NavLink style={{ textDecoration: 'none', color: 'black', textAlign: 'left', margin: '10px 20px' }} to='/home'>Home</NavLink>
                    </div>
                    <div>
                        <NavLink style={{ textDecoration: 'none', color: 'black', textAlign: 'left', margin: '10px 20px' }} to='/'>Explore techLand</NavLink>
                    </div>
                    <div>
                        <NavLink style={{ textDecoration: 'none', color: 'black', textAlign: 'left', margin: '10px 20px' }} to='/dashboard'>Dashboard</NavLink>
                    </div>
                    <div>
                        <NavLink style={{ textDecoration: 'none', color: 'black', textAlign: 'left', margin: '10px 20px' }} to='/'>Help center</NavLink>
                    </div>



                </Grid>
                <Grid item xs={12} sm={4} style={{ textAlign: 'left', padding: '25px 40px' }}>
                    <div>
                        <NavLink style={{ textDecoration: 'none', color: 'black', textAlign: 'left', margin: '10px 20px' }} to='/signin'>Sign in</NavLink>
                    </div>
                    <div>
                        <NavLink style={{ textDecoration: 'none', color: 'black', textAlign: 'left', margin: '10px 20px' }} to='/register'>Register</NavLink>
                    </div>
                    <div>
                        <NavLink style={{ textDecoration: 'none', color: 'black', textAlign: 'left', margin: '10px 20px' }} to='/'>Help Center</NavLink>
                    </div>
                    <div>
                        <NavLink style={{ textDecoration: 'none', color: 'black', textAlign: 'left', margin: '10px 20px' }} to='/'>Customer care</NavLink>
                    </div>

                </Grid>

                <Grid item xs={12} sm={4} style={{ textAlign: 'left', padding: '25px 40px' }}>
                    <div>
                        <a style={{ textDecoration: 'none', color: 'black', textAlign: 'left', margin: '10px 20px' }} href='https://fb.com'>Follow Fb</a>
                    </div>
                    <div>
                    <a style={{ textDecoration: 'none', color: 'black', textAlign: 'left', margin: '10px 20px' }} href='https://linkedin.com'>Follow Linkedin</a>
                    </div>
                    <div>
                    <a style={{ textDecoration: 'none', color: 'black', textAlign: 'left', margin: '10px 20px' }} href='https://linkedin.com'>Follow twitter</a>
                    </div>
                    <div>
                    <a style={{ textDecoration: 'none', color: 'black', textAlign: 'left', margin: '10px 20px' }} href='https://instagram.com'>Follow instagram</a>
                    </div>


                </Grid>
               

            </Grid>

            <Typography variant='h6'> Copyright reserved by @techLand</Typography>
           
        </div>
    );
};

export default Footer;