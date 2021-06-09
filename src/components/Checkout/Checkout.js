// // import { Button } from 'bootstrap';
// import React, { useContext, useEffect, useState } from 'react';
// import { Button, Container } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import { useHistory, useParams } from 'react-router';
// import { UserContext } from '../../App';
// import './Checkout.css'

// const Checkout = () => {
//     const {_id} = useParams();
    
//     // const {_id, name, price} = {food}
//     const [product, setProduct] = useState([]);
//     useEffect(()=>{
//         fetch(`https://strawberry-cupcake-78732.herokuapp.com/foods/${_id}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             setProduct(data)
//         })
//     }, []);

// let history = useHistory();
// const handleOrder = (_id) =>{
//   console.log('View Order')
//   history.push(`/orders/${_id}`);
// }
//        return (
//       <Container>
//           <div className="App mt-5 admin-form">
//             <h2>Checkout</h2>
//             {/* <h3>Name:{product._id} </h3> */}
//             {/* <p>Id: {_id}</p> */}
//             <h5>Name: {product.name}</h5>
//             <p><img src={product.imageURL} alt=""/></p>
//             <p>Price: <strong>{product.price}</strong> SEK</p>
//             <Button variant="primary" onClick={()=>handleOrder(_id)}>Visa orders</Button>{' '}
//             <Button variant="warning" href='https://secure.handelsbanken.se/logon/se/priv/sv/mbidqr/'>Betala nu</Button>{' '}
//         </div>
//       </Container>
//     );
// };

// export default Checkout;


// ------------------------------------------------------------------------

// import { Button } from 'bootstrap';
// import axios from 'axios';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import {  useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css'

const Checkout = () => {

  const { _id } = useParams();
  const [food, setFood] = useState([]);
  const [signInUser] = useContext(UserContext);

  useEffect(() => {
      fetch(`http://localhost:7200/product/${_id}`)
          .then((res) => res.json())
          .then((data) => setFood(data))
          .catch((err) => console.log(err));
  }, [_id]);

  const checkOutProduct = food.find((pd) => parseInt(pd._id) === parseInt(_id));

  const handleOrder = () => {
      const newOrder = {
          name: checkOutProduct?.name,
          price: checkOutProduct?.price,
          image: checkOutProduct?.imageURL,
          orderTime: new Date(),
          ...signInUser
      };

      // const url = "https://strawberry-cupcake-78732.herokuapp.com/addOrder";
      const url = "http://localhost:7200/addOrder";
      axios.post(url, {
        email: signInUser.email,
        name: newOrder.name,
        price: newOrder.price,
        image: newOrder.image,
        date: newOrder.orderTime
      })
      .then(function(response) {
        
        alert("Your products ordered Successfully!")
      })
      .catch(function(err) {
        console.log(err)
      })
     
  };

  return (
      <Container className="checkout">
          <div className="d-flex justify-content-between">
              <h2>Name</h2>
              <h2>Image</h2>
              <h2>Price</h2>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
              <h4>{checkOutProduct?.name}</h4>
              <img style = {{height:'80px'}} src= {checkOutProduct?.imageURL} alt="" />
              <h4>$ {checkOutProduct?.price}</h4>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
              <h4>Total Price</h4>
              <h4>$ {checkOutProduct?.price}</h4>
          </div>
          <br />
          <Button onClick={handleOrder} variant="outline-primary">
              Checkout
          </Button>
      </Container>
  );


};

export default Checkout;