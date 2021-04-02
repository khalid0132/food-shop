
import React from 'react';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const Orders = () => {
    const {_id, name, price} = useParams();

    const handleDelete = () => {
        console.log('Delete the product');
    }
    return (
      <Container>
            <div className="App mt-5 admin-form">
            <h2>Order_id: {_id}</h2>
            <h3>Order Name: {name}</h3>
            <h3>Order Price: {price}</h3>
            <Button variant="danger" onClick={handleDelete}>Delete </Button>{' '}
            <Button variant="success" >Payment </Button>{' '}
        </div>
      </Container>
    );
};

export default Orders;