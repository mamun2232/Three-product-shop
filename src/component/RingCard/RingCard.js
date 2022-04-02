import React from 'react';
import './RingCard.css'
const RingCard = ({carts}) => {
      let total = 0
      let shipping = 0
      

      for(const prodect of carts){
            total = total + prodect.price
            shipping += prodect.shipping
      }
      const tax = total * 0.1
      const grandTotal = total + shipping + tax

     
      return (
            <div className='card-calculation'>
                  <h5>Total Price: ${total}</h5>
                  <h5>Total Shipping: ${shipping}</h5>
                  <h5>Tax: ${parseInt(tax)}</h5>
                  <h4>Grand Total: {parseInt(grandTotal)}</h4>
                 <div className="order-now">
                 <button className='orderBtn'>Order Confrom</button>
                 </div>
            </div>
      );
};

export default RingCard;