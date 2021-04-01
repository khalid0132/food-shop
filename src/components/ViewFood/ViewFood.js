import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const ViewFood = ({food}) => {
    // const {food} = props.food;
    // const halal = require(`../../images/${food.pic}`);
    const {_id} = food;
    const handleBuy =(_id)=>{
        console.log('buyingggg')
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
                <Card.Text className="font-weight-bold">Sek {food.price} /per <Button className="ml-3" variant="primary" onClick={handleBuy}>Buy now</Button></Card.Text>
                
            </Card.Body>
        </Card>
    );
};

export default ViewFood;