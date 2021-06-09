// import { Button } from 'react-bootstrap';
// import React, { useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

// const ViewFood = ({food}) => {
//     // const {food} = props.food;
//     // const halal = require(`../../images/${food.pic}`);
//     // const [item, setItem] = useState([]);
//     const {_id} = food;
//     const history = useHistory();
//     const handleBuy =(_id)=>{
//         // const url = `/foods/${_id}`;
//         history.push(`/checkout/${_id}`);
//         // console.log(id) // CHECK VIDEO 38-5-3/4
//     }

//     return (
//         <Card style={{ width: '18rem' }} className="container mb-4 mt-4" >
//             <Card.Img variant="top" src={food.imageURL} />
//             <Card.Body>
//                 <Card.Title className="text-center">{food.name}</Card.Title>
//                 <Card.Text className="font-weight-bold">Sek {food.price} /per <Button className="ml-3" variant="primary" onClick={()=>handleBuy(_id)}>Köp nu</Button></Card.Text>
                
//             </Card.Body>
//         </Card>
//     );
// };

// export default ViewFood;


import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './ViewFood.css'

const ViewFood = (props) => {

   
    const {food} = props;
    const {_id, name, imageURL, price } = food;
    

    return (

        <Card style={{ width: '18rem' }} className="container mb-4 mt-4 border-card" >
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title className= "text-center">{name}</Card.Title>
                <Card.Text className = "font-weight-bold"> ${price} 
                <Button className = "margin" variant="primary" as = {Link} to = {`checkout/${_id}`}>Buy now</Button></Card.Text>
                
            </Card.Body>
        </Card>
       
    );
};

export default ViewFood;