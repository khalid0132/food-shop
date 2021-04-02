import React from 'react';
import {Container} from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
    <div className="header">
          {/* <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link eventKey="link-1" >Link</Nav.Link>
             </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link eventKey="link-2" >Link</Nav.Link>
        </Nav.Item>
        </Nav> */}


        <Container>
        <nav class="navbar navbar-expand-lg bg-primary ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Stockholm FoodBank</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li class="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/orders/id">Orders</Link>
        </li>
        <li class="nav-item">
          <Link to="/admin">Admin</Link>
        </li>
        <li class="nav-item">
          <Link to="/login">Login</Link>
        </li>
       
      </ul>

    </div>
  </div>
</nav>
        </Container>



      {/* <nav>
        <div style={{textAlign: 'left'}}> <a href="#" >SL</a> </div>
        <div  style={{textAlign: 'right'}}>
        <a href="#">Home</a>
        <a href="#">Destination</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        <a href="#">Login</a>
        </div>
      
      </nav> */}
      
  
        
        </div>
        
        
    );
};

export default Header;