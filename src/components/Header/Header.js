import React from 'react';
import {Container} from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
    <div className="header">
      
        <Container>
        <nav class="navbar navbar-expand-lg bg-primary ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">stockholms hemköp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
        <li class="nav-item">
          <Link to="/home">hem</Link>
        </li>
        <li class="nav-item">
          <Link to="/orders/:_id">orders</Link>
        </li>
        <li class="nav-item">
          <Link to="/admin">administratör</Link>
        </li>
        <li class="nav-item">
          <Link to="/login">logga in</Link>
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