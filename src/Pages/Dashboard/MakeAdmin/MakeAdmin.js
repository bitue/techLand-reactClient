import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const {token} = useContext(AuthContext)
    const handleOnBlur = e => {
        setEmail(e.target.value)

    }
    const handleSubmit = () => {
        console.log(email);
        const user ={email}
        fetch('http://localhost:5000/makeAdmin',{
            method:'PUT',
            headers:{
                "authorization":`Bearer ${token}`,
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount){
                alert('user upgraded to admin')

            }
            else if (data.matchedCount){
                alert('user already admin ')

            }
            else{
                alert('not registered yet !')
            }
        })
    }
    return (
        <div>
            <h4>Make Admin</h4>
            <form >
                <TextField onBlur={handleOnBlur} id="standard-basic" style={{width:'50%'}} label="enter email" variant="standard" />
                <Button variant='contained' onClick={handleSubmit}>Make Admin</Button>

            </form>

        </div>
    );
};

export default MakeAdmin;