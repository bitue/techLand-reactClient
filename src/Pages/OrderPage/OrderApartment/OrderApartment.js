import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import order from "../../../img/order.png"


const OrderApartment = () => {

    const { id } = useParams();

    const [apartment, setApartment] = useState({})


    useEffect(() => {
        fetch(`https://aqueous-cove-16901.herokuapp.com/apartment/selected/${id}`)
            .then(res => res.json())
            .then(data => {
                setApartment(data);
                console.log(data)

            })
    }, [])



    const { register, handleSubmit } = useForm();


    const { user } = useContext(AuthContext)
    // const dummyOrder={name:user.displayName, email:user.email, id:id}

    // const [order, setOrder] = useState(dummyOrder);

    const orderInfo = {
        apartmentName: apartment.name,
        price: apartment.price,
        img: apartment.img,
        status: 'pending'



    }



    const onSubmit = data => {
        console.log(data)
        const orderData = { ...data, ...orderInfo }
        console.log(orderData)

        // console.log(order)

        fetch('https://aqueous-cove-16901.herokuapp.com/order', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('your order has been placed ..techLand will contact with you')
                }
                console.log(data)
            })
    };






    return (


        <>




            <Box sx={{ flexGrow: 1 }}>
                <h2>{apartment.name}</h2>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7} >
                      
                            <img style={{width:'100%'}} src={apartment.img} />
                      

                    </Grid>
                    <Grid item xs={12} md={5}>
                        <div>
                            <h4>Apartment description</h4>
                            <p>{apartment.description}</p>
                        </div>

                        <div>
                            <p>Location : {apartment.location} </p>
                            <p>Price : ${apartment.price}M USD</p>
                            <p>Area : {apartment.area} square fit</p>
                            {/* <p>Inside : {apartment?.remain?.bed} Bed and {apartment?.remain?.bath}</p> */}


                        </div>
                    </Grid>

                </Grid>
            </Box>



            <Box sx={{ flexGrow: 1 }}>
                <h2>Fill up the from </h2>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <TextField id="standard-basic" {...register("name")}

                                    style={{ width: '50%', margin: '10px' }} label="your name" variant="standard" type='text' defaultValue={user.displayName} />

                            </div>

                            <div>
                                <TextField id="standard-basic" {...register("email")}

                                    style={{ width: '50%', margin: '10px' }} label="your name" variant="standard" type='email' value={user.email} />

                            </div>





                            <div>
                                <TextField id="standard-basic" style={{ width: '50%', margin: '10px' }} label="telephone number" variant="standard" type='number'  {...register("phoneNumber")} />

                            </div>

                            <div>
                                <TextField id="standard-basic" style={{ width: '50%', margin: '10px' }} label="Your Present address" variant="standard" type='text'  {...register("address")} />


                            </div>


                            <input style={{ background: '#036bfc', padding: '10px 15px', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px' }} type="submit" />





                        </form>


                    </Grid>
                    <Grid item xs={12} md={5}>
                        <img style={{width:'100%'}} src={order}/>

                    </Grid>

                </Grid>
            </Box>




        </>


    );
};

export default OrderApartment;