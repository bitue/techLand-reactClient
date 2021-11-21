
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [reload, setReload] = useState(true);
    useEffect(() => {
        fetch('https://aqueous-cove-16901.herokuapp.com/manageAllOrders')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrders(data)
                setReload(true)
            })
    }, [reload])
    const handleUpdate = (id) => {
        const confirm = window.confirm('are you sure want to update status')
        if(confirm){
            fetch(`https://aqueous-cove-16901.herokuapp.com/updateStatus/${id}`,{
                method:'PUT'
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                setReload(false)
            })
        }
        else{
            alert('take time to think')
        }
    }
    const handleRemove =(id)=> {
        
        const confirm = window.confirm('are you sure want to remove? ')
        if(confirm){
            fetch(`https://aqueous-cove-16901.herokuapp.com/orders/${id}`,{
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                if(data.deletedCount){
                    alert('your order has been removed')
                    setReload(false)
                    console.log(reload)
    
                }
            })

        }
        else{
            alert('thanks for consideration')
        }

    }


    return (
        <>
            <div>
                <h3>Manage all products</h3>
                <div>
                    {
                        orders.map(order => <div style={{margin:'15px 0'}} key={order._id}>
                             <img style={{width:'250px'}} src={order.img} alt="" />
                        <p>your email:{order.email}</p>
                        <p>apartment name:{order.apartmentName}</p>
                        <p>order status: <span style={{fontWeight:'bold'}}> {order.status}</span></p>
                            <Button style={{marginRight:'10px'}} onClick={() => handleRemove(order._id)} variant='contained'>Remove</Button>
                            <Button onClick={() => handleUpdate(order._id)} variant='contained'>Update Status</Button>
                        </div>)
                    }
                </div>
            </div>
        </>
    );
};

export default ManageAllOrders;