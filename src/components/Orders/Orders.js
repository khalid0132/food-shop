
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Orders = () => {
    const {_id} = useParams();
        const [order, setOrder] = useState([]);

        // Context API
        const [signInUser, setSignInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch(`https://strawberry-cupcake-78732.herokuapp.com/foods/${_id}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setOrder(data)
        })
    }, []);

    const handleDelete = () => {
        console.log('Delete the product');
    }
    return (
      <Container>
            <div className="App mt-5 admin-form">
            {/* <h2>Order_id: {_id}</h2> */}
            <h5 className=" mb-3">Order namn: {order.name}</h5>
            <p><img src={order.imageURL} alt=""/></p>
            <p className="mb-5">Pris: <strong>{order.price}</strong> SEK</p>
            <Button variant="danger" onClick={handleDelete}>Radera </Button>{' '}
            <Button variant="success" href="https://secure.handelsbanken.se/logon/se/priv/sv/mbidqr/">Betala nu </Button>{' '}
            {/* <p>User Email: {signInUser.email}</p> */}
        </div>
      </Container>
    );
};

export default Orders;