import React from 'react';
import { Card } from 'react-bootstrap';
import { BsFillCartCheckFill} from 'react-icons/bs';

const SingleTshart = (props) => {
      const { tshart , addToCard} = props
      const {name , img , price} = tshart
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
<button onClick={() => addToCard(tshart)}  className='AddCartBtn'>Add To Cart <BsFillCartCheckFill> </BsFillCartCheckFill></button>
</Card>
      </div>
      );
};

export default SingleTshart;