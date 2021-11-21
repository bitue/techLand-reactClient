import { Button } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {

    const [myOrders, setMyOrders] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [reload, setReload] = useState(true);

    useEffect(() => {
        fetch(`https://aqueous-cove-16901.herokuapp.com/myOrders/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyOrders(data);
                setReload(true)
            })
    }, [email, reload])


    const handleRemove = (id) => {
        console.log(id);
        const confirm = window.confirm('are you sure want to remove? ')
        if (confirm) {
            fetch(`https://aqueous-cove-16901.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('your order has been removed')
                        setReload(false)
                        console.log(reload)

                    }
                })

        }
        else {
            alert('thanks for consideration')
        }


        console.log(reload)
    }



    return (
        <div>
            <h2> My orders List</h2>

            <div>
                {
                    myOrders.map(order => <div key={order._id}>
                        <img style={{ width: '250px' }} src={order.img} alt="" />
                        <p>your email:{order.email}</p>
                        <p>apartment name:{order.apartmentName}</p>
                        <p>order status: <span style={{fontWeight:"bold"}}> {order.status}</span></p>

                        <Button onClick={() => handleRemove(order._id)} variant='contained'>Remove</Button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyOrders;