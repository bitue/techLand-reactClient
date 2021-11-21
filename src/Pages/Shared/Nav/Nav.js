import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" style={{textAlign:'left'}} sx={{ flexGrow: 1 }}>
                        <NavLink style={{textDecoration:'none' , color:'white'}} to='/'>TechLand</NavLink>
                    </Typography>
                    <Box>
                        {
                            user?.email ? <div>
                                <Button color="inherit">
                                    <NavLink style={{textDecoration:'none' , color:'white'}} to='/dashboard'>Dashboard</NavLink>
                                </Button>
                                <Button variant='contained' onClick={logOut}>log out</Button></div>

                                :

                                <div>
                                    <Button color="inherit">
                                        <NavLink style={{textDecoration:'none' , color:'white'}} to='/signin'>signIn</NavLink>
                                    </Button>

                                    {/* <Button color="inherit">
                                        <NavLink style={{textDecoration:'none' , color:'white'}} to='/register'>register</NavLink>
                                    </Button> */}
                                </div>

                        }


                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Nav;