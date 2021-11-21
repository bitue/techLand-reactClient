import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Signin = () => {

    const [loginData, setLoginData] = useState({})
    const { signInEmailPass, user, error } = useContext(AuthContext);
    const history = useHistory();
    const location = useLocation();
    const uri = location.state?.from || '/'
    const handleSubmit = e => {
        console.log('stateUser value', loginData);
        signInEmailPass(loginData.email, loginData.password, history, uri)

        e.preventDefault()
    }

    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        const newUser = { ...loginData };
        newUser[name] = value;
        setLoginData(newUser);
        console.log(newUser);
    }
    return (
        <Container>
          
            <form onSubmit={handleSubmit}>
                <Typography variant='h5'> Signin here</Typography>


                <div>
                    <TextField id="standard-basic" onBlur={handleOnBlur} style={{ width: '50%', margin: '10px' }} label="your email" variant="standard" type='email' name='email' />

                </div>

                <div>

                    <TextField id="standard-basic" onBlur={handleOnBlur} style={{ width: '50%', margin: '10px' }} label="your password" variant="standard" type='password' name='password' />

                </div>

                <div>
                    <Button type='submit' variant='contained'>SignIn</Button>
                </div>
                <h3>if you are new here ? please   <NavLink style={{ textDecoration: 'none' }} to='/register'>register</NavLink></h3>
                {/* <Button color="inherit">
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/register'>register</NavLink>
                </Button> */}


                {
                    user?.email && <Alert severity="success">User sign in successfully</Alert>
                }

                {
                    error && <Alert severity="error">{error}</Alert>
                }



            </form>


        </Container>
    );
};

export default Signin;