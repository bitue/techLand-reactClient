import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MakeReview = () => {
    const { register, handleSubmit } = useForm();
    const {user} = useContext(AuthContext);
    console.log(user)
    const onSubmit = data => {


        if(data.star >5 && data.star<0) {
            return alert ('review should be 1 to 5 star')
        }



        fetch('https://aqueous-cove-16901.herokuapp.com/makeReview',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('thanks for your feedback , keep close with techLand')
            }
        })
    }
    return (
        <div>
            <h2>Here you can feedback </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              

                <div>
                    <TextField  {...register("firstName")} id="standard-basic" style={{ width: '50%', margin: '10px' }} label="your name" defaultValue={user.displayName} variant="standard" type='text' />

                </div>

                <div>

                    <TextField {...register("email")} id="standard-basic" style={{ width: '50%', margin: '10px' }} label="your email"  defaultValue={user.email}  variant="standard" type='email' />

                </div>

                <div>

                    <TextField {...register("review")} id="standard-basic" style={{ width: '50%', margin: '10px' }} label="your review" variant="standard" type='text' />

                </div>

                <div>

                    <TextField {...register("star")} id="standard-basic" style={{ width: '50%', margin: '10px' }} label="give star (1-5)"  min="0" max="5" variant="standard" type='number' />

                </div>


                <input style={{background:'#036bfc', padding:'10px 15px', border:'none', borderRadius:'12px',fontWeight:'bold' ,fontSize:'16px'}} type="submit" />
            </form>



        </div>
    );
};

export default MakeReview;