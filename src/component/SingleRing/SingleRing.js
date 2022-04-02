import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import './SingleRing.css'

const SingleRing = (props) => {
      const { ring , addToCard} = props
      const {name , img , price} = ring
     
      return (
            <div className='container'>
                  <Card className='h-100 shadow' style={{ width: '18rem' }}>
  <Card.Img variant="top" className='ring-img' src={img} />
  <Card.Body className='prodect-detilas'>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
            <h3>${price}</h3>
    </Card.Text>
    
  </Card.Body>
  <button onClick={()=> addToCard(ring)} className='AddCartBtn'>Add To Cart</button>
</Card>
            </div>
      );
};

export default SingleRing;