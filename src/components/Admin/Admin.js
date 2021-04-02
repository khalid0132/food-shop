import React from 'react';
import './Admin.css';
import {useState} from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import './Admin.css'
import axios from 'axios';

const Admin = () => {
    const handleAdmin = () =>{
        console.log('Adding food')
    }

    
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

  const onSubmit = data => {
    
    const eventData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL
    };
    // console.log(data);
    const url = `https://strawberry-cupcake-78732.herokuapp.com/admin`;

    // console.log(eventData)

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res=> console.log('server side response', res))
    // console.log(data)
  };


  const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'e9ec87ac916fb0ca75e8f1c13ea2eb91');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            // console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

  }

    return (
       
            <Container>
            <Row>
                <Col className="col-md-3 product-design mt-5 pt-5">
                    <h5 className="pb-3" style={{cursor: 'pointer'}}>Manage Product</h5>
                    <h5 className="pb-3" onClick={handleAdmin} style={{cursor: 'pointer'}}>Add Product</h5>
                    <h5 className="pb-3" style={{cursor: 'pointer'}}>Edit Product</h5>
                </Col>
                <Col className="col-md-9 mt-5">
                  <div className="admin-form">
                  <h3>Handled by only Administrator</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p><input name="name" defaultValue="Food Name" ref={register} /></p>
                  <p><input name="price" defaultValue="Food Price" ref={register} /></p>
                  <p><input name="image" type="file" onChange={handleImageUpload} /></p>

                  
                  <input type="submit" />
              </form>
              </div>
                </Col>
            </Row>
            </Container>
     
    );
};

export default Admin;