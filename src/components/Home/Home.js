import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ViewFood from '../ViewFood/ViewFood';

// import photo1 from './bayLeaves.png';
// import photo2 from './chanachur.png';
// import photo3 from './chips.png';
// import photo4 from './gas.png';
// import photo5 from './milkPowder.png';
// import photo6 from './oil.png';
// import photo7 from './onion.png';
// import photo8 from './rice.png';
// import photo9 from './soap.png';

const Home = () => {
    // toggleSpinner();
    const [foods, setFoods] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:7200/foods')
        .then(res => res.json())
        .then(data => {
            setFoods(data)
            // console.log(data)
        })
    })

    // FAKE DATA THAT NOT USED. COLLECTED FROM DATABASE
    // const foods = [
    //     {
    //         imgUrl: photo1,
    //         name: 'BayLeaves',
    //         price: 20
    //     },
    //     {
    //         imgUrl: photo2,
    //         name: 'Chanachur',
    //         price: 15
    //     },
    //     {
    //         imgUrl: photo3,
    //         name: 'Chips',
    //         price: 10
    //     },
    //     {
    //         imgUrl: photo4,
    //         name: 'Gas',
    //         price: 200,
    //     },
    //     {
    //         imgUrl: photo5,
    //         name: 'MilkPowder',
    //         price: 150,
    //     },
    //     {
    //         imgUrl: photo6,
    //         name: 'Oil',
    //         price: 40,
    //     },
    //     {
    //         imgUrl: photo7,
    //         name: 'Onion',
    //         price: 12,
    //     },
    //     {
    //         imgUrl: photo8,
    //         name: 'Rice',
    //         price: 22,
    //     },
    //     {
    //         imgUrl: photo9,
    //         name: 'Soap',
    //         price: 15,
    //     },
    // ]
    return (
        <Container>
            <div className="row">
                {
                    foods.map(food => <ViewFood food = {food}></ViewFood>)
                }
            </div>
        </Container>
    );
};

// Spinner works as  an extra work
// const toggleSpinner = () => {
//     const spinner = document.getElementById("loading_spinner");
//     spinner.classList.toggle("d-md-none");
//   };

export default Home;