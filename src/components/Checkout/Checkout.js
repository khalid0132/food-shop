import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css'

const Checkout = () => {
    const {_id, name, price} = useParams();
    
    // const {_id, name, price} = {food}
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:7200/foods/${_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProduct(data)
        })
    }, []);

    // Context from app.js
  const [signInUser, setSignInUser] = useContext(UserContext);

  // React hook form for extra form validation and error message
  const { register, handleSubmit, errors } = useForm();

  // handle redirected to user task
  let history = useHistory();
  function handleUserTask() {
    history.push('/userDashboard');
  }

  // When user registered send the data to server and redirect user to UserDashboard
 const onSubmit = (data) => {
   const newOrder = { ...data };
  

   fetch('http://localhost:7200/addOrder', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(newOrder),
   })
     .then((res) => res.json())
     .then((data) => {
       if (data) {
         handleUserTask();
       }
     });
 };

       return (
        <div>
            <h1>Checkoutttt</h1>
            {/* <h3>Name:{product._id} </h3> */}
            <p>Id: {_id}</p>
            <p>Name: {name}</p>
            <p>Price: {price}</p>

        </div>
    );
};

export default Checkout;