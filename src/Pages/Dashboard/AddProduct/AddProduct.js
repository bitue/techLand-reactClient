import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://aqueous-cove-16901.herokuapp.com/addApartment', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('your apartment info has been uploaded')
                }
            })
    }
    return (
        <div>
            <h1>add an Apartment </h1>

            <form onSubmit={handleSubmit(onSubmit)}>


                <div>
                    <TextField  {...register("name", { required: true })} id="standard-basic" style={{ width: '50%', margin: '10px' }} label="Apartment Name" variant="standard" type='text' />
                </div>

                <div>
                    <TextField  {...register("location", { required: true })} id="standard-basic" style={{ width: '50%', margin: '10px' }} label="Exact Location" variant="standard" type='text' />
                </div>

                <div>
                    <TextField  {...register("area", { required: true })} id="standard-basic" style={{ width: '50%', margin: '10px' }} label="area(sqft)" variant="standard" type='number' />
                </div>

                <div>
                    <TextField  {...register("img", { required: true })} id="standard-basic" style={{ width: '50%', margin: '10px' }} label="Provide img link" variant="standard" type='text' />
                </div>



                <div>
                    <TextField  {...register("price", { required: true })} id="standard-basic" style={{ width: '50%', margin: '10px' }} label="price(M USD)" variant="standard" type='number' />
                </div>

                <div>
                    <TextField  {...register("description", { required: true })} id="standard-basic" style={{ width: '50%', margin: '10px' }} label="Description About apartment" variant="standard" type='text' />
                </div>

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;