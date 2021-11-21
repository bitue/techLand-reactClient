import { Button, Container, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



const Register = () => {

    const [loginData, setLoginData] = useState({})
    const { registerEmailPass, loading, user, error } = useContext(AuthContext);
    const history = useHistory()
    const handleSubmit = e => {
        // console.log('stateUser value',user);
        registerEmailPass(loginData.email, loginData.password, loginData.displayName, history)
        // user.displayName=loginData.displayName;
        console.log(user)

        e.preventDefault()
    }

    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value)
        const newUser = { ...loginData };
        newUser[name] = value;
        setLoginData(newUser);
        console.log(newUser);
    }
    return (
        <Container>
            {loading ?
                <Box sx={{ width: '100%', marginTop: '200px' }}>
                    <LinearProgress />
                </Box>


                :


                <form onSubmit={handleSubmit}>





                    <Typography variant='h5'> Register here</Typography>
                    <div>
                        <TextField id="standard-basic" onBlur={handleOnBlur} style={{ width: '50%', margin: '10px' }} label="your name" variant="standard" type='text' name='displayName' />

                    </div>

                    <div>
                        <TextField id="standard-basic" onBlur={handleOnBlur} style={{ width: '50%', margin: '10px' }} label="your email" variant="standard" type='email' name='email' />

                    </div>

                    <div>

                        <TextField id="standard-basic" onBlur={handleOnBlur} style={{ width: '50%', margin: '10px' }} label="your password" variant="standard" type='password' name='password' />

                    </div>

                    <div>
                        <Button type='submit' variant='contained'>Register</Button>
                    </div>


                    {
                        user?.email && <Alert severity="success">User registered successfully</Alert>
                    }

                    {
                        error && <Alert severity="error">{error}</Alert>
                    }



                </form>


            }


        </Container>
    );
};

export default Register;