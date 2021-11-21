import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Appartments from '../../Shared/Appartments/Appartments';

const ExploreApartment = () => {
    const [apartment, setApartment] = useState([]);
    const history = useHistory()

    useEffect(() => {
        fetch('https://aqueous-cove-16901.herokuapp.com/apartment')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setApartment(data)
            })
    }, [])
    return (
        <div>
            <Container>
                <Typography variant='h4' sx={{ py: 5 }}>
                    TechLand is an international company

                </Typography>
                <Grid container spacing={2}>
                    {
                        apartment.map(ele => <Grid item xs={12} sm={6} md={4}>
                            <Appartments key={ele._id} data={ele}>
                                <Button onClick={() => history.push(`/order/${ele._id}`)} variant='contained'>Buy Now!</Button>
                            </Appartments>

                        </Grid>




                        )
                    }


                </Grid>
            </Container>

        </div>
    );
};

export default ExploreApartment;