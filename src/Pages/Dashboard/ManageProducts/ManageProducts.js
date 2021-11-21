import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Appartments from '../../Shared/Appartments/Appartments';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(true)


    useEffect(() => {
        fetch('https://aqueous-cove-16901.herokuapp.com/apartment')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
                setReload(true)
            })
    }, [reload])

    const handleDelete = (id) => {
        console.log(id);
        const decession = window.confirm('Are you sure want to delete data permanently?')
        if (decession) {
            fetch(`https://aqueous-cove-16901.herokuapp.com/admin/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('apartment data has been deleted')
                        setReload(false)
                    }
                })

        }
        else {
            alert('Thanks for consideration ...take time once more ')
        }

    }
    return (
        <div>
            <h2>Manage all Apartment list</h2>

            <Grid container spacing={2}>
                {
                    products.map(ele => <Grid item xs={12} sm={6} md={4}>
                        <Appartments key={ele._id} data={ele}>
                            <Button onClick={() => handleDelete(ele._id)} variant='contained'>Delete</Button>
                        </Appartments>

                    </Grid>




                    )
                }


            </Grid>
        </div>
    );
};

export default ManageProducts;