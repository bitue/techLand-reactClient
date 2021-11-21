import { Button, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Appartments from '../../Shared/Appartments/Appartments';

const HomeApartment = () => {
    const [apartment, setApartment] = useState([]);
    const history = useHistory()

    useEffect(() => {
        fetch('https://aqueous-cove-16901.herokuapp.com/apartment')
            .then(res => res.json())
            .then(data => {
                const displayData = data.slice(0, 6)
                setApartment(displayData)
            })
    }, [])
    return (
        <div>
            <h2>techLand Special Apartments</h2>
            <Container>


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

export default HomeApartment;