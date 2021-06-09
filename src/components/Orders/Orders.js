
// import React, { useContext, useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';
// import { useParams } from 'react-router';
// import { UserContext } from '../../App';

// const Orders = () => {
//     const {_id} = useParams();
//         const [order, setOrder] = useState([]);

//         // Context API
//         const [signInUser, setSignInUser] = useContext(UserContext);
//     useEffect(()=>{
//         fetch(`https://strawberry-cupcake-78732.herokuapp.com/foods/${_id}`)
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data)
//             setOrder(data)
//         })
//     }, []);

//     const handleDelete = () => {
//         console.log('Delete the product');
//     }
//     return (
//       <Container>
//             <div className="App mt-5 admin-form">
//             {/* <h2>Order_id: {_id}</h2> */}
//             <h5 className=" mb-3">Order namn: {order.name}</h5>
//             <p><img src={order.imageURL} alt=""/></p>
//             <p className="mb-5">Pris: <strong>{order.price}</strong> SEK</p>
//             <Button variant="danger" onClick={handleDelete}>Radera </Button>{' '}
//             <Button variant="success" href="https://secure.handelsbanken.se/logon/se/priv/sv/mbidqr/">Betala nu </Button>{' '}
//             {/* <p>User Email: {signInUser.email}</p> */}
//         </div>
//       </Container>
//     );
// };

// export default Orders;


import React, { useContext, useEffect, useState } from 'react';
// import { Button, Table } from 'react-bootstrap';

import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';

import './Orders.css'


const Orders = () => {

    const[ orders, setOrders] = useState([]);
    const[signInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch("http://localhost:7200/order1?email="+ signInUser.email)
        .then(res=>res.json())
        .then(data=> setOrders(data))
        .catch(err=>console.log(err))
    },[signInUser.email])
    
    return (
      <div className = "mt-5 container">
          <h1 style ={{textAlign: "center"}}>Your Orders Here</h1>
          <br />
          <br />

<div className = "container border bg-info fw-bold p-2 ">
    <div className = "row" >
        <div className = "col">
            Email Address
        </div>
        <div className = "col">
            Product Name
        </div>
        <div className = "col">
            Price
        </div>
        <div className = "col">
            Date
        </div>

    </div>

</div>
         
          {
              orders.map(order=> <OrderDetails key = {order._id} order = {order}></OrderDetails>)
          }
          
      </div>
    );
};

export default Orders;