import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ViewFood = ({food}) => {
    // const {food} = props.food;
    // const halal = require(`../../images/${food.pic}`);
    const [item, setItem] = useState([]);
    const {_id} = food;
    const history = useHistory();
    const handleBuy =(_id, name, price)=>{
        // const url = `/foods/${_id}`;
        history.push(`/checkout/${_id}`);
        // console.log(id)
    }

    return (

        // <div className ="col-md-4">
        //     {/* <img src={require(`../../images/${food.pic}`)} alt=""/> */}
        //     <p>{food.name}</p>
        //     <p>{food.price}</p>
        // </div>
        <Card style={{ width: '18rem' }} className="container mb-4 mt-4" >
            <Card.Img variant="top" src={food.imageURL} />
            <Card.Body>
                <Card.Title className="text-center">{food.name}</Card.Title>
                <Card.Text className="font-weight-bold">Sek {food.price} /per <Button className="ml-3" variant="primary" onClick={()=>handleBuy(_id)}>Buy now</Button></Card.Text>
                
            </Card.Body>
        </Card>
    );
};

export default ViewFood;